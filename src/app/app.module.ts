import {NgModule, isDevMode, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CabecalhoComponent} from './cabecalho/cabecalho.component';
import {RodapeComponent} from './rodape/rodape.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SidebarComponent} from './sidebar/sidebar.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {DetalhesComponent} from './detalhes/detalhes.component';
import {CadastroComponent} from './cadastro/cadastro.component';
import {ListarosComponent} from "./listaros/listaros.component";
import {CpfPipe} from './pipe/cpf.pipe';
import {TelefonePipe} from './pipe/telefone.pipe';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    SidebarComponent,
    LoginComponent,
    HomeComponent,
    DetalhesComponent,
    CadastroComponent,
    ListarosComponent,
    CpfPipe,
    TelefonePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {
}
