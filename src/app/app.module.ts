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
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/compartido/navbar/navbar.component';
import { BarraNavegacionComponent } from './components/compartido/barra-navegacion/barra-navegacion.component';
import { PaginaNoEncontradaComponent } from './components/compartido/pagina-no-encontrada/pagina-no-encontrada.component';
import { GraficasComponent } from './components/paginas/graficas/graficas.component';
import { BienvenidaComponent } from './components/paginas/bienvenida/bienvenida.component';
import { AlojamientoComponent } from './components/paginas/alojamiento/alojamiento.component';
import { AlojamientosComponent } from './components/paginas/alojamientos/alojamientos.component';
import { PerfilComponent } from './components/paginas/perfil/perfil.component';
import { PostularAlojamientoComponent } from './components/paginas/postular-alojamiento/postular-alojamiento.component';
import { SidebarComponent } from './components/compartido/sidebar/sidebar.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    BarraNavegacionComponent,
    PaginaNoEncontradaComponent,
    GraficasComponent,
    BienvenidaComponent,
    AlojamientoComponent,
    AlojamientosComponent,
    PerfilComponent,
    PostularAlojamientoComponent,
    SidebarComponent
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
