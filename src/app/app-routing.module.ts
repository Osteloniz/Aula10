import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApoliceComponent } from './apolice/apolice.component';
import { CadastraAlunoComponent } from './cadastra-aluno/cadastra-aluno.component';
import { CalculaMediaSimplesComponent } from './calcula-media-simples/calcula-media-simples.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { PageNotFoundComponent } from './compartilhado/page-not-found/page-not-found.component';
import { Filho1Component } from './pai/filho1/filho1.component';
import { Filho2Component } from './pai/filho2/filho2.component';
import { PaiComponent } from './pai/pai.component';
import { UsuarioComponent } from './usuario/usuario.component';

const routes: Routes = [
  {path: '', redirectTo:'/calculadora', pathMatch:'full'},//redireciona para pagina configurada, o pathMatch: 'full' para manter o caminho completo.
  {path: 'apolice', component: ApoliceComponent},
  {path: 'usuario', component: UsuarioComponent},
  {path: 'cadastroAluno', component: CadastraAlunoComponent},
  {path: 'calculadora', component: CalculadoraComponent },
  {path: 'calculadora/:num1/:num2', component: CalculadoraComponent},
  {path: 'calcula-media-simples', component: CalculaMediaSimplesComponent},
  {path:'pai', component: PaiComponent, children :[
    {path: 'filho1', component: Filho1Component},
    {path: 'filho2', component: Filho2Component}
  ]},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {    

 }
