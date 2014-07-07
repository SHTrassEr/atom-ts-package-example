/// <reference path='../typings/atom/atom.d.ts' />

import a = require('atom');

export class PluginView extends a.View {

  private jQuery: JQuery;

  constructor(state) {
    super(state);
    atom.workspaceView.command("ts-package-example:toggle", () => this.toggle());
    this.jQuery = <JQuery><any>this;
  }

  public static content() {
    return PluginView.div({class: "atom-ts-package-example overlay from-top"}, () =>
    PluginView.div("Yo"));
  }

  public toggle() {
    console.log("PluginView was toggled!");

    if (this.jQuery.hasParent()) {
      this.detach();
    } else {
      atom.workspaceView.appendToTop(this);
    }
  }
}
