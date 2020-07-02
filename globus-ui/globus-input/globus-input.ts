import { Component, Input } from '@angular/core';

@Component({
  selector: 'globus-input',
  templateUrl: 'globus-input.html',
  styleUrls: ['globus-input.scss']
})
export class GlobusInputComponent {

  @Input() private label: string;
  @Input() private value: any;

  constructor() {
    
  }

}
