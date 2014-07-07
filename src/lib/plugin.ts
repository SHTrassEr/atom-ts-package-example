/// <reference path='../typings/atom/atom.d.ts' />
/// <reference path='plugin-view.ts' />

import a = require('./plugin-view');

export class PluginExample {

  public configDefaults = {
    configParameter: true
  };

  private pluginView: a.PluginView;

  activate(state) {
    this.pluginView = new a.PluginView(state);
  }

  deactivate() {

  }

  serialize() {

  }
}

module.exports = new PluginExample;
