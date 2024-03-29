/* eslint-env node */
'use strict';

var BasePlugin = require('ember-cli-deploy-plugin');
var gulp = require('gulp');

module.exports = {
  name: 'ember-cli-deploy-build-semantic-ui',

  createDeployPlugin: function(options) {
    var DeployPlugin = BasePlugin.extend({
      name: options.name,
      runBefore: ['build'],

      build: function(context) {
        // console.log(context.project);
        require(`${context.project.root}/vendor/semantic-ui/gulpfile`);
        gulp.start('build');
      },
    });

    return new DeployPlugin();
  }
};
