import Route from '@ember/routing/route';

import EmberObject, {computed} from '@ember/object';


const Services = EmberObject.extend({

  services: [],

  countActive : computed('services.@each.active', function () {
    return this.get('services').filterBy('active',true).length;
  }),

  sumActive : computed('services.@each.active',function () {
    let cout = 0;
    let services = this.get('services').filterBy('active',true);
    services.forEach(function (elt) {
      if(elt.active){
        cout += elt.price;
      }
    });
    return cout;
  })

});

export default Route.extend({
  model(){
    return Services.create({services: [
        {
          "name": "Web Development",
          "price": 300,
          "active":true
        },{
          "name": "Design",
          "price": 400,
          "active":false
        },{
          "name": "Integration",
          "price": 250,
          "active":false
        },{
          "name": "Formation",
          "price": 220,
          "active":false
        }
      ]});
  },
  actions:{
    toggleActive:function (service) {
      Ember.set(service,'active',!service.active);
    }
  }
});
