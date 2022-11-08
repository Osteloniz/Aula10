import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-apolice',
  templateUrl: './apolice.component.html',
  styleUrls: ['./apolice.component.css']
})
export class ApoliceComponent implements OnInit {

  nome: String;
  sexo: String;
  idade: number;
  valor: number;
  resultado: number;
  apolice: number;

  constructor(public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.nome = this.route.snapshot.params['nome'];
    this.sexo = this.route.snapshot.params['sexo'];

    this.idade = this.route.snapshot.params['idade']
    ? parseInt(this.route.snapshot.params['idade'])
    : null;

    this.valor = this.route.snapshot.params['valor']
    ? parseInt (this.nome = this.route.snapshot.params['valor'])
    : null;
  }

  btnCalcular(){
    switch (this.sexo){
      case "M":
        if (this.idade > 25) {
          this.resultado = this.valor*0.1;
        } else if (this.idade <= 25) {
          this.resultado = this.valor*0.15;
        }
      break;
      case "F":
        this.resultado = this.valor*0.08; 
      break;
    }

  }
}
