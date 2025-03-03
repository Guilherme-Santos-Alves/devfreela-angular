import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-create-edit',
  templateUrl: './project-create-edit.component.html',
  styleUrls: ['./project-create-edit.component.scss']
})
export class ProjectCreateEditComponent implements OnInit {

    id: string;
    screenType: 'edit' | 'create';

    constructor(private router: Router) { 
        this.id = history.state.id;
        console.log(this.id);
        this.screenType = this.id? 'edit' : 'create';
    }

    ngOnInit(): void {
        this.setScreenTypeTexts();
        this.fillInputs();
    }

    createOrEdit() {
        //Inicia a massa de dados (payload)
        let payload = {
            title: (document.querySelector("#title") as any).value,
            totalCost: (document.querySelector("#totalCost")as any).value,
            description: (document.querySelector("#description")as any).value,
            idClient: localStorage.getItem("idClient")
        }

        //Enviar para API
        fetch(`https://622cd1e6087e0e041e147214.mockapi.io/api/projects${this.screenType === 'edit' ? ('/' + this.id) : ''}`, {
                method: this.screenType === 'edit' ? 'PUT' : 'POST',
                body: JSON.stringify(payload),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => response.json())
            .then(response => {
                if (this.screenType === 'edit') {
                    alert('Editado com sucesso!');
                } else {
                    alert('Cadastrado com sucesso!');
                }

                this.router.navigateByUrl('list');

            })
    }

    fillInputs() {
        if (this.screenType === 'edit') {
            fetch(`https://622cd1e6087e0e041e147214.mockapi.io/api/projects/${this.id}`)
                .then(response => response.json())
                .then(project => {
                    (document.querySelector("#title")as any).value = project.title;
                    (document.querySelector("#totalCost")as any).value = project.totalCost;
                    (document.querySelector("#description")as any).value = project.description;
                })
        }
    }

    setScreenTypeTexts() {
        //MODO CRIAR
        if (this.screenType == 'create') {
            (document.querySelector('#main-title') as any).innerText = "Vamos cadastrar seu novo projeto!";
            (document.querySelector('#action-button') as any).innerText = "Cadastrar";
        }

        //MODO EDITAR
        if (this.screenType == 'edit') {
            (document.querySelector('#main-title') as any).innerText = "Editar projeto";
            (document.querySelector('#action-button') as any).innerText = "Salvar";
        }
    }

}