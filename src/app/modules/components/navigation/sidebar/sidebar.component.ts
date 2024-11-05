import { Component, OnInit } from '@angular/core';

import { SidebarService } from './sidebar.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {
  isVisible: boolean = false;

  constructor(private sidebarService: SidebarService) { }

  ngOnInit(): void {
    this.sidebarService.sidebarOpen$.subscribe((visible: boolean) => {
      this.isVisible = visible
    })
  }

  closeSidebar() {
    this.sidebarService.toggleSidebar(false);
  }

}
