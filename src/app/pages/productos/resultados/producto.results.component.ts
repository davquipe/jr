import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
})
export class ProductoResultsComponent implements OnInit {

  @Input()
  productoresultsPage;

  constructor() { }

  ngOnInit() {
    alert('Ver Resultados de Productos');

  } // dasdasd

}
