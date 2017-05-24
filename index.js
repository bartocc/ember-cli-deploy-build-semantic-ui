/* eslint-env node */
'use strict';

var BasePlugin = require('ember-cli-deploy-plugin');
var gulp = require('gulp');

module.exports = {
  name: 'ember-cli-deploy-build-semantic-ui',

  createDeployPlugin: function(options) {
    var DeployPlugin = BasePlugin.extend({
      name: options.name,
      runBefore: ['ember-cli-deploy-build'],

      build: function(context) {
        require(`${context.project.name()}/vendor/semantic-ui/gulpfile`);
        gulp.start('build');
      },
    });

    return new DeployPlugin();
  }
};
