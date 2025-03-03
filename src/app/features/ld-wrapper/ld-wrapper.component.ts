import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ld-wrapper',
  templateUrl: './ld-wrapper.component.html',
  styleUrls: ['./ld-wrapper.component.scss']
})

export class LdWrapperComponent {
  @Input() typeCol: 'one-col' | 'two-col' = 'two-col';
  @Input() backBtn: string = '';

  constructor(private router: Router) {}

  redirectTo(url: string) {
    this.router.navigateByUrl(url);
  }

}
