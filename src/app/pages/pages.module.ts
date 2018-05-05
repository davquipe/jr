
import { NgModule } from '@angular/core';


import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


// Componentes
import { PagesComponent } from './pages.component';



@NgModule({
    declarations: [
        PagesComponent
    ],
    exports: [
    ],
    imports: [
        CommonModule,
        FormsModule
    ]
})
export class PagesModule { }
