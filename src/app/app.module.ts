import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Directivas


// RUTAS
import { APP_ROUTING } from './app.routes';


// SERVICIOS

// MODULOS
/*
import {NgxPaginationModule} from 'ngx-pagination'; // paginacion
import { OAuthModule } from 'angular-oauth2-oidc'; // Autenticacion
import { FormWizardModule } from 'angular2-wizard'; // Form wizard
import {ToolTipModule} from 'angular2-tooltip'; // Tooltip
import { AgmCoreModule } from '@agm/core'; // Modulo de mapas*/

// COMPONENTES
import { AppComponent } from './app.component';








@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // NgxPaginationModule,
    // AgmCoreModule.forRoot({
      // apiKey: 'AIzaSyB_8h8OFAoL5Z2HDgeH761GUwoadE_kttg'
    // }),
    APP_ROUTING,
    // PAGINAS_ROUTING,
    // FormWizardModule,
    // ToolTipModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    // OAuthModule.forRoot(),
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
