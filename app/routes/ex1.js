import Route from '@ember/routing/route';
import {notEmpty} from '@ember/object/computed';
import EmberObject, {computed} from '@ember/object';


const Note = EmberObject.extend({
  MAX : 100,
  content: 'Entrez votre texte',

  size : computed('content', function () {
    let tailleAct = this.get('MAX')- this.get('content').length;
    let content=this.get('content');
    if(content)
      this.set('info','Note Modifiée');
    return tailleAct
  }),

  info: computed('content',function () {
    let content = this.get('content');
    if(content == 'Entrez votre texte'){
      return '';
    }else{
      return 'Note modifiée';
    }
  }),

  alertVisible: notEmpty('info'),

  style: computed('size',function () {
    let size = this.get('size');
    let style = 'alert-info';
    if(size < 50){
      style = 'alert-warning';
    }
    if(size < 10){
      style= 'alert-danger';
    }
    return style;
  })

});



export default Route.extend({
  model(){
    return Note.create();
  },
  actions:{
    save:function (model) {
      model.set('info',`Note sauvegardée : "${model.get('content')}"`);
    },
    clear:function (model) {
      model.set('content','');
    }
  }
});
