import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './auth/auth.effects';
import { GeneralEffects } from './general/general.effects';

export const RootEffects = EffectsModule.forRoot([
  GeneralEffects,
  AuthEffects
]);
