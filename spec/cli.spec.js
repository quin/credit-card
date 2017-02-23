import CLI from '../src/cli';

describe("Cli", () => {
  describe("process.argv run function", () => {
    it("should output expected data", (done) => {
      const cli = CLI({
        args: ['node', '/src', '--presets', 'es2015', './input.txt']
      });

      cli.run((cards) => {
        expect(cards['Lisa'].getBalance()).toEqual(-93);
        expect(cards['Quincy'].getCCNumber()).toEqual(false);
        expect(cards['Tom'].getBalance()).toEqual(500);
        done();
      });
    });
  });
});
