import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return {
      name: "test",
      competences: ["Rich client","MVC frameworks","Java"]
    };
}})
