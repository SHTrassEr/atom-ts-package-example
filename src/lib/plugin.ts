/// <reference path='../typings/atom/atom.d.ts' />
/// <reference path='plugin-view.ts' />

import p = require('./plugin-view');

export class PluginExample {

  public configDefaults = {
    configParameter: true
  };

  private pluginView: p.PluginView;

  activate(state) {
    this.pluginView = new p.PluginView(state);
  }

  deactivate() {

  }

  serialize() {

  }
}

module.exports = new PluginExample;
