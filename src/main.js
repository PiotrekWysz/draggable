import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import store from "./store";
import Vuex from "vuex";
import IdleVue from "idle-vue";
import Vuetify from "vuetify";

import "vuetify/dist/vuetify.min.css"; // Ensure you are using css-loader

import DatatableFactory from "vuejs-datatable/src/classes/factory";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faTimes);
library.add(faTrashAlt);
library.add(faEye);

if (localStorage.getItem("list1") == null) {
  localStorage.setItem("list1",JSON.stringify([
    {
      description:
        "Nam posuere elit orci, et mollis ligula dictum sit amet. Nulla mauris est, semper et sollicitudin non, sodales ac dui. Vivamus nec tellus ex. Quisque justo nunc, vehicula ac ante sit amet, ornare viverra justo. Nullam commodo aliquam velit a porttitor. Aliquam laoreet dapibus vestibulum. Nam sit amet libero suscipit, tempor justo lobortis, lobortis sem. Praesent vulputate rhoncus dignissim.",
      type: 1,
      name: "feature",
      id: 1
    },
    {
      description:
        "Nam posuere elit orci, et mollis ligula dictum sit amet. Nulla mauris est, semper et sollicitudin non, sodales ac dui. Vivamus nec tellus ex. Quisque justo nunc, vehicula ac ante sit amet, ornare viverra justo. Nullam commodo aliquam velit a porttitor. Aliquam laoreet dapibus vestibulum. Nam sit amet libero suscipit, tempor justo lobortis, lobortis sem. Praesent vulputate rhoncus dignissim.",
      type: 2,
      name: "bugfix",
      id: 2
    },
    {
      description:
        "Nam posuere elit orci, et mollis ligula dictum sit amet. Nulla mauris est, semper et sollicitudin non, sodales ac dui. Vivamus nec tellus ex. Quisque justo nunc, vehicula ac ante sit amet, ornare viverra justo. Nullam commodo aliquam velit a porttitor. Aliquam laoreet dapibus vestibulum. Nam sit amet libero suscipit, tempor justo lobortis, lobortis sem. Praesent vulputate rhoncus dignissim.",
      type: 1,
      name: "feature",
      id: 3
    }
  ]));
}
if (localStorage.getItem("list2") == null) {
  localStorage.setItem("list2", JSON.stringify([
    {
      description:
        "Nam posuere elit orci, et mollis ligula dictum sit amet. Nulla mauris est, semper et sollicitudin non, sodales ac dui. Vivamus nec tellus ex. Quisque justo nunc, vehicula ac ante sit amet, ornare viverra justo. Nullam commodo aliquam velit a porttitor. Aliquam laoreet dapibus vestibulum. Nam sit amet libero suscipit, tempor justo lobortis, lobortis sem. Praesent vulputate rhoncus dignissim.",
      type: 3,
      name: "default",
      id: 4
    },
    {
      description:
        "Nam posuere elit orci, et mollis ligula dictum sit amet. Nulla mauris est, semper et sollicitudin non, sodales ac dui. Vivamus nec tellus ex. Quisque justo nunc, vehicula ac ante sit amet, ornare viverra justo. Nullam commodo aliquam velit a porttitor. Aliquam laoreet dapibus vestibulum. Nam sit amet libero suscipit, tempor justo lobortis, lobortis sem. Praesent vulputate rhoncus dignissim.",
      type: 3,
      name: "default",
      id: 8
    },
    {
      description:
        "Nam posuere elit orci, et mollis ligula dictum sit amet. Nulla mauris est, semper et sollicitudin non, sodales ac dui. Vivamus nec tellus ex. Quisque justo nunc, vehicula ac ante sit amet, ornare viverra justo. Nullam commodo aliquam velit a porttitor. Aliquam laoreet dapibus vestibulum. Nam sit amet libero suscipit, tempor justo lobortis, lobortis sem. Praesent vulputate rhoncus dignissim.",
      type: 1,
      name: "feature",
      id: 9
    }
  ]));
}

if (localStorage.getItem("list3") == null) {
  localStorage.setItem("list3", JSON.stringify([
    {
      description:
        "Nam posuere elit orci, et mollis ligula dictum sit amet. Nulla mauris est, semper et sollicitudin non, sodales ac dui. Vivamus nec tellus ex. Quisque justo nunc, vehicula ac ante sit amet, ornare viverra justo. Nullam commodo aliquam velit a porttitor. Aliquam laoreet dapibus vestibulum. Nam sit amet libero suscipit, tempor justo lobortis, lobortis sem. Praesent vulputate rhoncus dignissim.",
      type: 2,
      name: "bugfix",
      id: 5
    },
    {
      description:
        "Nam posuere elit orci, et mollis ligula dictum sit amet. Nulla mauris est, semper et sollicitudin non, sodales ac dui. Vivamus nec tellus ex. Quisque justo nunc, vehicula ac ante sit amet, ornare viverra justo. Nullam commodo aliquam velit a porttitor. Aliquam laoreet dapibus vestibulum. Nam sit amet libero suscipit, tempor justo lobortis, lobortis sem. Praesent vulputate rhoncus dignissim.",
      type: 2,
      name: "bugfix",
      id: 6
    },
    {
      description:
        "Nam posuere elit orci, et mollis ligula dictum sit amet. Nulla mauris est, semper et sollicitudin non, sodales ac dui. Vivamus nec tellus ex. Quisque justo nunc, vehicula ac ante sit amet, ornare viverra justo. Nullam commodo aliquam velit a porttitor. Aliquam laoreet dapibus vestibulum. Nam sit amet libero suscipit, tempor justo lobortis, lobortis sem. Praesent vulputate rhoncus dignissim.",
      type: 1,
      name: "feature",
      id: 7
    }
  ]));
}

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.use(new DatatableFactory());
Vue.use(store);
Vue.use(Vuex);
Vue.use(Vuetify);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
