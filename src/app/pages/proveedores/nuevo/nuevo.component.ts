import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styles: []
})
export class NuevoComponent implements OnInit {
  public greeting: any;
  public proveedores: any;

  constructor() { }

  ngOnInit() {
    this.greeting = this.greeting + 'go go go',
    this.proveedores.push('a');
    console.log('greeting I:' + this.greeting);
  }

}
