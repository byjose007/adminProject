export class Usuario {

  public rut: any = null;
  public pass: string = null;

  constructor(data?) {
    data ? this.hydrate(data) : null;
  }

  hydrate(data) {
    this.rut = data.rut ? data.rut : this.rut;
    this.pass = data.pass ? data.pass : this.pass;
  }

}