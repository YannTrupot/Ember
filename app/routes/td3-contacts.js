import Route from '@ember/routing/route';

import EmberObject, {computed} from '@ember/object';


const Contacts = EmberObject.extend({

  datas: [],

  contacts : computed('datas.@each.isDeleted', function () {
    return 0;
  }),

  deleteds: [],

  deletedsCount: 0

});


export default Route.extend({
  model(){
    let storedContacts = this.get('store').findAll('contact');
    return Contacts.create({ datas : storedContacts});
  },
  actions:{
    delete:function (contact) {
      console.log("test")
      contact.deleteRecord();
    },
    cancelDeletion:function (deleteds) {

    }
  }
});
