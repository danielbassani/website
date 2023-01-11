import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-skills',
  templateUrl: './job-skills.component.html',
  styleUrls: ['./job-skills.component.css']
})
export class JobSkillsComponent implements OnInit {

  technicalSkills = [
    ['TypeScript', 'Angular', 'Google Cloud Platform'], 
    ['JavaScript', 'AngularJS', 'Git'],
    ['Java', 'SpringBoot', 'Gitlab'],
    ['HTML', 'Cypress', 'Jenkins'],
    ['CSS', 'JUnit', 'Maven'], 
    ['C#', 'Bootstrap', 'NodeJS']
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
