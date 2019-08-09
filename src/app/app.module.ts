import { BrowserModule } from '@angular/platform-browser';
import { NgModule, HostListener } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MenuComponent } from './menu/menu.component';
import {HotkeyModule} from 'angular2-hotkeys';
import { MenuDiyComponent } from './menu-diy/menu-diy.component';
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgPrimeMenuComponent } from './ng-prime-menu/ng-prime-menu.component';


@NgModule({
  declarations: [
    AppComponent,
    SimpleFormComponent,
    MenuComponent,
    MenuDiyComponent,
    NgPrimeMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    HotkeyModule.forRoot(),
    MenubarModule,
    MenuModule,
    ButtonModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  
}
