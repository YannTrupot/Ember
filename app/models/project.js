import DS from 'ember-data';

export default DS.Model.extend({

  name: DS.attr('string'),
  Descriptif: DS.attr('string'),
  StartDate: DS.attr('date'),
  DueDate: DS.attr('date')

});
