import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Componentes
import { MainComponent } from './main.component';
import { ContentComponent } from './content/content.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        MainComponent,
        ContentComponent,
        NavbarComponent,
        ToolbarComponent
    ],
    exports: [
        MainComponent,
        ContentComponent
    ]
})
export class MainModule { }