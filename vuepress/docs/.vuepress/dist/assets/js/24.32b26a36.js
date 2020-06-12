(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{314:function(e,t,n){e.exports=n.p+"assets/img/edit-widget-screen-2.798d0990.png"},470:function(e,t,n){"use strict";n.r(t);var a=n(41),i=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"tutorial-display-widget-configuration-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tutorial-display-widget-configuration-data"}},[e._v("#")]),e._v(" Tutorial: Display widget configuration data")]),e._v(" "),a("p",[e._v("So, we already created a react micro frontend widget and configuration\nscreen to customize a "),a("em",[e._v("name")]),e._v(" field.")]),e._v(" "),a("p",[e._v("In this tutorial we will display that field in our micro frontend\nwidget.")]),e._v(" "),a("h2",{attrs:{id:"add-an-attribute-to-the-custom-element"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#add-an-attribute-to-the-custom-element"}},[e._v("#")]),e._v(" Add an attribute to the custom element")]),e._v(" "),a("p",[e._v("Edit "),a("code",[e._v("WidgetElement")]),e._v(" to add attribute handling to the custom element,\nand make re-render our app when an attribute changes. Now, the "),a("em",[e._v("name")]),e._v("\nattribute is being read from the custom element and passed as a prop to\nthe react root component ("),a("em",[e._v("App")]),e._v(").")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("import React from 'react';\nimport ReactDOM from 'react-dom';\nimport App from './App';\n\nconst ATTRIBUTES = {\n  name: 'name',\n};\n\nclass WidgetElement extends HTMLElement {\n\n  static get observedAttributes() {\n    return Object.values(ATTRIBUTES);\n  }\n\n  attributeChangedCallback(name, oldValue, newValue) {\n    if (!Object.values(ATTRIBUTES).includes(name)) {\n      throw new Error(`Untracked changed attribute: ${name}`);\n    }\n    if (this.mountPoint && newValue !== oldValue) {\n      this.render();\n    }\n  }\n\n  connectedCallback() {\n    this.mountPoint = document.createElement('div');\n    this.appendChild(this.mountPoint);\n    this.render();\n  }\n\n  render() {\n    const name = this.getAttribute(ATTRIBUTES.name);\n    ReactDOM.render(<App name={name} />, this.mountPoint);\n  }\n}\n\ncustomElements.define('my-widget', WidgetElement);\n\nexport default WidgetElement;\n")])])]),a("blockquote",[a("p",[a("strong",[e._v("Note")])]),e._v(" "),a("p",[a("code",[e._v("attributeChangedCallback")]),e._v(" is also a custom elements lifecycle hook\nmethod.")])]),e._v(" "),a("h2",{attrs:{id:"make-react-component-handle-the-input"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#make-react-component-handle-the-input"}},[e._v("#")]),e._v(" Make react component handle the input")]),e._v(" "),a("p",[e._v("Edit the "),a("code",[e._v("App")]),e._v(" component now, to make it display the "),a("code",[e._v("name")]),e._v(" prop.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("import React from 'react';\nimport './App.css';\n\nfunction App({name}) {\n  return (\n    <div className=\"App\">\n      <header className=\"App-header\">\n        <p>\n          Hello, {name}!\n        </p>\n      </header>\n    </div>\n  );\n}\n\nexport default App;\n")])])]),a("p",[e._v("Now, to ensure our custom element is working we can edit\n"),a("code",[e._v("public/index.html")]),e._v(" and set a value for the "),a("em",[e._v("name")]),e._v(" attribute of the\ncustom element.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="utf-8" />\n    <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" />\n    <meta name="viewport" content="width=device-width, initial-scale=1" />\n    <title>React App</title>\n  </head>\n  <body>\n    <my-widget name="Marco"/>\n  </body>\n</html>\n')])])]),a("p",[e._v('After page reload, you should be able to display a simple "Hello,\nMarco!" message.')]),e._v(" "),a("h2",{attrs:{id:"rebuild-the-widget"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rebuild-the-widget"}},[e._v("#")]),e._v(" Rebuild the widget")]),e._v(" "),a("p",[e._v("From the react project root, type:")]),e._v(" "),a("p",[a("code",[e._v("npm run build")])]),e._v(" "),a("p",[e._v("and the "),a("code",[e._v("build/static")]),e._v(" directory will be (re)generated. Copy it again\ninto the Entando 6 instance under\n"),a("code",[e._v("src\\main\\webapp\\resources\\static\\my-widget")]),e._v(", then rename")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("a file like "),a("code",[e._v("js/runtime~main.c7dcdf0b.js")]),e._v(" to "),a("code",[e._v("js/runtime.js")]),e._v("\n(bootstrapping logic)")])]),e._v(" "),a("li",[a("p",[e._v("a file like "),a("code",[e._v("js/2.230b21ef.chunk.js")]),e._v(" to "),a("code",[e._v("js/vendor.js")]),e._v(" (third-party\nlibraries)")])]),e._v(" "),a("li",[a("p",[e._v("a file like "),a("code",[e._v("js/main.1fd3965a.chunk.js")]),e._v(" to "),a("code",[e._v("js/main.js")]),e._v(" (app)")])]),e._v(" "),a("li",[a("p",[e._v("a file like "),a("code",[e._v("css/main.d1b05096.chunk.js")]),e._v(" to "),a("code",[e._v("css/main.css")]),e._v("\n(stylesheet)")])])]),e._v(" "),a("blockquote",[a("p",[a("strong",[e._v("Note")])]),e._v(" "),a("p",[e._v("you could keep the original names in order to avoid potential caching\nissues, but then you will have to update the "),a("em",[e._v("Custom UI")]),e._v(" field in the\nApp Builder widget screen every time a new version of the widget is\ndeployed.")])]),e._v(" "),a("p",[e._v("If the application server you’re running does not have hot deploy\nenabled, restart it.")]),e._v(" "),a("h2",{attrs:{id:"update-the-entando-6-widget-in-app-builder"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update-the-entando-6-widget-in-app-builder"}},[e._v("#")]),e._v(" Update the Entando 6 widget in App Builder")]),e._v(" "),a("p",[e._v("Open the Entando App Builder, go to UX Patterns → Widgets, find the\nwidget "),a("em",[e._v("My Widget")]),e._v(" and click to edit it.")]),e._v(" "),a("p",[e._v("You’ll see a screen like this one")]),e._v(" "),a("p",[a("img",{attrs:{src:n(314),alt:"Edit widget screen"}})]),e._v(" "),a("p",[e._v("Update the "),a("em",[e._v("Custom UI")]),e._v(" field from:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('<#assign wp=JspTaglibs[ "/aps-core"]>\n<link rel="stylesheet" type="text/css" href="<@wp.resourceURL />static/my-widget/static/css/main.css">\n<script async src="<@wp.resourceURL />static/my-widget/static/js/runtime.js"><\/script>\n<script async src="<@wp.resourceURL />static/my-widget/static/js/vendor.js"><\/script>\n<script async src="<@wp.resourceURL />static/my-widget/static/js/main.js"><\/script>\n<my-widget />\n')])])]),a("p",[e._v("to")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('<#assign wp=JspTaglibs[ "/aps-core"]>\n<link rel="stylesheet" type="text/css" href="<@wp.resourceURL />static/my-widget/static/css/main.css">\n<script async src="<@wp.resourceURL />static/my-widget/static/js/runtime.js"><\/script>\n<script async src="<@wp.resourceURL />static/my-widget/static/js/vendor.js"><\/script>\n<script async src="<@wp.resourceURL />static/my-widget/static/js/main.js"><\/script>\n<@wp.currentWidget param="config" configParam="name" var="configName" />\n<my-widget name="${configName}" />\n')])])]),a("p",[e._v("We basically added a JSTL tag to extract a field (under "),a("code",[e._v("configParam")]),e._v(")\nfrom the config field of the current widget and put it in a "),a("code",[e._v("configName")]),e._v("\nvariable, that we pass to the custom element.")]),e._v(" "),a("p",[e._v('Save the widget and reload the page that contains the widget: you’ll see\n"Hello, Marco!" as expected.')])])}),[],!1,null,null,null);t.default=i.exports}}]);