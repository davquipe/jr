import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styles: []
})
export class ResultadosComponent implements OnInit {

  @Input()
  proveedoresPage;

  constructor() { }

  ngOnInit() {
    alert(2);
    debugger;

    // this.proveedoresPage.// manu;
  }

}
