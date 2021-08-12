import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StudyComponent } from './study/study.component';
import { ApplicationComponent } from './application/application.component';
import { AboutComponent } from './about/about.component';
import { TestingComponent } from './testing/testing.component';
import { ChartsModule } from 'ng2-charts';
import { ChatspieComponent } from './chatspie/chatspie.component';
import { ChartsradarComponent } from './chartsradar/chartsradar.component';
import { ChartsbarComponent } from './chartsbar/chartsbar.component';
import { PercentagePieComponent } from './percentage-pie/percentage-pie.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudyComponent,
    ApplicationComponent,
    AboutComponent,
    TestingComponent,
    ChatspieComponent,
    ChartsradarComponent,
    ChartsbarComponent,
    PercentagePieComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    FontAwesomeModule,
  ],
  exports:[
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
