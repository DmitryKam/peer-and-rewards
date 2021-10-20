import {
  addEmployee,
  addReward,
  deleteCurrentEmployee,
  resetError,
  setError,
} from '../store/actions';
import { appReducer } from '../store/appReducer';
import { appFakeState } from '../store/fakeContext/fakeState';

describe('app reducer tests', () => {
  const employees = [
    {
      name: 'James William',
      myReward: 150,
      give: 200,
      avatar:
        'https://www.nj.com/resizer/zovGSasCaR41h_yUGYHXbVTQW2A=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg',
    },
    {
      name: 'John Chen',
      myReward: 300,
      give: 150,
      avatar:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3AGnMFzOLvv-du52tYrZXv32ChA-0yr0urA&usqp=CAU',
    },
    {
      name: 'Alex Brown',
      myReward: 400,
      give: 30,
      avatar:
        'https://static.toiimg.com/thumb/resizemode-4,msid-76729750,imgsize-249247,width-720/76729750.jpg',
    },
    {
      name: 'Rajesh Kumar',
      myReward: 5030,
      give: 430,
      avatar:
        'https://www.nj.com/resizer/zovGSasCaR41h_yUGYHXbVTQW2A=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg',
    },
    {
      name: 'David Greene',
      myReward: 300,
      give: 150,
      avatar:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRthZcF6C12-eMC0JrJdv4CWO40-emM4BBFlw&usqp=CAU',
    },
  ];
  it('Add reward should be added', () => {
    const action = addReward(employees, 'James William', 'John Chen', 'Thanks for your help');
    const endState = appReducer(appFakeState, action);
    expect(appFakeState.employees[0].name).toBe('James William');
    expect(appFakeState.employees[0].myReward).toBe(250);
    expect(appFakeState.employees[2].name).toBe('John Chen');
    expect(appFakeState.employees[2].myReward).toBe(200);
    expect(endState.employees[0].name).toBe('James William');
    expect(endState.employees[0].myReward).toBe(150);
    expect(endState.employees[0].give).toBe(200);
    expect(endState.employees[1].name).toBe('John Chen');
    expect(endState.employees[1].myReward).toBe(300);
    expect(appFakeState.rewardsData.length).toBe(3);
    expect(endState.rewardsData.length).toBe(4);
  });
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
  it('employee should be added', () => {
    const action = addEmployee('Fake User', 'avatar');
    const endState = appReducer(appFakeState, action);
    expect(endState.employees).toHaveLength(7);
  });
  it('employee should be deleted', () => {
    const action = deleteCurrentEmployee('James William');
    const endState = appReducer(appFakeState, action);
    expect(endState.employees).toHaveLength(5);
  });
});
