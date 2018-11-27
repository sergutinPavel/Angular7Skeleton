import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ToggleSidebarAction } from '../../../store/general/general.actions';
import { Observable, Subscription, throwError } from 'rxjs/index';
import { catchError, map, mergeMap, switchMap } from 'rxjs/internal/operators';
import { Store, select } from '@ngrx/store';
import { IRootState, selectExpandSidebar } from '../../../store';
import { LogoutAction } from '../../../store/auth/auth.actions';
import { MConfirmComponent } from '../../modals/confirm/confirm.component';


@Component({
  selector: 'app-page-layout.app-page-layout',
  templateUrl: './page-layout.component.html',
  styleUrls: ['./page-layout.component.scss']
})
export class PageLayoutComponent implements OnInit, OnDestroy {
  subs: { [name: string]: Subscription } = {};
  expandSidebar$: Observable<any>;
  expandSidebar: boolean;

  constructor(private _store: Store<IRootState>, public dialog: MatDialog) {
    this.expandSidebar$ = this._store.pipe(select(selectExpandSidebar));
    // .pipe(filter(x => !!x))
    this.subs.expandSidebar = this.expandSidebar$.subscribe(x => {
      this.expandSidebar = x;
      // console.warn('this.expandSidebar$', x);
    });
  }
  ngOnInit() {
  }
  ngOnDestroy() {
    Object.keys(this.subs).forEach(s => this.subs[s].unsubscribe());
  }

  toggleSidebar(v?: undefined | boolean): void {
    this._store.dispatch(new ToggleSidebarAction(v));
  }

  logout(): void {
    this.openDialog().toPromise().then(res => {
      // console.warn('', res);
      this._store.dispatch(new LogoutAction);
    }).catch(e => {
      // console.error('', e);
    });
  }

  openDialog(): Observable<Promise<any>> {
    const dialogRef = this.dialog.open(MConfirmComponent, {
      // panelClass: 'app-full-screen-dialog',
      data: {name: 'the name', animal: 'Cat'}
    });
    return dialogRef.afterClosed().pipe(
      map(res => {
        // console.log('MConfirmComponent dialog was closed', res);
        if (res && res.success) { return Promise.resolve(res); }
        return Promise.reject('Modal rejected');
      })
    );
  }

}
