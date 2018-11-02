import { Component, OnInit } from '@angular/core';
import { selectExpandSidebar, IRootState } from '../../../store';
import { Store, select } from '@ngrx/store';
import { ToggleSidebarAction } from '../../../store/general/general.actions';
import { Observable } from 'rxjs/index';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './app-sidebar.component.html',
  styleUrls: ['./app-sidebar.component.scss']
})
export class AppSidebarComponent implements OnInit {
  public expandSidebar$: Observable<boolean>;

  constructor(private _store: Store<IRootState>, private _router: Router) {
    this.expandSidebar$ = this._store.pipe(select(selectExpandSidebar));
  }

  ngOnInit() {
  }

  toggleSidebar(v?: undefined | boolean): void {
    this._store.dispatch(new ToggleSidebarAction(v));
  }

  navigateTo(route: string = '/dashboard'): void {
    this._router.navigateByUrl(route);
  }

}
