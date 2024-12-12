import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ld-header',
  templateUrl: './ld-header.component.html',
  styleUrls: ['./ld-header.component.scss']
})
export class LdHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.buildHeader();
  }

  checkIfUserIsLogged() {
    return localStorage.getItem("userName") && localStorage.getItem("role");
  }

  buildHeader() {
    if (this.checkIfUserIsLogged()){
      // tabela com user
    } else{
      // tabela simples
    }
  }
}