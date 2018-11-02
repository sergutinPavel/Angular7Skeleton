import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { IRootState } from './store/';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
    subs: {[name: string]: Subscription} = {};
    constructor(private _store: Store<IRootState>) {
    }
    ngOnDestroy() {
        Object.keys(this.subs).forEach(s => this.subs[s].unsubscribe());
    }

}
