import * as Yup from 'yup';

export const validationSchema = (validationString: string[]) => {
  return Yup.object().shape({
    toEmployee: Yup.string().required('Enter name').oneOf(validationString),
    amount: Yup.number()
      .required()
      .min(1, 'Minimum amount of currency 1 $')
      .required('Enter amount'),
    why: Yup.string()
      .required()
      .min(2, 'The minimum number of characters is 3!')
      .required('Write text'),
  });
};
