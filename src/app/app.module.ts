import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from "@angular/router"
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from "@angular/common/http";
import { DetailsComponent } from './details/details.component';
import { ListComponent } from './list/list.component'

@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    RouterModule.forRoot(
      [{path:"",component:ListComponent},{path:"details",component:DetailsComponent}]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
