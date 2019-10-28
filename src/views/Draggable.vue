<template>
  <div>
    <div v-if="!isLoading" id="home">
      <button type="button" class="btn btn-primary" @click="setAddItem">Dodaj Element</button>
      <div class="row">
        <div class="col-md-4">
          <h3>Oczekujące</h3>
          <draggable class="dragArea" :list="list1"
            @add="onAdd($event, {list:list1, number: 1})"  
            @remove="onRemove($event, {list:list1, number: 1})" 
            group="people">
            <div class="list-group-item" v-for="element in list1" :key="element.id">
              <Feature v-if="element.type == 1" :element="element" @edit-element="setEditItem" @delete-element="setElementDelete" />
              <Bugfix v-if="element.type == 2" :element="element" @edit-element="setEditItem" @delete-element="setElementDelete"/>
              <Default v-if="element.type == 3" :element="element" @edit-element="setEditItem" @delete-element="setElementDelete"/>
            </div>
          </draggable>
        </div>

        <div class="col-md-4">
          <h3>W Realizacji</h3>
          <draggable class="dragArea" 
            :list="list2" 
            @add="onAdd($event, {list:list2, number: 2})"  
            @remove="onRemove($event, {list:list2, number: 2})" 
            group="people">
            <div class="list-group-item" v-for="element in list2" :key="element.id">
              <Feature v-if="element.type == 1" :element="element" @edit-element="setEditItem" @delete-element="setElementDelete" />
              <Bugfix v-if="element.type == 2" :element="element" @edit-element="setEditItem" @delete-element="setElementDelete"/>
              <Default v-if="element.type == 3" :element="element" @edit-element="setEditItem" @delete-element="setElementDelete"/>
            </div>
          </draggable>
        </div>

        <div class="col-md-4">
          <h3>Wykonane</h3>
          <draggable class="dragArea" :list="list3" 
            group="people"
            @add="onAdd($event, {list:list3, number: 3})"  
            @remove="onRemove($event, {list:list3, number: 3})" 
          >
            <div class="list-group-item" v-for="element in list3" :key="element.id">
              <Feature v-if="element.type == 1" :element="element" @edit-element="setEditItem" @delete-element="setElementDelete" />
              <Bugfix v-if="element.type == 2" :element="element" @edit-element="setEditItem" @delete-element="setElementDelete"/>
              <Default v-if="element.type == 3" :element="element" @edit-element="setEditItem" @delete-element="setElementDelete"/>
            </div>
          </draggable>
        </div>
      </div>
      <DeleteModal
        v-if="showDeleteModal"
        :info-modal="infoModal"
        @delete-id="deleteTodo"
        @hide-modal="hideModal"
      />

      <EditModal
        v-if="showHideDialog"
        :info-modal="editedItem"
        @edit-item="editItem"
        @hide-modal="hideModal"
      />
    </div>
    <div class="loading" v-else-if="isLoading"></div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import DeleteModal from "../components/ModalDelete";
import EditModal from "../components/ModalEdit";

import Feature from "../components/Feature";
import Bugfix from "../components/Bugfix";
import Default from "../components/Default";
import {mapState} from 'vuex';

export default {
  name: "Draggable",
  display: "Clone on Control",
  instruction: "Press Ctrl to clone element from list 1",
  order: 4,
  components: {
    draggable,
    Feature,
    Bugfix,
    Default,
    DeleteModal,
    EditModal
  },
  computed: mapState(['list1', 'list2', 'list3', 'maxId']),  
  data() {
    return {
      isLoading: false,      
      controlOnStart: true,
      showHideDialog: false,
      showDeleteModal: false,
      infoModal: {},
      editedIndex: "",
      editedItem: {
        description: "",
        type: 1,
        name: "default",
        id: 10
      },
      defaultItem: {
        description: "",
        type: 1,
        name: "default",
        id:""
      },
    };
  },
  methods: {
    setAddItem() {
      this.editedIndex = "";
      this.editedItem = Object.assign({}, this.defaultItem);
      this.showHideDialog = true;
    },
    setEditItem(item) {
      this.editedIndex = item.id;
      this.editedItem = Object.assign({}, item);
      this.showHideDialog = true;
    },
    setElementDelete(event) {
      this.showDeleteModal = true;
      this.infoModal = event;
    },
    deleteTodo(event) {
      this.$store.commit('removeElement', event);
      this.showDeleteModal = false;
    },
    editItem(event) {
      if (this.editedIndex != "") {
        this.$store.commit('editElement', event);
        this.showHideDialog = false;
      } else {
        this.$store.commit('addElement', event);
        this.showHideDialog = false;
      }
    },
    hideModal() {      
      this.showDeleteModal = false;
      this.showHideDialog = false;
      this.infoModal = null;
      this.editedIndex = "";
      this.editedItem = this.defaultItem;
    },
    onAdd(event, list) {
      this.$store.commit('addList',list);
    },
    onRemove(event, list) {
      this.$store.commit('removeList',list);
    },
  },
  created() {
   
  }
};
</script>

<style scoped>
h3 {
  text-align: center;
}

.list-group-item {
  margin-bottom: 15px;
}

.logout {
  color: #000 !important;
}

.form-frame {
  border: 1px solid #000;
  padding: 25px;
  width: 49%;
}

.title-add {
  padding-top: 15px;
  padding-bottom: 15px;
  font-size: 15px;
}

.row-add {
  width: 100%;
  display: flex;
  justify-content: space-between;
  /*padding-left: 50px;
      padding-right: 50px;*/
  box-sizing: border-box;
}
</style>

<style>
.list-group-item {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.dragArea {
  height: 100%;
}
.list-group-item:hover {
  cursor: pointer;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}

</style>