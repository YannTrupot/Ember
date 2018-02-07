import { helper } from '@ember/component/helper';

export function formatPercent(params/*, hash*/) {
  return (params*100)+"%";
}

export default helper(formatPercent);
