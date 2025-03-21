import { Component } from '@angular/core';

@Component({
  selector: 'app-calc',
  standalone: false,
  templateUrl: './calc.component.html',
  styleUrl: './calc.component.css'
})
export class CalcComponent {
 num1: number = 0;
  num2: number = 0;
  result: number | null = null;

  operator: string = "#";
num2Visible: any;
sun: any;

  sum() {
    this.result = this.num1 + this.num2;
    this.operator = '+';
  }

  sub() {
    this.result = this.num1 - this.num2;
    this.operator = '-';
  }

  mult() {
    this.result = this.num1 * this.num2;
    this.operator = '*';
  }

  div() {
    if (this.num2 !== 0) {
      this.result = this.num1 / this.num2;
      this.operator = '÷';
    } else {
      this.result = null;
      alert('É impossivel dividir o zero! (* ￣︿￣)');
    }
  }

  pow() {
    this.result = Math.pow(this.num1, this.num2);
    this.operator = 'xⁿ';
  }

  sqrt() {
    if (this.num1 >= 0) {
      this.result = Math.sqrt(this.num1);
      this.operator = '√';
    } else {
      alert('É impossivel calcular raiz de número negativoo! ヽ（≧□≦）ノ ');
      this.result = null;
    }
  }

  clear() {
    this.num1 = 0;
    this.num2 = 0;
    this.result = null;
    this.operator = '';
  }

}
