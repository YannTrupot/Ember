import Route from '@ember/routing/route';



export default Route.extend({

  model(){
    return Object({nom: "test"});
  },
  actions:{
    addContact:function (datas) {
      let store = this.get('store');
      let contact = store.createRecord('contact',JSON.parse(JSON.stringify(datas)));
      contact.save();
    }
  }

});
