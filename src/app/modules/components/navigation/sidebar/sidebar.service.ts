import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private _sidebarOpen = new Subject<boolean>();
  sidebarOpen$ = this._sidebarOpen.asObservable();

  toggleSidebar(visible: boolean) {
    this._sidebarOpen.next(visible);
  }
  constructor() { }
}
