import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main-panel',
  templateUrl: './main-panel.component.html',
  styleUrls: ['./main-panel.component.css'],
})
export class MainPanelComponent implements OnInit {

  @Input()
  showSkillsPanel: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
