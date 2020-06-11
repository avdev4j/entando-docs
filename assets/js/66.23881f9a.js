(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{455:function(e,t,a){"use strict";a.r(t);var n=a(41),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"deprecated-creating-an-entando-component-repository-ecr-bundle-using-npm-registry"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deprecated-creating-an-entando-component-repository-ecr-bundle-using-npm-registry"}},[e._v("#")]),e._v(" Deprecated: Creating an Entando Component Repository (ECR) bundle using npm registry")]),e._v(" "),a("h2",{attrs:{id:"purpose"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#purpose"}},[e._v("#")]),e._v(" Purpose")]),e._v(" "),a("blockquote",[a("p",[a("strong",[e._v("IMPORTANT")]),e._v(": This method is deprecated and its support with be discontinued in the future.")])]),e._v(" "),a("p",[e._v("Generate a simple Entando Component Repository (ECR) bundle shareable in an Entando 6 environment using npm registry")]),e._v(" "),a("h2",{attrs:{id:"requirements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),a("p",[e._v("You can create the bundle using you favorite text/code editor. To share the bundle you will need:")]),e._v(" "),a("ol",[a("li",[e._v("Node / NPM")]),e._v(" "),a("li",[e._v("An NPM registry where to upload the bundle")]),e._v(" "),a("li",[e._v("A K8S cluster where to upload the bundle (e.g. minikube, microk8s, minishift) configured correctly for Entando 6")]),e._v(" "),a("li",[e._v("A namespace in the cluster reachable from the operator and entando-k8s-service")]),e._v(" "),a("li",[e._v("The "),a("code",[e._v("entando-bundle-cli")]),e._v(" command-line tool to generate the necessary metadata to share the bundle in a Kubernetes cluster")])]),e._v(" "),a("h2",{attrs:{id:"steps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#steps"}},[e._v("#")]),e._v(" Steps")]),e._v(" "),a("h3",{attrs:{id:"_1-create-a-bundle-folder"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-create-a-bundle-folder"}},[e._v("#")]),e._v(" 1. Create a bundle folder")]),e._v(" "),a("p",[e._v("To start, let’s create a new folder to host your bundle.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("mkdir example-bundle && cd example-bundle\n")])])]),a("h3",{attrs:{id:"_2-add-a-descriptor-yaml-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-add-a-descriptor-yaml-file"}},[e._v("#")]),e._v(" 2. Add a descriptor.yaml file")]),e._v(" "),a("p",[e._v("For a bundle to be readable by the ECR it will need at least a "),a("code",[e._v("descriptor.yaml")]),e._v(" file in the folder. Let’s create it with some minimal information.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("vim descriptor.yaml\n")])])]),a("p",[e._v("Here is some content for your base descriptor.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("code: example-bundle\ndescription: This is an example of an Entando 6 bundle\n\ncomponents:\n")])])]),a("h3",{attrs:{id:"_3-add-a-simple-component-to-the-bundle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-add-a-simple-component-to-the-bundle"}},[e._v("#")]),e._v(" 3. Add a simple component to the bundle")]),e._v(" "),a("p",[e._v("This bundle will contains only a simple widget.")]),e._v(" "),a("p",[e._v("Let’s first create the widget metadata in a dedicated folder.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("mkdir widgets\n\nvim widgets/example-widget.yaml\n")])])]),a("p",[e._v("Now let’s populate the "),a("code",[e._v("example-widget.yaml")]),e._v(" metadata with some content:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("code: example-widget\ntitles:\n  en: Example Widget\n  it: Widget d'esempio\ngroup: free\ncustomUi: <h2>Hi from Example Widget</h2>\n")])])]),a("p",[e._v("Finally, add a reference to this widget in the bundle "),a("code",[e._v("descriptor.yaml")]),e._v(" file.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("code: example-bundle\ndescription: This is an example of a Entando 6 bundle\n\ncomponents:\n    widgets:\n        - widgets/example-widget.yaml\n")])])]),a("h3",{attrs:{id:"_4-make-the-bundle-an-npm-module-to-be-hostable-on-an-npm-registry"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-make-the-bundle-an-npm-module-to-be-hostable-on-an-npm-registry"}},[e._v("#")]),e._v(" 4. Make the bundle an NPM module to be hostable on an NPM registry.")]),e._v(" "),a("p",[e._v("From the bundle root, initialize a "),a("code",[e._v("package.json")]),e._v(" file")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("npm init\n")])])]),a("p",[e._v("Follow the instructions on screen. Here is an example of a possible "),a("code",[e._v("package.json")]),e._v(" file:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('{\n  "name": "example-bundle",\n  "version": "1.0.0",\n  "description": "An example of an Entando6 bundle",\n  "license": "LGPL-2.1",\n  "main": "descriptor.yaml",\n  "keywords": [\n    "entando6",\n    "digital-exchange",\n    "entando-de-bundle"\n  ]\n}\n')])])]),a("blockquote",[a("p",[a("strong",[e._v("Note")])]),e._v(" "),a("p",[e._v("Try to keep the name of the published bundle the same as the bundle code in the descriptor.yaml file to avoid confusion.")])]),e._v(" "),a("h3",{attrs:{id:"_5-publish-the-bundle-on-an-npm-registry"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-publish-the-bundle-on-an-npm-registry"}},[e._v("#")]),e._v(" 5. Publish the bundle on an NPM registry")]),e._v(" "),a("p",[e._v("Now your bundle is ready to be published on an NPM registry.")]),e._v(" "),a("p",[e._v("From the root of the bundle (where the package.json and descriptor.yaml files are) you can issue an "),a("code",[e._v("npm publish")]),e._v(" command.")]),e._v(" "),a("blockquote",[a("p",[a("strong",[e._v("Important")])]),e._v(" "),a("p",[e._v("It would be ideal to have a private npm registry to upload this into.\nCheck the "),a("a",{attrs:{href:"#resources"}},[e._v("resources section")]),e._v(" for more details;")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("npm publish --registry=<your-registry>\n")])])]),a("h3",{attrs:{id:"_6-create-the-entandodebundle-custom-resource-for-kubernetes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-create-the-entandodebundle-custom-resource-for-kubernetes"}},[e._v("#")]),e._v(" 6. Create the EntandoDeBundle custom resource for Kubernetes")]),e._v(" "),a("p",[e._v('Assuming the "entando-bundle-cli" command-line utility is already installed and available globally on your system, you can now convert the module into an EntandoDeBundle K8S custom resource. We assume you have a namespace in a Kubernetes cluster which is readable from the Entando Operator and you have the permissions to create resources there. Let’s call this namespace '),a("code",[e._v("accessible-ns")])]),e._v(" "),a("p",[e._v("You can also provide a thumbnail for your bundle. Let’s use an image available in the "),a("a",{attrs:{href:"https://github.com/entando-k8s/entando-sample-bundle",target:"_blank",rel:"noopener noreferrer"}},[e._v("entando-sample-bundle"),a("OutboundLink")],1),e._v(" repository.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("entando-bundle from-npm @entando/example-bundle --name=example-bundle --namespace=accessible-ns --thumbnail-url=https://raw.githubusercontent.com/entando-k8s/entando-sample-bundle/master/example/survey-bundle/example-bundle.jpg --dry-run > example-bundle.yaml\n")])])]),a("h3",{attrs:{id:"_7-upload-the-bundle-to-kubernetes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-upload-the-bundle-to-kubernetes"}},[e._v("#")]),e._v(" 7. Upload the bundle to Kubernetes")]),e._v(" "),a("p",[e._v("Now you simply need to upload the bundle into Kubernetes.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("kubectl create -f example-bundle.yaml\n")])])]),a("h2",{attrs:{id:"conclusion"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[e._v("#")]),e._v(" Conclusion")]),e._v(" "),a("p",[e._v("You should now have the bundle available in your cluster and accessible from the App Builder.")]),e._v(" "),a("h2",{attrs:{id:"resources"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#resources"}},[e._v("#")]),e._v(" Resources")]),e._v(" "),a("ul",[a("li",[a("p",[a("a",{attrs:{href:"../how-to-create-local-npm-registry"}},[e._v("Setup a local npm registry for testing\npurposes")])])]),e._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://github.com/entando-k8s/entando-bundle-cli",target:"_blank",rel:"noopener noreferrer"}},[e._v("Entando Bundle CLI\nproject"),a("OutboundLink")],1)])])])])}),[],!1,null,null,null);t.default=s.exports}}]);