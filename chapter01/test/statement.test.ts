import { expect } from 'chai';
import 'mocha';

import { statement } from '../statement';
import plays from '../plays.json';
import invoices from '../invoices.json';

describe('statement', () => {
  describe('#statement(invoces, plays)', () => {
    it('should return formatted statement', () => {
      const expected = `Statement for BigCo
  Hamlet: $650.00 (55 seats)
  As You Like It: $580.00 (35 seats)
  Othello: $500.00 (40 seats)
Amount owed is $1,730.00
You earned 47 credits
`;
      expect(statement(invoices[0], plays)).to.eq(expected);
    });
  });
});
