import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { Store, select } from '@ngrx/store';
import { IRootState, selectUserStatus } from '../../../store';
import { SignInAction } from '../../../store/auth/auth.actions';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit, OnDestroy {
  public subs: { [key: string]: Subscription } = {};
  public userStatus: Observable<any>;
  public signInForm: FormGroup;

  constructor(private _fb: FormBuilder,
              private _store: Store<IRootState>) {
    this.signInForm = this._fb.group({
      email: [''],
      password: [''],
    });
    this.userStatus = this._store.pipe(select(selectUserStatus));
  }

  ngOnInit() {
    this.subs.signInFormChange = this.signInForm.valueChanges.subscribe(v => {
      // console.warn('v', v);
    });
  }

  ngOnDestroy() {
    Object.keys(this.subs).forEach(s => this.subs[s].unsubscribe());
  }

  onSubmit(form): void {
    const email: string = this.signInForm.get('email').value.trim();
    const password: string = this.signInForm.get('password').value.trim();

    this._store.dispatch(new SignInAction({email, password}));
  }

}
