/// <reference path='../typings/atom/atom.d.ts' />

import PluginView = require('./view/plugin-view');

export class PluginExample {

  public configDefaults = {
    configParameter: true
  };

  private pluginView: PluginView;

  activate(state) {
    this.pluginView = new PluginView(state);
  }

  deactivate() {

  }

  serialize() {

  }
}

module.exports = new PluginExample;
