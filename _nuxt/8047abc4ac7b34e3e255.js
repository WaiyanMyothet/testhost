(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{318:function(e,t,n){"use strict";n.r(t);n(40);var r=n(4),l={data:function(){return{hi:this.label}},computed:{label:function(){return this.$store.state.label}},fetch:function(e){var t=e.store,n=e.params;e.query;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.commit("updateLabelNote",n.label);case 2:case"end":return e.stop()}}),e)})))()},validate:function(e){var t=e.store,n=e.params;e.query;return console.log(t.state.labelList),!!t.state.labelList.some((function(e){return e.LabelName==n.label}))},mounted:function(){},head:function(){return{title:this.label}}},o=n(33),component=Object(o.a)(l,(function(){var e=this.$createElement;return(this._self._c||e)("h3",[this._v(this._s(this.label))])}),[],!1,null,null,null);t.default=component.exports}}]);