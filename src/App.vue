<template>
  <v-app>
    <div id="app">
      <nav
        class="main-header navbar navbar-expand bg-white navbar-light border-bottom"
        style="width:100%;"
      >
        <!-- Left navbar links -->

        <ul class="navbar-nav" style="width:100%; justify-content: space-between">
          <div>
            <router-link :to="{ name: 'draggable'}" class="nav-link link">Strona główna</router-link>
          </div>

          <div>
            <li class="nav-item d-sm-inline-block" style="cursor: default;"></li>
          </div>
        </ul>
      </nav>

      <router-view />
    </div>
  </v-app>
</template>

<script>

export default {
  name: "app",
  data() {
    return {
      variable: 0,
      messageStr: "",
      info: localStorage.getItem("user")
    };
  },
  
  computed:{},
  methods: {
   
  },
  components: {
  },
  mounted: function() {},
  created() {}
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
}

body {
  font-family: Arial, Arial, Helvetica, sans-serif;
  line-height: 1.4;
  padding: 0px;
}

.content {
  padding-top: 15px;
  padding-bottom: 15px;
}

h1 {
  margin-bottom: 10px;
  margin-top: 10px;
}

.loading {
  padding: 20px;
  text-align: center;
  background: url("/loading.gif");
  background-repeat: no-repeat;
  background-position: center center;
  height: calc(100vh - 200px);
}

.input {
  padding: 7px;
}

.header {
  background-color: black;
  color: #fff;
  padding: 5px;
  text-align: center;
  margin-bottom: 100px;
}

.header a {
  color: #fff;
  padding-right: 5px;
  padding-left: 5px;
  text-decoration: none;
}

.bold-header {
  color: #000 !important;
  font-weight: bold !important;
  background-color: #a6a6a6 !important;
  border: 1px solid #dddddd !important;
}

.link,
.navbar-nav > li > a {
  cursor: pointer;
  padding-top: 10px !important;
  padding-bottom: 10px !important;
}

.navbar {
  border-radius: 0px;
}

.sort {
  cursor: pointer;
  margin-left: 6px;
}

.main-header {
  background-color: #337ab7 !important;
}

.nav-link {
  color: #fff !important;
}

.nav-link:hover {
  color: #eee !important;
}

.logout {
  color: #ff91a3;
}

#think {
  width: 100%;
  background-color: #000;
  padding: 15px;
}

.mainheaderthink {
  background-color: #a6a6a6 !important;
}

.hide-loading {
  display: block;
}

.table > tbody > tr > td,
.table > tbody > tr > th,
.table > tfoot > tr > td,
.table > tfoot > tr > th,
.table > thead > tr > td,
.table > thead > tr > th {
  padding: 6px;
}

.select {
  font-size: 12px !important;
  padding: 7px 12px !important;
  height: 30px !important;
  text-align: center;
}

#home {
  padding: 20px;
  padding-top: 0px;
}

.del-td {
  padding: 2px !important;
}

.modal {
  display: block;
}

.info_accept {
  background-color: #ff91a3 !important;
}

.info_accept:hover {
  background-color: #fd7d92 !important;
}

.text-center {
  text-align: center;
}

.form-control {
  border-radius: 0;
}
</style>