(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{443:function(e,t,n){"use strict";n.r(t);var a=n(41),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"bundle-and-components-details"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#bundle-and-components-details"}},[e._v("#")]),e._v(" Bundle and components details")]),e._v(" "),n("p",[e._v("In order for the entando-component-manager to read the content of a\nbundle and install components, a "),n("code",[e._v("descriptor.yaml")]),e._v(" file is required at\nthe root of the bundle package.")]),e._v(" "),n("p",[e._v("Here is a generic bundle structure")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v(".\n├ descriptor.yaml\n├ resources/\n│ └ ...\n└ ... (folders reported in descriptor.yaml file)\n")])])]),n("h2",{attrs:{id:"bundle-convensions"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#bundle-convensions"}},[e._v("#")]),e._v(" Bundle convensions")]),e._v(" "),n("ol",[n("li",[n("p",[e._v("The bundle descriptor file needs to be named "),n("code",[e._v("descriptor.yaml")]),e._v("\notherwise the bundle will not be recognized.")])]),e._v(" "),n("li",[n("p",[e._v("Static resources are not defined in the "),n("code",[e._v("descriptor.yaml")]),e._v(" file as\nthey are by default read from a "),n("code",[e._v("resources")]),e._v(" folder. If you need to\ninstall static resources, please follow the following convention.")])])]),e._v(" "),n("h2",{attrs:{id:"descriptor-file"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#descriptor-file"}},[e._v("#")]),e._v(" Descriptor File")]),e._v(" "),n("p",[e._v("The descriptor file will aggregate all components inside and has the\nfollowing structure.")]),e._v(" "),n("blockquote",[n("p",[n("strong",[e._v("Warning")])]),e._v(" "),n("p",[e._v("Remember the file needs to be named "),n("code",[e._v("descriptor.yaml")]),e._v(".")])]),e._v(" "),n("p",[n("strong",[e._v("Descriptor.yaml.")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("code: survey_bundle # The bundle ID\ndescription: This is the survey bundle # The description of the bundle\n\ncomponents: # All components will be here\n\n  # Optional. Use if the component requires a deployment\n  plugins:\n    - folder/you/want/my_plugin_descriptor.yaml\n    - folder/you/want/another_plugin_descriptor.yaml\n\n  # To create widgets you will need to add references to the descriptor file's\n  widgets:\n    - widgets/my_widget_descriptor.yaml\n    - widgets/another_widget_descriptor.yaml\n\n  # To create fragments, you will need to add references to the descriptor file's\n  fragments:\n    - fragments/my_fragment.yaml\n\n  # To create Page Models you will need to add references to the descriptor file's\n  pageModels:\n    - pagemodels/my_page_model_descriptor.yaml\n    - pagemodels/another_page_model_descriptor.yaml\n\n  # To create Content Types you will need to add references to the descriptor file's\n  contentTypes:\n    - contenttypes/my_content_type_descriptor.yaml\n\n  # To create Content Models you will need to add references to the descriptor file's\n  contentModels:\n    - contentmodels/my_content_model_descriptor.yaml\n    - contentmodels/another_content_model_descriptor.yaml\n\n  # Labels on the system\n  labels:\n    - key: HELLO # This is the label identifier\n      titles: # The titles on the label\n        it: Mio Titolo # The title in Italian\n        en: My Title # The title in English\n")])])]),n("h2",{attrs:{id:"plugin-descriptor"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#plugin-descriptor"}},[e._v("#")]),e._v(" Plugin Descriptor")]),e._v(" "),n("p",[e._v("A plugin should be described using the "),n("a",{attrs:{href:"https://github.com/entando-k8s/entando-k8s-custom-model/blob/master/src/main/resources/crd/EntandoPluginCRD.yaml",target:"_blank",rel:"noopener noreferrer"}},[e._v("EntandoPlugin CustomResource\nformat"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("p",[e._v("Here is an example, but check the CRD for details on the available\nfields.")]),e._v(" "),n("p",[n("strong",[e._v("Plugin descriptor.yaml.")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('kind: "EntandoPlugin"\napiVersion: "entando.org/v1alpha1"\nmetadata:\n  name: "my-plugin"\nspec:\n  image: "my-image"\n  replicas: 1\n  dbms: "postgresql"\n  roles:\n    - name: "task-list"\n      code: "task-list"\n    - name: "task-get"\n      code: "task-get"\n    - name: "connection-list"\n      code: "connection-list"\n    - name: "connection-get"\n      code: "connection-get"\n    - name: "connection-create"\n      code: "connection-create"\n    - name: "connection-delete"\n      code: "connection-delete"\n    - name: "connection-edit"\n      code: "connection-edit"\n  permissions: []\n  parameters: {}\n  ingressPath: "/myPath"\n  healthCheckPath: "/actuator/health"\n  securityLevel: "strict"\n  connectionConfigNames: []\n')])])]),n("h2",{attrs:{id:"widget-descriptor"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#widget-descriptor"}},[e._v("#")]),e._v(" Widget Descriptor")]),e._v(" "),n("p",[e._v("Here is an example of a widget descriptor")]),e._v(" "),n("p",[n("strong",[e._v("Widget descriptor.yaml.")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("code: another_todomvc_widget # The Widget identification\n\ntitles: # Widget's Titles\n  en: TODO MVC Widget # Title in English\n  it: TODO MVC Widget # Title in Italian\n\ngroup: free # The owner group of the widget\n\n# Optional. The UI Path, the widget.ftl file will have the customUi content\ncustomUiPath: widget.ftl\n\n# Optional. The Custom UI\ncustomUi: >-\n    <h1>My custom widget UI</h1>\n\n# Optional. ConfigUI\nconfigUi:\n  customElement: todomvc-config # The name of the custom-element used to render the configUI\n  resources:\n    - <bundleid>/static/js/main.js # The resources necessary to the custom element to render the configUI, like the code\n")])])]),n("h2",{attrs:{id:"fragment-descriptor"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#fragment-descriptor"}},[e._v("#")]),e._v(" Fragment Descriptor")]),e._v(" "),n("p",[n("strong",[e._v("Fragment descriptor.yaml.")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('code: my-fragment # The fragment identification\n\n# Optional. The fragment content\nguiCode: >-\n  "<div>Here the content</div>"\n\n# Optional. The GuiCode Path, the fragment.ftl file will have the guiCde conent in it\nguiCodePath: fragment.ftl\n')])])]),n("h2",{attrs:{id:"page-model-descriptor"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#page-model-descriptor"}},[e._v("#")]),e._v(" Page Model Descriptor")]),e._v(" "),n("p",[n("strong",[e._v("Page model descriptor.yaml.")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('code: todomvc_page_model # The Page Model identification\ndescription: TODO MVC basic page model # The Page Model description\n\ntitles: # Page Model\'s Titles\n  en: TODO MVC PageModel # Title in English\n  it: TODO MVC PageModel # Title in Italian\n\n# The Page Model configuration\nconfiguration:\n  frames: # All frames\n    - pos: 0 # Frame position\n      description: Header # Frame description\n      sketch: # Frame sketch configuration\n        x1: 0\n        y1: 0\n        x2: 11\n        y2: 0\n\n    # A simplified way to define a Frame\n    - pos: 1\n      description: Breadcrumb\n      sketch: { x1: 0, y1: 1, x2: 11, y2: 1 }\n\n# Optional. Define the Page Model Template in a separate file or inside the descriptor file with `template`\ntemplatePath: page.ftl\n\n# Optional. Define the Page Model Template this way or in a separate file with `templatePath`\ntemplate: >-\n  <#assign wp=JspTaglibs[\\"/aps-core\\"]>\n  <!DOCTYPE HTML PUBLIC \\"-//W3C//DTD HTML 4.0 Transitional//EN\\">\n  <html>\n      <head>\n          <title><@wp.currentPage param=\\"title\\" /></title>\n      </head>\n      <body>\n          <h1><@wp.currentPage param=\\"title\\" /></h1>\n          <a href=\\"<@wp.url page=\\"homepage\\"/>\\">Home</a><br>\n          <div>\n              <h1>Bundle 1 Page Model</h1>\n              <@wp.show frame=0 />\n          </div>\n      </body>\n  </html>\n')])])]),n("h2",{attrs:{id:"content-type-descriptor"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#content-type-descriptor"}},[e._v("#")]),e._v(" Content Type Descriptor")]),e._v(" "),n("p",[e._v("For more details on the properties, refer to the Content Type\ndocumentation.")]),e._v(" "),n("p",[n("strong",[e._v("Content-type descriptor.yaml.")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("code: CNG\nname: Demo\nstatus: 0\n\nattributes:\n  - code: title\n    type: Text\n    name: Title\n    roles:\n      - code: jacms:title\n        descr: The main title of a Content\n    disablingCodes: []\n    mandatory: true\n    listFilter: false\n    indexable: false\n\n    enumeratorStaticItems: string\n    enumeratorStaticItemsSeparator: string\n    enumeratorExtractorBean: string\n\n    validationRules:\n      minLength: 0\n      maxLength: 100\n      regex: string\n      rangeStartString: string\n      rangeEndString: string\n      rangeStartStringAttribute: string\n      rangeEndStringAttribute: string\n      equalString: string\n      equalStringAttribute: string\n      rangeStartDate: string\n      rangeEndDate: string\n      rangeStartDateAttribute: string\n      rangeEndDateAttribute: string\n      equalDate: string\n      equalDateAttribute: string\n      rangeStartNumber: 0\n      rangeStartNumberAttribute: string\n      rangeEndNumber: 0\n      rangeEndNumberAttribute: string\n      equalNumber: 0\n      equalNumberAttribute:\n      ognlValidation:\n        applyOnlyToFilledAttr: false\n        errorMessage: Something\n        keyForErrorMessage: some\n        keyForHelpMessage: thing\n        ognlExpression: string\n")])])]),n("h2",{attrs:{id:"content-model-descriptor"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#content-model-descriptor"}},[e._v("#")]),e._v(" Content Model Descriptor")]),e._v(" "),n("p",[n("strong",[e._v("Content-model descriptor.yaml.")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('id: 8880003\ncontentType: CNG\ndescription: Demo Content Model\n\n# Optional. Define the Content Model Shape in a separate file or inside descriptor file with `contentShape`\ncontentShapePath:\n\n# Optional. Define the Content Model Shape this way or in a separate file with `contentShapePath`\ncontentShape: >-\n  <article>\n    <h1>$content.Title.text</h1>\n    <h2>Demo content model</h2>\n    #if ( $content.MainBody.text != "" )\n    $content.MainBody.text\n    #end\n  </article>\n')])])]),n("h2",{attrs:{id:"static-files"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#static-files"}},[e._v("#")]),e._v(" Static Files")]),e._v(" "),n("p",[e._v("In order to upload static files, you will need to create a folder called\n"),n("code",[e._v("resources/")]),e._v(", all files inside this folder will be uploaded in the same\nfolder structure that is inside.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("resources/\n├ css/\n│ └ styles.css\n├ js/\n│ └ script.css\n├ images/\n│ ├ favicon.ico\n│ └ logo.png\n└ page.html\n")])])]),n("p",[e._v("On the structure mentioned above, the resulting files in the Entando\narchitecture will be:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("yourbundleid/\n├ css/\n│ └ styles.css\n├ js/\n│ └ script.js\n├ images/\n│ ├ favicon.ico\n│ └ logo.png\n└ page.html\n")])])]),n("blockquote",[n("p",[n("strong",[e._v("Important")])]),e._v(" "),n("p",[n("code",[e._v("yourbundleid")]),e._v(" is the "),n("code",[e._v("code")]),e._v(" property inside "),n("code",[e._v("descriptor.yaml")])])]),e._v(" "),n("p",[e._v("So if you need to use the file in a widget or page model, use this FTL\ntag "),n("code",[e._v("<@wp.resourceURL />")]),e._v(":")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('<img src="<@wp.resourceURL />yourbundleid/images/logo.png">\n<link rel="stylesheet" href="<@wp.resourceURL />yourbundleid/css/styles.css">\n<link rel="shortcut icon" href="<@wp.resourceURL />yourbundleid/images/favicon.ico" type="image/x-icon"/>\n<script type="application/javascript" src="<@wp.resourceURL />yourbundleid/js/script.js"><\/script>\n')])])])])}),[],!1,null,null,null);t.default=r.exports}}]);