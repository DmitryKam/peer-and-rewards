export type ModalFormPropsType = {
  open: boolean;
  handleClose: () => void;
  addRewardToEmployee: (to: string, amount: number, why: string) => void;
  autocompleteData: string[];
};
