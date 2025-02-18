// @ts-nocheck

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { msg } from 'src/app/shared/util/msg';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    minhaVar: string = ''

    constructor(private fb: FormBuilder) { }

    msg = msg;

    registerForm :FormGroup = this.fb.group({
        role: ['', [Validators.required]],
        fullName: ['', [Validators.required]],
        birthdate: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]]
    })

    ngOnInit(): void {
        
    }

    checkIfAnyRoleIsChecked() {
        let list = document.getElementsByName("role");
        let counter = 0;

        for (let radioButton of list) {
            if (radioButton.checked === false) {
                counter++;
            }
        }

        return counter !== list.length;
    }

    toogleRole(role: 'dev' | 'cliente'){
        this.registerForm.get('role')?.setValue(role);
    } 

    cadastrar() {

        if (this.registerForm.valid){
            console.log(this.registerForm.value);
        } else {
            this.registerForm.markAllAsTouched();
        }

        // Checa se alguma role foi checada.
        // if (this.checkIfAnyRoleIsChecked() === false) {
        //     Swal.fire(
        //         'Algo de errado...',
        //         'Marque alguma role!',
        //         'error'
        //     )
        //     return;
        // }

        // Inicia a massa de dados (payload)
        // let payload = {
        //     role: document.getElementsByName("role")[0].checked == true ? 'dev' : 'cliente',
        //     fullName: document.querySelector("#fullName").value,
        //     birthdate: document.querySelector("#birthdate").value,
        //     email: document.querySelector("#email").value,
        //     password: document.querySelector("#password").value
        // }

        // Enviar para API
        // fetch("https://67563a3811ce847c992c3095.mockapi.io/api/users", {
        //     method: 'POST',
        //     body: JSON.stringify(payload),
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // })
        // .then(response => response.json())
        // .then(response => {
        //     Swal.fire({
        //         title: 'Bom Trabalho!',
        //         text: "Cadastrado com sucesso!",
        //         icon: 'success',
        //         confirmButtonText: 'Ok!'
        //     }).then((result) => {
        //         if (result.isConfirmed) {
        //             localStorage.setItem("userName", response.fullName);
        //             localStorage.setItem("role", response.role === "dev" ? "Desenvolvedor" : "Cliente");
        //             localStorage.setItem("idClient", response.id);

        //             window.location.href = "list.html";
        //         }
        //     })
        // })
    }

    isInvalid(inputName: string, validatorName: string){
        return this.registerForm.get(inputName).errors?.[validatorName] && this.registerForm.get(inputName)?.touched;
    }

}