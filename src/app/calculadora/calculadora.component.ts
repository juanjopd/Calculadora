import { Component } from "@angular/core";

@Component({
  selector: "app-calculadora",
  templateUrl: "./calculadora.component.html",
  styleUrls: ["./calculadora.component.css"],
})
export class CalculadoraComponent {
  title = "Calculadora";
  numero1: number = 0;
  numero2: number = 0;
  resultado: number = 0;

  suma(): void {
    this.resultado = this.numero1 + this.numero2;
  }

  resta(): void {
    this.resultado = this.numero1 - this.numero2;
  }

  multiplicacion(): void {
    this.resultado = this.numero1 * this.numero2;
  }

  division(): void {
    this.resultado = this.numero1 / this.numero2;
  }
}
