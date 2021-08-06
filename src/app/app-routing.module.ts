import { TestingComponent } from './testing/testing.component';
import { AboutComponent } from './about/about.component';
import { ApplicationComponent } from './application/application.component';
import { StudyComponent } from './study/study.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"study", component:StudyComponent},
  {path:"application", component:ApplicationComponent},
  {path:"about", component:AboutComponent},
  {path:"testing", component:TestingComponent},
  {path:"**", component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
