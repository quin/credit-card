import {
  validateCard,
  parseInput,
} from './utils';

// expose state
export const balanceAction = (state) => ({
  getBalance: () => state.balance,
});

export const ccnumberAction = (state) => ({
  getCCNumber: () => state.ccnumber,
});

export const firstnameAction = (state) => ({
  getFirstname: () => state.firstname,
});

export const limitAction = (state) => ({
  getLimit: () => state.limit,
});

export const chargeAction = (state) => ({
  charge: ({
    amount,
  }) => {
    const newBalance = state.balance + parseInput(amount);
    if ((newBalance < state.limit) && validateCard(state.ccnumber)) {
      state = Object.assign(state, {
        balance: newBalance,
      });
    }
    return state.balance;
  },
});

export const creditAction = (state) => ({
  credit: ({
    amount,
  }) => {
    if (validateCard(state.ccnumber)) {
      state = Object.assign(state, {
        balance: state.balance - parseInput(amount),
      });
    }
    return state.balance;
  },
});
