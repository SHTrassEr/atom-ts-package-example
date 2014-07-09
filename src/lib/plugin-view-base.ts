/// <reference path='../typings/atom/atom.d.ts' />

import atomModule = require('atom');

export class PluginViewBase extends atomModule.View {

  public hasParent() {
    return (<JQuery><any>this).hasParent();
  }

  public detach() {
    return (<JQuery><any>this).detach();
  }
}
