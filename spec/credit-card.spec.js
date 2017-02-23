import CreditCard from '../src/credit-card';

describe("Credit Card constructor function", () => {
  let card;

  it("should create card object", () => {
    card = CreditCard({
     firstname: 'Tom',
     ccnumber: '4111111111111111',
     limit: '$1000',
   });

    expect(card.getBalance()).toEqual(0);
    expect(card.getCCNumber()).toEqual('4111111111111111');
    expect(card.getFirstname()).toEqual('Tom');
    expect(card.getLimit()).toEqual(1000);
  });

  it("should validate card", () => {
    card = CreditCard({
     firstname: 'Tom',
     ccnumber: '1232141241241222',
     limit: '$1000',
   });
    expect(card.getBalance()).toEqual(0);
    expect(card.getCCNumber()).toBe(false);
    expect(card.getFirstname()).toEqual('Tom');
    expect(card.getLimit()).toEqual(1000);
  });
});
