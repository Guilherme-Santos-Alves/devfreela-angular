import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ld-button',
  templateUrl: './ld-button.component.html',
  styleUrls: ['./ld-button.component.scss']
})
export class LdButtonComponent implements OnInit {
  

  constructor() { }

  @Input() textBtn: string = '';
  @Input() typeBtn: string = '';
  @Input() teste: string = '';

  ngOnInit(): void {
  }

}
