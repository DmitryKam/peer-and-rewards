import { SyntheticEvent } from 'react';

export type TabsButtonAndIconContainerPropsType = {
  value: number;
  handleOpen: () => void;
  handleChange: (event: SyntheticEvent, newValue: number) => void;
};
