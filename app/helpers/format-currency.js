import { helper } from '@ember/component/helper';

export function formatCurrency(params,options) {

  return parseFloat(params).toFixed(2) +" "+options.symbol;
}

export default helper(formatCurrency);
