import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  constructor(private http: HttpClient) {}
  obterTodosUsuario() {
    return this.http.get(`${environment.urlAPI}/Usuario`);
  }
  obterusuarioPorId(id) {
    return this.http.get(`${environment.urlAPI}/Usuario`);
  }
  InserirUsuario(usuario) {
    return this.http.post(`${environment.urlAPI}/Usuario`,usuario);
  }
  editarUsuario(usuario) {
    return this.http.put(`${environment.urlAPI}/Usuario/${usuario.id}`, usuario);
  }
  excluirUsuario(id) {
    return this.http.delete(`${environment.urlAPI}/Usuario/${id}`);
  }
}
