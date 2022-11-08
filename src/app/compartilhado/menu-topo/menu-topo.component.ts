import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-topo',
  templateUrl: './menu-topo.component.html',
  styleUrls: ['./menu-topo.component.css']
})
export class MenuTopoComponent implements OnInit {
  @Input() estaAutenticado : boolean = false; //@input virou um propriedade do menu-topo
  //criar array de string com as informações abaixo
  menus : any = [
    { rota: 'calculadora', titulo: 'Calculadora'},
    { rota: 'calcula-media-simples', titulo: 'Calcula Média'},
    { rota: 'pai', titulo: 'Rota Aninhada'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
