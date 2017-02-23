import * as actions from './actions';

import {
  parseInput,
  validateCard,
} from './utils';

const CreditCard = ({
  ccnumber,
  firstname,
  limit,
}) => {
  const state = {
    balance: 0,
    ccnumber: validateCard(ccnumber),
    firstname,
    limit: parseInput(limit),
  };

  return Object.assign({},
    actions.balanceAction(state),
    actions.ccnumberAction(state),
    actions.chargeAction(state),
    actions.creditAction(state),
    actions.firstnameAction(state),
    actions.limitAction(state),
  );
};

export default CreditCard;
