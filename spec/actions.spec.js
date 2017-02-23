import { actions } from '../src/credit-card';

const validCCNumber = '4111111111111111';
const invalidCCNumber = '1232141241241222';

let amount;
let balance;
let ccnumber;
let state = {};

describe("Balance Action", () => {
  it("should return card balance", () => {
    state.balance = 500;
    balance = actions.balanceAction(state).getBalance();
    expect(balance).toEqual(500);
  });
});

describe("CC Number Action", () => {
  it("should return credit card number", () => {
    state.ccnumber = validCCNumber;
    ccnumber = actions.ccnumberAction(state).getCCNumber();
    expect(ccnumber).toEqual(validCCNumber);
  });
});

describe("Charge Action", () => {
  it("should increase the balance of the card associated with the provided name by the amount specified", () => {
    state = {
      balance: 0,
      ccnumber: validCCNumber,
      limit: 1000
    }
    amount = '$500';
    balance = actions.chargeAction(state).charge({ amount });
    expect(balance).toEqual(500);
  });

  it("should ignore charges that raise the balance over the limit", () => {
    state = {
      balance: 0,
      ccnumber: validCCNumber,
    }
    amount = '$1100';
    balance = actions.chargeAction(state).charge({ amount });
    expect(balance).toEqual(0);

    state = {
      balance: 500,
      ccnumber: validCCNumber,
    }
    amount = '$800';
    balance = actions.chargeAction(state).charge({ amount });
    expect(balance).toEqual(500);
  });

  it("should ignore charges against invalid Luhn 10 cards", () => {
    state = {
      balance: 500,
      ccnumber: invalidCCNumber,
    };
    amount = '$575';
    balance = actions.chargeAction(state).charge({ amount });
    expect(balance).toEqual(500);
  });
});

describe("Credit Action",() => {
  beforeEach(() => {
    state = {
      limit: 1000,
      balance: 500,
    };
  });

  it("should decrease the balance of the card associated with the provided name by the amount specified", () => {
    state.ccnumber = validCCNumber;
    amount = '$500';
    balance = actions.creditAction(state).credit({ amount });
    expect(balance).toEqual(0);
  });

  it("should create a negative balance when credits drop the balance below $0", () => {
    state.ccnumber = validCCNumber;
    amount = '$575';
    balance = actions.creditAction(state).credit({ amount });
    expect(balance).toEqual(-75);
  });

  it("should ignore credits against invalid Luhn 10 cards", () => {
    state.ccnumber = invalidCCNumber;
    amount = '$575';
    balance = actions.creditAction(state).credit({ amount });
    expect(balance).toEqual(500);
  });
});
