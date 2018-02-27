import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('test', function() {
    this.route('new');
  });
  this.route('td1-ex1');
  this.route('test.new');
  this.route('td1-ex2');
  this.route('td2-ex1', function() {
    this.route('step');
  });
  this.route('td3-contacts/add');
  this.route('td3-contacts');
  this.route('td4-developers');
  this.route('td4-developers/new');
});

export default Router;
