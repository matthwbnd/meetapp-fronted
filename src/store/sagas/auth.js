import { call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { actions as toastrActions } from 'react-redux-toastr';
import api from '~/services/api';

import AuthActions from '~/store/ducks/auth';

export function* signIn({ email, password }) {
  try {
    const response = yield call(api.post, '/sessions', { email, password });

    localStorage.setItem('@Meetapp:token', response.data.token);

    yield put(AuthActions.signInSuccess(response.data.token));
    yield put(push('/'));
  } catch (err) {
    yield put(
      toastrActions.add({
        type: 'error',
        title: 'Falha no login',
        message: 'Verifique seu e-mail ou senha!',
      }),
    );
    console.log(err);
  }
}

export function* signUp({
  name, email, password, password_confirmation,
}) {
  try {
    const response = yield call(api.post, '/users', {
      name,
      email,
      password,
      password_confirmation,
    });

    localStorage.setItem('@Meetapp:token', response.data.token);

    yield put(AuthActions.signInSuccess(response.data.token));
    yield put(push('/'));
  } catch (err) {
    yield put(
      toastrActions.add({
        type: 'error',
        title: 'Falha no cadastro',
        message: 'Verifique seu e-mail ou senha!',
      }),
    );
    console.log(err);
  }
}
