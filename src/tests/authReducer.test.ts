import { deleteUser, logIn, logOut, setUser } from '../store/actions';
import { authReducer } from '../store/authReducer';
import { authFakeState } from '../store/fakeStore/fakeState';

describe('auth reducer tests', () => {
  it('login success', () => {
    const action = logIn();
    const endState = authReducer(authFakeState, action);
    expect(endState.auth.isAuth).toBe(true);
  });
  it('logout success', () => {
    const action = logOut();
    const endState = authReducer(authFakeState, action);
    expect(endState.auth.isAuth).toBe(false);
  });
  it('user should be added', () => {
    const action = setUser('Fake Name', 'email@email.com', 'url');
    const endState = authReducer(authFakeState, action);
    expect(endState.user?.name).toBe('Fake Name');
  });
  it('user should be deleted', () => {
    const action = deleteUser();
    const endState = authReducer(authFakeState, action);
    expect(endState.user).toBeNull();
  });
});
