import { helper } from '@ember/component/helper';

export function plural(params/*, hash*/) {
  if(params == 0){
    return "Aucun service sélectionné";
  }
  if(params == 1){
    return "Un service sélectionné";
  }
  return params+" services sélectionnés";
}

export default helper(plural);
