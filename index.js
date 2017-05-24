/* eslint-env node */
'use strict';

var BasePlugin = require('ember-cli-deploy-plugin');
var gulp = require('gulp');

// TODO: fetch <my-app> from the ember-cli app consuming
// ember-cli-deploy-build-semantic-ui
require('<my-app>/vendor/semantic-ui/gulpfile');

module.exports = {
  name: 'ember-cli-deploy-build-semantic-ui',

  createDeployPlugin: function(options) {
    var DeployPlugin = BasePlugin.extend({
      name: options.name,

      willBuild: function(context) {
        gulp.start('build');
      },
    });

    return new DeployPlugin();
  }
};
