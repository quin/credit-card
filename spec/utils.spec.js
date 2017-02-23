import {
  validateCard,
  parseInput,
} from '../src/credit-card/utils';

describe('Validate Card Util', () => {
  it('should return valid card number', () => {
    expect(validateCard('378282246310005')).toEqual('378282246310005');
    expect(validateCard('30569309025904')).toEqual('30569309025904');
    expect(validateCard('5555555555554444')).toEqual('5555555555554444');
  });

  it('should return false for invalid card number', () => {
    expect(validateCard('1234567890123456')).toEqual(false);
    expect(validateCard('1232141241241222')).toEqual(false);
    expect(validateCard('0921840129842482')).toEqual(false);
  });
});

describe('Validate Input Util', () => {
  it('should parse string and return number without $', () => {
    expect(parseInput('$500')).toEqual(500);
    expect(parseInput('$305')).toEqual(305);
    expect(parseInput('$1000')).toEqual(1000);
    expect(parseInput('1234')).toEqual(1234);
  });
});
