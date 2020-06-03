import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() esAdmin: boolean = false;
  public mostrarLogin: boolean = false;
  public mostrarUsuario: boolean = false;
  public mostrarTodo: boolean = true;
  public usuario: string = "";
  public link: string = "/";

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.usuario = localStorage.getItem("usuario");
    this.link = this.esAdmin ? "/admin" : "/";
  }

  salir() {
    localStorage.clear();
    this.router.navigate(["/"]);
  }

  navegar() {
    if (this.esAdmin)
      this.router.navigate(["/admin"]);
    else
      this.router.navigate(["/"]);
  }

  focusLogout() {
    setTimeout(() => {
      let element = document.getElementById("logout");
      element ? element.focus() : null;
    }, 100);
  }

  cambiarMenu() {
    this.mostrarTodo = !this.mostrarTodo;
    let header = document.getElementById("header-general");
    if (this.mostrarTodo) {
      document.body.classList.add('expand-data');
      header ? header.classList.add('expand-header') : null;
    } else {
      document.body.classList.remove('expand-data');
      header ? header.classList.remove('expand-header') : null;
    }
  }

  ocultar(event) {
    if (event && !event.relatedTarget) {
      this.mostrarUsuario = false;
    }
  }

  ejecutarAccion() {
    this.mostrarLogin = false;
    this.mostrarUsuario = true;
  }

}
