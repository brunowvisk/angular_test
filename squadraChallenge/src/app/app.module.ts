import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DevformComponent } from './components/devform/devform.component';
import { UpdatedevformComponent } from './components/updatedevform/updatedevform.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';;
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {  MatDialogModule } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { ServicesService } from './data/services/services.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DevformComponent,
    UpdatedevformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatIconModule,
    MatDialogModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
  ],
  providers: [ HttpClientModule, ServicesService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
