import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxsModule } from '@ngxs/store';
import { HttpClientModule } from '@angular/common/http';
import { UsersState } from './core/services/user.state';
import { UserService } from './core/services/user.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    NgxsModule.forRoot([UsersState])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
