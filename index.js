/* eslint-env node */
'use strict';

var BasePlugin = require('ember-cli-deploy-plugin');
var gulp = require('gulp');

module.exports = {
  name: 'ember-cli-deploy-build-semantic-ui',

  createDeployPlugin: function(options) {
    var DeployPlugin = BasePlugin.extend({
      name: options.name,

      willBuild: function(context) {
        // require(`${context.distDir}/vendor/semantic-ui/gulpfile.js`);
        gulp.start('build');
      },
    });

    return new DeployPlugin();
  }
};
