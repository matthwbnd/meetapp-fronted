import { all, takeLatest } from 'redux-saga/effects';

import { signIn, signUp } from './auth';
import { AuthTypes } from '../ducks/auth';

export default function* rootSaga() {
  yield all([
    takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn),
    takeLatest(AuthTypes.SIGN_UP_REQUEST, signUp),
  ]);
}
