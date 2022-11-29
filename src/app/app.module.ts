import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { HotToastModule } from '@ngneat/hot-toast';
import { DataService } from './services/data.service';
import { AuthGuard } from './services/auth-guard.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { KategoriComponent } from './components/kategori/kategori.component';
import { UyeComponent } from './components/uye/uye.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, KategoriComponent, UyeComponent, LoginComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HotToastModule.forRoot(), FormsModule, HttpClientModule, ReactiveFormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, DataService, HotToastModule, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
