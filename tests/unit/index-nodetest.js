/* eslint-env node, mocha */
'use strict';

var chai  = require('chai');
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);

var assert = chai.assert;

var stubProject = {
  name: function(){
    return 'my-project';
  }
};

describe('my new plugin', function() {
  var subject, mockUi;

  beforeEach(function() {
    subject = require('../../index');
    mockUi = {
      verbose: true,
      messages: [],
      write: function() { },
      writeLine: function(message) {
        this.messages.push(message);
      }
    };
  });

  it('has a name', function() {
    var result = subject.createDeployPlugin({
      name: 'test-plugin'
    });

    assert.equal(result.name, 'test-plugin');
  });

  describe('willBuild',function() {
    var plugin;
    var context;

    it('calls the willBuild hook', function() {
      plugin = subject.createDeployPlugin({name:'my plugin' });
      context = {
        ui: mockUi,
        project: stubProject,
        config: { "my-plugin": {
            pluginClient: function(context) {
              return {
                upload: function(context) {
                  debugger;
                  return Promise.resolve();
                }
              };
            }
          }
        }
      };
      return assert.isFulfilled(plugin.willBuild(context))
    });
  });
});
