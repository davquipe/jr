import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
})
export class ProductoResultsComponent implements OnInit {

  @Input()
  productosPage;

  constructor() { }

  ngOnInit() {
    alert(2);

  } // dasdasd

}
