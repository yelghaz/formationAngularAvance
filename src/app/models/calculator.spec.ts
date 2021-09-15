import { Calculator } from './Calculator';

describe('Calculator', () => {

    it('should evaluate 2 + 3 + 4 to 9', () => {
        const calculator = new Calculator();
        expect(calculator.evaluate('2 + 3 + 4')).toEqual(9);
    });

});