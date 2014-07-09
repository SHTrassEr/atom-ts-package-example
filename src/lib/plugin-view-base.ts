/// <reference path='../typings/atom/atom.d.ts' />

import atomModule = require('atom');

export class PluginViewBase extends atomModule.View {

  public jQuery: JQuery;

  constructor(state) {
    super(state);
    this.jQuery = <JQuery><any>this;
  }
  
}
