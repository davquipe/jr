import { Component, Input, OnInit } from '@angular/core';
import {NgbPaginationConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
})
export class ProductoResultsComponent implements OnInit {
  page = 4;

  @Input()
  productoresultsPage;

  constructor() { }

  ngOnInit() {
    alert('Ver Resultados de Productos');

  } // dasdasd

}
