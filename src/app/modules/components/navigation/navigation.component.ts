import { Component } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import { SidebarService } from './sidebar/sidebar.service';


@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [MatProgressBarModule,MatIconModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {
  constructor(private sidebarService: SidebarService) { }

  toggleSidebar() {
    this.sidebarService.toggleSidebar(true);
    console.log(this.sidebarService.sidebarOpen$);
    
  }
  progress = 40;
sidenav: any;
}
