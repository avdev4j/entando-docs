(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{411:function(e,t,a){"use strict";a.r(t);var o=a(41),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"the-entando-core-apis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-entando-core-apis"}},[e._v("#")]),e._v(" The Entando Core APIs")]),e._v(" "),a("h2",{attrs:{id:"prerequisites"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Java 8")])]),e._v(" "),a("li",[a("p",[e._v("maven")])])]),e._v(" "),a("h2",{attrs:{id:"setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setup"}},[e._v("#")]),e._v(" Setup")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Clone the Entando sample app if you don’t already have it.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("git clone https://github.com/entando-k8s/entando-sample-app\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Start the app for local execution and enable the swagger profile by\npassing "),a("code",[e._v("-Dspring.profiles.active=swagger")]),e._v(" to the jetty command. Set\nthe value of "),a("code",[e._v("-Djetty.port")]),e._v(" to something available on your machine\ne.g. 8081.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v(" mvn clean package jetty:run -Pjetty-local -Pderby -Dspring.profiles.active=swagger -Djetty.reload=manual -Djetty.port=[available_port]\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Wait for the app to start.")])]),e._v(" "),a("li",[a("p",[e._v("Once started, navigate to the swagger ui in a browser.")])])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("http://localhost:[your port]/entando-sample-app/api/swagger-ui.html\n")])])]),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),a("p",[e._v("The Entando core exposes REST APIs for every action that can be taken in\nthe App Builder and Admin Console environments. For example, you can use\nthese apis to create pages, create page models or to add widgets to\npages. The APIs can be used to support automation, testing, or\nintegrations with external systems.")]),e._v(" "),a("h3",{attrs:{id:"api-structure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api-structure"}},[e._v("#")]),e._v(" API structure")]),e._v(" "),a("p",[e._v("All of the APIs share a common top level structure. Each response will\ncontain a top level entry for "),a("code",[e._v("errors")]),e._v(", "),a("code",[e._v("metadata")]),e._v(", and "),a("code",[e._v("payload")]),e._v(".")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("errors")]),e._v(" will always contain code and a message string indicating an\nerror condition in the request. The "),a("code",[e._v("metadata")]),e._v(" section is used for\npaging, sorting, filtering and data that is distinct from the body. The\nbody of each response is included in the "),a("code",[e._v("payload")]),e._v(" section of the\nresponse and varies according to each API.")]),e._v(" "),a("h3",{attrs:{id:"models"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#models"}},[e._v("#")]),e._v(" Models")]),e._v(" "),a("p",[e._v("All of the model classes returned by the Entando core are annotated so\nthat the model definition is included in the swagger documentation. At\nthe bottom of the swagger page all of the model classes returned by the\nAPI endpoints can be found.")]),e._v(" "),a("h2",{attrs:{id:"tutorial"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tutorial"}},[e._v("#")]),e._v(" Tutorial:")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Stop the Entando instance if it is running.")])]),e._v(" "),a("li",[a("p",[e._v("In the project open "),a("code",[e._v("src/main/conf/systemParams.properties")]),e._v(".")])]),e._v(" "),a("li",[a("p",[e._v("Change the value of this property to reflect the port you are using\nto run the app.")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("applicationBaseURL")])]),e._v(" "),a("li",[a("p",[e._v("For example if running on 8085 you would have\n"),a("code",[e._v("applicationBaseURL=http://localhost:8085/${entando.engine.web.context}/")])])])])]),e._v(" "),a("li",[a("p",[e._v("Login to the admin console at\n"),a("a",{attrs:{href:"http://localhost:8085/entando-sample-app/do/login",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://localhost:8085/entando-sample-app/do/login"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("li",[a("p",[e._v("Once logged in go to Integration -→ API Management -→ Consumers.")])]),e._v(" "),a("li",[a("p",[e._v("Select the kebab button on the row labeled swagger.")])]),e._v(" "),a("li",[a("p",[e._v("On that screen enable the button for "),a("code",[e._v("client_credentials")]),e._v(".")])]),e._v(" "),a("li",[a("p",[e._v("On that screen enter "),a("code",[e._v("swagger")]),e._v(" as the value for the secret.")])]),e._v(" "),a("li",[a("p",[e._v("Hit save")])]),e._v(" "),a("li",[a("p",[e._v("Return to swagger "),a("a",{attrs:{href:"http://localhost:",target:"_blank",rel:"noopener noreferrer"}},[e._v("your\nport"),a("OutboundLink")],1),e._v("/entando-sample-app/api/swagger-ui.html")])]),e._v(" "),a("li",[a("p",[e._v("Hit authorize")])]),e._v(" "),a("li",[a("p",[e._v("Enter")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("User: admin")])]),e._v(" "),a("li",[a("p",[e._v("PW: adminadmin")])]),e._v(" "),a("li",[a("p",[e._v("client: swagger")])]),e._v(" "),a("li",[a("p",[e._v("client_secret: swagger")])])])]),e._v(" "),a("li",[a("p",[e._v("Use the "),a("strong",[e._v("Try it out")]),e._v(" button on the APIs")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Scroll to "),a("code",[e._v("widget-controller")])])]),e._v(" "),a("li",[a("p",[e._v("Select the blue GET row")])]),e._v(" "),a("li",[a("p",[e._v("Select "),a("strong",[e._v("Try it out")])])]),e._v(" "),a("li",[a("p",[e._v("Look at the results in the window")])])])])])])}),[],!1,null,null,null);t.default=n.exports}}]);