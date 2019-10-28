<template>
  <!-- Modal -->
  <div class="modal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" v-if="(infoModal.id != '')">Edytuj</h5>
          <h5 class="modal-title" v-if="(infoModal.id == '')">Dodaj</h5>
          <button
            @click="$emit('hide-modal')"
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <label for="textarea">Opis zadania</label>
            <textarea
              id="textarea"
              v-model="infoModal.description"
              placeholder="Opis zadania"
              rows="10"
              max-rows="16"
              class="warning-text"
            ></textarea>
          </div>
          <div class="form-group">
            <label for="sel1">Wybierz rodzaj</label>
            <select v-model="infoModal.type" @change="changeType" class="form-control" id="sel1">
              <option :value="1">FEATURE</option>
              <option :value="2">BUGFIX</option>
              <option :value="3">DEFAULT</option>
            </select>
          </div>
        </div>
        <div class="modal-footer">
          <button
            @click="$emit('edit-item', infoModal)"
            type="button"
            class="btn btn-primary"
          >Zapisz</button>
          <button
            @click="$emit('hide-modal')"
            type="button"
            class="btn btn-secondary"
            data-dismiss="modal"
          >Zamknij</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalEdit",
  props: ["infoModal"],
  data() {
    return {};
  },
  methods: {
    changeType() {
      if (this.infoModal.type == 1) {
        this.infoModal.name = "feature";
      }

      if (this.infoModal.type == 2) {
        this.infoModal.name = "bugfix";
      }

      if (this.infoModal.type == 3) {
        this.infoModal.name = "default";
      }
    }
  }
};
</script>

<style scoped>
.warning-text {
  border: 1px solid #ccc;
  width: 100%;
}

.modal {
  display: block;
}

.btn.focus,
.btn:focus,
.btn:hover {
  color: #fff;
}
</style>