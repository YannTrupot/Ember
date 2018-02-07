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
  }),

  promo:'',

  promos:{
    "B22":0.05,
    "AZ":0.01,
    "UBOAT":0.02
  },

  txRemise: computed('promo',function () {
    let promos = this.get('promos');
    let promo = this.get('promo');
    if(promos[promo]){
      return promos[promo];
    }
    return 0;
  }),

  coutTotal:computed('promo','sumActive',function () {
    let sum = this.get('sumActive');
    let promo = 1-this.get('txRemise');
    return sum*promo;
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
