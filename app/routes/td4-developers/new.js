import Route from '@ember/routing/route';

import EmberObject from '@ember/object';

export default Route.extend({
  model(){
    return EmberObject.create();
  },
  actions:{
    addDeveloper:function (dev) {
      dev = this.get('store').createRecord('developer',Object.apply({},dev));
      dev.save().then(() => {
        this.transitionTo("td4-developers");
      });
    }
  }
});
