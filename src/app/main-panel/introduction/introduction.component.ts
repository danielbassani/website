import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent implements OnInit {

  public introduction:string = 
    'A 4th year software development student currently on internship with practical on-the-job experience developing cloud based software solutions. '
    + 'Experience working collaboratively in a team and meeting tight deadlines, along with utilizing problem-solving skills to think of quick solutions '
    + 'to problems. Excited to apply acquired skills on a larger-scale project and eager to take initiative to learn new skills on the job as needed.';

  constructor() { }

  ngOnInit(): void {
  }

}
