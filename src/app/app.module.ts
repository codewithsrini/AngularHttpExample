import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { HttpClientModule } from '@angular/common/http';
import { TodoService } from './services/todo.service';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    TodoService,
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
