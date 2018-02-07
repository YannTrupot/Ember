import { helper } from '@ember/component/helper';

export function formatCurrency(params/*, hash*/) {
  return params +",00 €";
}

export default helper(formatCurrency);
