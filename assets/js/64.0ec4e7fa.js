(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{453:function(e,t,a){"use strict";a.r(t);var n=a(41),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"how-to-setup-a-nexus-instance-on-a-kubernetes-cluster"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-setup-a-nexus-instance-on-a-kubernetes-cluster"}},[e._v("#")]),e._v(" How to setup a Nexus instance on a Kubernetes cluster")]),e._v(" "),a("h2",{attrs:{id:"requirements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("A kubernetes cluster (that could be minikube, minishift, microk8s,\netc.)")])]),e._v(" "),a("li",[a("p",[e._v("A dedicated namespace for nexus (we are going to use "),a("code",[e._v("nexus")]),e._v(" as\ntarget namespace)")])])]),e._v(" "),a("h2",{attrs:{id:"steps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#steps"}},[e._v("#")]),e._v(" Steps")]),e._v(" "),a("h3",{attrs:{id:"_1-create-a-namespace-for-nexus"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-create-a-namespace-for-nexus"}},[e._v("#")]),e._v(" 1. Create a namespace for nexus")]),e._v(" "),a("p",[e._v("We are going to deploy our nexus instance on a namespace called "),a("code",[e._v("nexus")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("kubectl create namespace nexus\n")])])]),a("h3",{attrs:{id:"_2-create-the-deployment-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-create-the-deployment-file"}},[e._v("#")]),e._v(" 2. Create the deployment file.")]),e._v(" "),a("p",[e._v("Let’s create a "),a("strong",[e._v("Deployment.yaml")]),e._v(" file to describe our nexus\ndeployment.")]),e._v(" "),a("p",[e._v("Here things get a little bit different between nexus 2.x and nexus 3.x.\nIn both cases though we are going to use a volume mount for nexus-data,\nremember that this is going to be removed when the pod is removed. In\nproduction you should probably use some kind of persistent data.")]),e._v(" "),a("h4",{attrs:{id:"nexus-2-x"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nexus-2-x"}},[e._v("#")]),e._v(" Nexus 2.x")]),e._v(" "),a("p",[e._v("Here we are passing a few customizable ENV variable and adding a volume\nmount for nexus data.")]),e._v(" "),a("p",[a("strong",[e._v("Deployment.yaml.")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('    apiVersion: apps/v1\n    kind: Deployment\n    metadata:\n      name: nexus\n      namespace: nexus\n    spec:\n      replicas: 1\n      template:\n        metadata:\n          labels:\n            app: nexus-server\n        spec:\n          containers:\n            - name: nexus\n              image: sonatype/nexus:latest\n              env:\n              - name: MAX_HEAP\n                value: "800m"\n              - name: MIN_HEAP\n                value: "300m"\n              resources:\n                limits:\n                  memory: "4Gi"\n                  cpu: "1000m"\n                requests:\n                  memory: "2Gi"\n                  cpu: "500m"\n              ports:\n                - containerPort: 8081\n              volumeMounts:\n                - name: nexus-data\n                  mountPath: /sonatype-work\n          volumes:\n            - name: nexus-data\n              emptyDir: {}\n')])])]),a("h4",{attrs:{id:"nexus-3-x"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nexus-3-x"}},[e._v("#")]),e._v(" Nexus 3.x")]),e._v(" "),a("p",[e._v("For Nexus 3.x we dont use any custom env variables. You can check the\nofficial docker repo for the supported env variables.")]),e._v(" "),a("p",[a("strong",[e._v("Deployment.yaml.")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('    apiVersion: extensions/v1beta1\n    kind: Deployment\n    metadata:\n      name: nexus\n      namespace: nexus\n    spec:\n      replicas: 1\n      selector:\n        matchLabels:\n            app: nexus-server\n      template:\n        metadata:\n          labels:\n            app: nexus-server\n        spec:\n          containers:\n            - name: nexus\n              image: sonatype/nexus3:latest\n              resources:\n                limits:\n                  memory: "4Gi"\n                  cpu: "1000m"\n                requests:\n                  memory: "2Gi"\n                  cpu: "500m"\n              ports:\n                - containerPort: 8081\n              volumeMounts:\n                - name: nexus-data\n                  mountPath: /nexus-data\n          volumes:\n            - name: nexus-data\n              emptyDir: {}\n')])])]),a("h3",{attrs:{id:"_3-create-the-deployment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-create-the-deployment"}},[e._v("#")]),e._v(" 3. Create the deployment")]),e._v(" "),a("p",[e._v("Now let’s create the deployment")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("kubectl create -f Deployment.yaml\n")])])]),a("p",[e._v("You can check the deployment pod status with")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("kubectl get pod -n nexus\n")])])]),a("h3",{attrs:{id:"_4-create-a-service-for-nexus"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-create-a-service-for-nexus"}},[e._v("#")]),e._v(" 4. Create a service for nexus")]),e._v(" "),a("p",[e._v("Now you need to create a "),a("strong",[e._v("Service.yaml")]),e._v(" file that will to expose the\nnexus endpoint using NodePort.")]),e._v(" "),a("blockquote",[a("p",[a("strong",[e._v("Note")])]),e._v(" "),a("p",[e._v("If you are on a cloud, you can expose the service using a load\nbalancer using the service type Loadbalancer. Also, the Prometheus\nannotations will help in service endpoint monitoring by Prometheus.")])]),e._v(" "),a("p",[a("strong",[e._v("Service.yaml.")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("apiVersion: v1\nkind: Service\nmetadata:\n  name: nexus-service\n  namespace: devops-tools\n  annotations:\n      prometheus.io/scrape: 'true'\n      prometheus.io/path:   /\n      prometheus.io/port:   '8081'\nspec:\n  selector:\n    app: nexus-server\n  type: NodePort\n  ports:\n    - port: 8081\n      targetPort: 8081\n      nodePort: 32000\n")])])]),a("p",[e._v("Now you can create the service")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("kubectl create -f Service.yaml\n")])])]),a("p",[e._v("Check the service configuration using kubectl.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("kubectl describe service nexus-service -n devops-tools\n")])])]),a("h3",{attrs:{id:"_5-access-nexus"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-access-nexus"}},[e._v("#")]),e._v(" 5. Access nexus")]),e._v(" "),a("p",[e._v("Now you will be able to access nexus on any of the Kubernetes node IP on\nport 32000/nexus as we have exposed the node port. For example,")]),e._v(" "),a("table",[a("colgroup",[a("col",{attrs:{width:"50%"}}),e._v(" "),a("col",{attrs:{width:"50%"}})]),e._v(" "),a("tbody",[a("tr",{staticClass:"odd"},[a("td",{attrs:{align:"left"}},[a("p",[e._v("Service")])]),e._v(" "),a("td",{attrs:{align:"left"}},[a("p",[e._v("Url")])])]),e._v(" "),a("tr",{staticClass:"even"},[a("td",{attrs:{align:"left"}},[a("p",[e._v("Nexus 2")])]),e._v(" "),a("td",{attrs:{align:"left"}},[a("p",[a("a",{attrs:{href:"http://35.144.130.153:32000/nexus"}},[e._v("http://35.144.130.153:32000/nexus")])])])]),e._v(" "),a("tr",{staticClass:"odd"},[a("td",{attrs:{align:"left"}},[a("p",[e._v("Nexus 3")])]),e._v(" "),a("td",{attrs:{align:"left"}},[a("p",[a("a",{attrs:{href:"http://35.144.130.153:32000"}},[e._v("http://35.144.130.153:32000")])])])])])]),e._v(" "),a("blockquote",[a("p",[a("strong",[e._v("Note")])]),e._v(" "),a("p",[e._v("For Nexus 2.x and Nexus 3 < 3.17 the default username and password\nwill be admin & admin123, while for Nexus 3 >= 3.17 you need to get\nthe password from within the container with\n"),a("code",[e._v("cat /nexus-data/admin.password")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);