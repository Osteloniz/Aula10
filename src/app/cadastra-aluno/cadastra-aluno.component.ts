import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cadastra-aluno',
  templateUrl: './cadastra-aluno.component.html',
  styleUrls: ['./cadastra-aluno.component.css']
})
export class CadastraAlunoComponent implements OnInit {
/*   @Input() num1 : number;
  @Output() num1Change = new EventEmitter<number>();
  inativo: boolean = false;
  estiloBotao: String; */
  ra: string;
  nome: string;
  email: string;
  celular: number
  constructor() { }

  ngOnInit(): void {
/*     this.num1 = this.num1 * 2
    this.num1Change.emit(this.num1); */

   /* this.num1 = 15;
   this.inativo = true;*/
   /* this.estiloBotao = "btn btn-primary"; */
  }

/*   mudarValorNum1() {
    this.num1 =  this.num1 * 2;
  } */

  enviarFormulario() {
    
  }

}
