import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-skills',
  templateUrl: './job-skills.component.html',
  styleUrls: ['./job-skills.component.css']
})
export class JobSkillsComponent implements OnInit {

  /*
  technicalSkills = [
    ['TypeScript', 'Angular', 'Google Cloud Platform'], 
    ['JavaScript', 'AngularJS', 'Git'],
    ['Java', 'SpringBoot', 'Gitlab'],
    ['HTML', 'Cypress', 'Jenkins'],
    ['CSS', 'JUnit', 'Maven'], 
    ['C#', 'Bootstrap', 'NodeJS']
  ]
  */

  technicalSkills: Array<Array<TechnicalSkill>> = [
    [new TechnicalSkill('TypeScript', 'ts-icon.png'), new TechnicalSkill('Angular', 'angular-icon.png'), new TechnicalSkill('Google Cloud', 'gcp-icon.png')],
    [new TechnicalSkill('JavaScript', 'js-icon.png'), new TechnicalSkill('AngularJS', 'angularjs-icon.png'), new TechnicalSkill('Git', 'git-icon.png')],
    [new TechnicalSkill('Java', 'java-icon.png'), new TechnicalSkill('SpringBoot', 'sb-icon.png'), new TechnicalSkill('Gitlab', 'gitlab-icon.png')],
    [new TechnicalSkill('HTML', 'html-icon.png'), new TechnicalSkill('Cypress', 'cypress-icon.png'), new TechnicalSkill('Jenkins', 'jenkins-icon.png')],
    [new TechnicalSkill('CSS', 'css-icon.png'), new TechnicalSkill('JUnit', 'junit-icon.png'), new TechnicalSkill('Maven', 'mvn-icon.png')],
    [new TechnicalSkill('C#', 'csharp-icon.png'), new TechnicalSkill('Bootstrap', 'bs-icon.png'), new TechnicalSkill('NodeJS', 'nodejs-icon.png')]

  ]

  constructor() { }

  ngOnInit(): void {
  }

}

class TechnicalSkill {
  constructor(public title:string, public iconURL: string) {
  }
}
