import { InitialStateType } from './types';

export const initialState: InitialStateType = {
  auth: {
    isAuth: false,
  },
  employees: [
    {
      name: 'James William',
      myReward: 250,
      give: 100,
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
    {
      name: 'John Chen',
      myReward: 200,
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
  ],
  rewardsData: [
    {
      from: 'David Greene',
      to: 'Rajesh Kuma',
      why: 'Big thanks for your help in helping on the outage today!!',
      date: new Date(2021, 9, 6),
    },
    {
      from: 'Alex Brown',
      to: 'Rajesh Kumar',
      why: 'Thanks for your help in creating the product overview deck. Your help to show cases those scenarios really helped in closing the loop on the story',
      date: new Date(2021, 8, 14),
    },
    {
      from: 'James William',
      to: 'Rajesh Kumar',
      why: 'Thanks for your help',
      date: new Date(2021, 1, 14),
    },
  ],
  user: null,
  errors: null,
};
