import Vue from "vue";
import Vuex from "vuex";


Vue.use(Vuex);

const state = {
  maxId: localStorage.getItem("maxId") || 10,
  list1: JSON.parse(localStorage.getItem("list1")) || [
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
  ],
  list2: JSON.parse(localStorage.getItem("list2")) || [
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
  ],
  list3: JSON.parse(localStorage.getItem("list3")) || [
    {
      description:
        'Nam posuere elit orci, et mollis ligula dictum sit amet. Nulla mauris est, semper et sollicitudin non, sodales ac dui. Vivamus nec tellus ex. Quisque justo nunc, vehicula ac ante sit amet, ornare viverra justo. Nullam commodo aliquam velit a porttitor. Aliquam laoreet dapibus vestibulum. Nam sit amet libero suscipit, tempor justo lobortis, lobortis sem. Praesent vulputate rhoncus dignissim.',
      type: 2,
      name: "bugfix",
      id: 5
    },
    {
      description:
        'Nam posuere elit orci, et mollis ligula dictum sit amet. Nulla mauris est, semper et sollicitudin non, sodales ac dui. Vivamus nec tellus ex. Quisque justo nunc, vehicula ac ante sit amet, ornare viverra justo. Nullam commodo aliquam velit a porttitor. Aliquam laoreet dapibus vestibulum. Nam sit amet libero suscipit, tempor justo lobortis, lobortis sem. Praesent vulputate rhoncus dignissim.',
      type: 2,
      name: "bugfix",
      id: 6
    },
    {
      description:
        'Nam posuere elit orci, et mollis ligula dictum sit amet. Nulla mauris est, semper et sollicitudin non, sodales ac dui. Vivamus nec tellus ex. Quisque justo nunc, vehicula ac ante sit amet, ornare viverra justo. Nullam commodo aliquam velit a porttitor. Aliquam laoreet dapibus vestibulum. Nam sit amet libero suscipit, tempor justo lobortis, lobortis sem. Praesent vulputate rhoncus dignissim.',
      type: 1,
      name: "feature",
      id: 7
    }
  ]
};

const getters = {
  list1: state => state.list1,
  list2: state => state.list2,
  list3: state => state.list3,
  maxId: state => state.maxId
};

const actions = {
 
};

const mutations = {
  addList: (state, res) => {
    if (res.number == 1) {
      Vue.set(state, 'list1', res.list);
      localStorage.setItem("list1", JSON.stringify(res.list));
    }
    if (res.number == 2) {
      Vue.set(state, 'list2', res.list);
      localStorage.setItem("list2", JSON.stringify(res.list));

    }
    if (res.number == 3) {
      Vue.set(state, 'list3', res.list);
      localStorage.setItem("list3", JSON.stringify(res.list));
    }
  },
  removeList: (state, res) => {
    if (res.number == 1) {
      Vue.set(state, 'list1', res.list);
      localStorage.setItem("list1", JSON.stringify(res.list));
    }
    if (res.number == 2) {
      Vue.set(state, 'list2', res.list);
      localStorage.setItem("list2", JSON.stringify(res.list));

    }
    if (res.number == 3) {
      Vue.set(state, 'list3', res.list);
      localStorage.setItem("list3", JSON.stringify(res.list));
    }
  },
  addElement: (state, res) => {
    res.id = state.maxId;
    state.list1.push(res);
    state.maxId++;
    localStorage.setItem("maxId", state.maxId);
    localStorage.setItem("list1", JSON.stringify(state.list1));
  },
  editElement: (state, res) => {
    state.list1 = state.list1.map((item) => { 
      if (item.id == res.id){
        return res;
      } else {
        return item;
      } 
    });
    state.list2 = state.list2.map((item) => { 
      if (item.id == res.id)
      {
        return res;
      } else {
        return item;
      } 
    });
    state.list3 = state.list3.map((item) => { 
      if (item.id == res.id)
      {
        return res;
      } else {
        return item;
      } 
    });
    localStorage.setItem("list1", JSON.stringify(state.list1));
    localStorage.setItem("list2", JSON.stringify(state.list2));
    localStorage.setItem("list3", JSON.stringify(state.list3));    
  },
  removeElement: (state, res) => {
    state.list1 = state.list1.filter(element => element.id !== res.id);
    state.list2 = state.list2.filter(element => element.id !== res.id);
    state.list3 = state.list3.filter(element => element.id !== res.id);
    localStorage.setItem("list1", JSON.stringify(state.list1));
    localStorage.setItem("list2", JSON.stringify(state.list2));
    localStorage.setItem("list3", JSON.stringify(state.list3));
  }
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
});
