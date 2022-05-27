import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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

}
