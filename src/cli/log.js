// formats STDOUT

const log = (cards) => {
  const cardNames = Object.keys(cards).sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });

  console.log('');
  cardNames.forEach((firstname) => {
    const {
      getBalance,
      getCCNumber,
    } = cards[firstname];

    const balance = getCCNumber() ? `$${getBalance()}` :
      'error';
    console.log(`${firstname}: ${balance}`);
  });
}

export default log;
