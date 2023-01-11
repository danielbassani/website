import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainPanelComponent } from './main-panel/main-panel.component';
import { IntroductionComponent } from './main-panel/introduction/introduction.component';
import { EducationComponent } from './main-panel/education/education.component';
import { WorkExperienceComponent } from './main-panel/work-experience/work-experience.component';
import { SkillsPanelComponent } from './skills-panel/skills-panel.component';
import { ProjectsComponent } from './skills-panel/projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    MainPanelComponent,
    IntroductionComponent,
    EducationComponent,
    WorkExperienceComponent,
    SkillsPanelComponent,
    ProjectsComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
