import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SectionComponent } from './section/section.component';
import { WorkInfoComponent } from './work-info/work-info.component';
import { EducationInfoComponent } from './education-info/education-info.component';

@NgModule({
  declarations: [
    AppComponent,
    SectionComponent,
    WorkInfoComponent,
    EducationInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
