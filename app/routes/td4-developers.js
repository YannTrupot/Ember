import Route from '@ember/routing/route';

import EmberObject, {computed} from '@ember/object';

const Developers = EmberObject.extend();

export default Route.extend({
  model(){
    let developers = this.get('store').findAll('developer');
    return Developers.create({ datas : developers});
  },
  actions:{
    delete:function (dev) {
      console.log(dev);
      this.get('store').deleteRecord(dev);
    }
  }
});
