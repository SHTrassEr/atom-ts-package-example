/// <reference path='../typings/atom/atom.d.ts' />

import PluginViewBase = require('./plugin-view-base');

class PluginView extends PluginViewBase {

  constructor(state) {
    super(state);
    atom.workspaceView.command("ts-package-example:toggle", () => this.toggle());
  }

  public static content() {
    return this.div({class: "atom-ts-package-example overlay from-top"}, () =>
    this.div("Yo!"));
  }

  public toggle() {
    console.log("PluginView was toggled!");

    if (this.jQuery.hasParent()) {
      this.jQuery.detach();
    } else {
      atom.workspaceView.appendToTop(this);
    }
  }
}

export = PluginView;
