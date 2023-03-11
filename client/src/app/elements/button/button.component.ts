import {Component, Input} from "@angular/core";

@Component({
  selector: 'button-element',
  templateUrl: './button.component.html'
})

export class ButtonComponent{
  @Input() buttonType: string | undefined;
  @Input() text: string | undefined;

  handleClick = () => {
    console.log('la noluy burda')
  }
}

