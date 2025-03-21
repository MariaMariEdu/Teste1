import { Component } from '@angular/core';

@Component({
  selector: 'app-forms',
  standalone: false,
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {
  num1: number = 0;
  num2: number = 0;
  num3: number = 0;
  higher: number = 0;

  compare(){
    if (this.num1 > this.num2 && this.num1 > this.num3) {this.higher = this.num1}
    else if (this.num2 > this.num3 && this.num2 > this.num1) {this.higher = this.num2}
    else {this.higher = this.num3}
  }
}
