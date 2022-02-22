import { resetError, setError } from '../store/actions';
import { appReducer } from '../store/appReducer';
import { appFakeState } from '../store/fakeStore/fakeState';

describe('app reducer tests', () => {
  it('error should be added and deleted', () => {
    const action = setError('Some Error');
    const endState = appReducer(appFakeState, action);
    expect(endState.errors).toBe('Some Error');
  });
  it('error should be deleted', () => {
    const action = resetError();
    const endState = appReducer(appFakeState, action);
    expect(endState.errors).toBe(null);
  });
});
