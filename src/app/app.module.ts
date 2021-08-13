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
import { FormsModule } from '@angular/forms';
import { SvmComponent } from './svm/svm.component';
import { NaivebayesComponent } from './naivebayes/naivebayes.component';
import { LstmComponent } from './lstm/lstm.component';
import { LogisticregressionComponent } from './logisticregression/logisticregression.component';
import { RandomforestComponent } from './randomforest/randomforest.component';

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
    FooterComponent,
    SvmComponent,
    NaivebayesComponent,
    LstmComponent,
    LogisticregressionComponent,
    RandomforestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
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
