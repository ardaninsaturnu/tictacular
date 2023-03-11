import {Component, Input} from "@angular/core";

@Component({
  selector: 'input-element',
  template: '<input type="{{ inputType }}"/>'
})

export class InputComponent{
  @Input() inputType = 'text';
}
