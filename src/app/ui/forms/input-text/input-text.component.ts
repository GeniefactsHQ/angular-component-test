import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'ui-forms-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
})
export class InputTextComponent implements OnInit {
  @Input() placeholder: string = '';
  @Input() label: string | undefined;
  @Input() helperText: string | undefined;
  @Input() inputClasses: string | undefined;
  @Input() disabled: boolean = false;

  @Input() value: string = '';
  @Output() valueChange = new EventEmitter<string>();


  constructor() {
  }

  ngOnInit(): void {
  }

}
