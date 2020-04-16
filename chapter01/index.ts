import { statement } from './statement';

import plays from './plays.json';
import invoices from './invoices.json';

const result = statement(invoices[0], plays);
console.log(result);
