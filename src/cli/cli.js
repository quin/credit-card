import fs from 'fs';
import readline from 'readline';
import CreditCard from '../credit-card';

const CLI = ({
  args
}) => {
  const hasSTDIN = args && args.slice(4).length;

  const cards = {};

  let interfaceOptions = {
    input: process.stdin,
    output: process.stdout,
    prompt: '>'
  };

  if (hasSTDIN) {
    interfaceOptions = {
      input: fs.createReadStream(args[4])
    }
  }

  const rl = readline.createInterface(interfaceOptions);

  return {
    run(cb) {
      if (!hasSTDIN) rl.prompt();

      rl.on('line', (line) => {
        const [action, firstname, number, limit] = line.split(
          ' ');

        switch (action) {
          case 'Add':
            cards[firstname] = CreditCard({
              firstname,
              ccnumber: number,
              limit
            });
            break;
          case 'Charge':
            cards[firstname].charge({
              amount: number,
            });
            break;
          case 'Credit':
            cards[firstname].credit({
              amount: number,
            });
            break;
        }

        if (!hasSTDIN) rl.prompt();
      });

      rl.on('close', () => cb(cards));
    }
  }
}

export default CLI;
