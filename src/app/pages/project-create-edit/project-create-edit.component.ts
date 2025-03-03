import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectCEService } from './services/project-create-edit.service';
import { IProject } from 'src/app/shared/interfaces/IProject';
import { IDynamicText } from './interfaces/IDynamicText';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { msg } from 'src/app/shared/util/msg';
import { title } from 'process';

@Component({
  selector: 'app-project-create-edit',
  templateUrl: './project-create-edit.component.html',
  styleUrls: ['./project-create-edit.component.scss']
})
export class ProjectCreateEditComponent implements OnInit {

    id: string;
    screenType: 'edit' | 'create';

    dynamicText: IDynamicText = {
        title: '',
        btn: ''
    }

    projectForm :FormGroup = this.fb.group({
        title: ['', [Validators.required]],
        totalCost: ['', [Validators.required]],
        description: ['', [Validators.required]]
    })
    msg = msg;

    constructor(private router: Router, private ProjectCEService: ProjectCEService, private fb: FormBuilder) { 
        this.id = history.state.id;
        this.screenType = this.id? 'edit' : 'create';
    }

    ngOnInit(): void {
        this.setScreenTypeTexts();
        this.fillInputs();
    }

    createOrEdit() {
        if (this.projectForm.valid){
            let payload: IProject = this.projectForm.value;
            payload.idClient = Number(localStorage.getItem("idClient"));

    
            if (this.screenType === 'create'){
                this.ProjectCEService.postProject(payload).subscribe(
                    (response) => {
                        alert('Cadastrado com sucesso!');
                        this.router.navigateByUrl('list');
                    }
                )
            } 
    
            if (this.screenType === 'edit'){
                this.ProjectCEService.putProject(payload).subscribe(
                    (response) => {
                        alert('Editado com sucesso!');
                        this.router.navigateByUrl('list');
                    }
                )
            }
        } else {
            this.projectForm.markAllAsTouched();
        }
    }

    

    fillInputs() {
        if (this.screenType === 'edit') {
            this.ProjectCEService.getProject(Number(this.id)).subscribe(
                (response: any) => {

                    this.projectForm.patchValue({
                        title: response.title,
                        totalCost: response.totalCost,
                        description: response.description
                    })
                }
            )
        }
    }

    setScreenTypeTexts() {
        //MODO CRIAR
        if (this.screenType === 'edit') {
            this.dynamicText.title = 'Editar projeto';
            this.dynamicText.btn = 'Salvar'
        }

        //MODO EDITAR
        if (this.screenType === 'create') {
            this.dynamicText.title = 'Vamos cadastrar seu novo projeto!';
            this.dynamicText.btn = 'Cadastrar'
        }
    }

    isInvalid(inputName: string, validatorName: string){
        const formControl: any = this.projectForm.get(inputName);

        if (formControl.errors !== null){
            return formControl.errors?.[validatorName] && formControl?.touched;
        }
    }
}