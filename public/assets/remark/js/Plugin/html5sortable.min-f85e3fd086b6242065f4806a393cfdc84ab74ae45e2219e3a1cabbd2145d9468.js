/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2017 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */

!function(global,factory){if("function"==typeof define&&define.amd)define("/Plugin/html5sortable",["exports","Plugin"],factory);else if("undefined"!=typeof exports)factory(exports,require("Plugin"));else{var mod={exports:{}};factory(mod.exports,global.Plugin),global.PluginHtml5sortable=mod.exports}}(this,function(exports,_Plugin2){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _Plugin3=babelHelpers.interopRequireDefault(_Plugin2),NAME="sortable",Sortable=function(_Plugin){function Sortable(){return babelHelpers.classCallCheck(this,Sortable),babelHelpers.possibleConstructorReturn(this,(Sortable.__proto__||Object.getPrototypeOf(Sortable)).apply(this,arguments))}return babelHelpers.inherits(Sortable,_Plugin),babelHelpers.createClass(Sortable,[{key:"getName",value:function(){return NAME}},{key:"render",value:function(){this.$el;sortable(this.$el.get(0),this.options)}}],[{key:"getDefaults",value:function(){return{connectWith:!1,placeholder:null,dragImage:null,disableIEFix:!1,placeholderClass:"sortable-placeholder",draggingClass:"sortable-dragging",hoverClass:!1}}}]),Sortable}(_Plugin3.default);_Plugin3.default.register(NAME,Sortable),exports.default=Sortable});
