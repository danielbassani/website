import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  
  @Input() showSkillsPanel: boolean;
  @Output() showSkillsPanelChange = new EventEmitter();

  activePanelNav: Array<NavItem>;
  mainPanelNav: Array<NavItem> = [
    {label:"Introduction", id:"introduction"}, 
    {label:"Education", id:"education"}, 
    {label:"Work Experience", id:"work-experience"}, 
    {label: "More...", id: "main-panel"}
  ];
  skillsPanelNav: Array<NavItem> = [
    {label: "Projects", id:"projects"},
    {label: "Skills & Tech", id:"skills"},
    {label: "Relevant Course Work", id: "course-work"},
    {label: "More...", id: "skills-panel"}
  ]

  constructor() { }

  ngOnInit(): void {
    this.activePanelNav = this.mainPanelNav;
  }

  scroll(id: string): void {
    const div = document.getElementById('main-panel');
    const el = document.getElementById(id);

    if (div && el) {
      div.scrollTo({top: el.offsetTop - div.offsetTop - 15, "behavior": "smooth"});
    } else {
      console.warn('no main-panel or ', id);
    }
  }

  toggleSkillsPanel(): void {
    this.showSkillsPanel = !this.showSkillsPanel;
    this.showSkillsPanelChange.emit(this.showSkillsPanel);

    if (this.showSkillsPanel) {
      this.activePanelNav = this.skillsPanelNav;
    } else {
      this.activePanelNav = this.mainPanelNav;
    }
  }
}

class NavItem {
  constructor(public label:string, public id:string) {
  }
}
