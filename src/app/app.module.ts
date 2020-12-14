import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ButtonsComponent } from './components/buttons/buttons/buttons.component';
import { MenuComponent } from './components/menu/menu.component';
import { ButtonSelectorComponent } from './components/button-selector/button-selector.component';
import { FormsModule } from '@angular/forms';
import { LincsButtonComponent } from './common/components/lincs-button/lincs-button.component';

@NgModule({
    declarations: [
        AppComponent,
        ButtonsComponent,
        MenuComponent,
        ButtonSelectorComponent,
        LincsButtonComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        MatIconModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
