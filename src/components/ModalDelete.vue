<template>
  <!-- Modal -->
  <div class="modal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Uwaga</h5>
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
          <p>Czy na pewno usunąć rekord o numerze {{infoModal.id}}</p>

        </div>
        <div class="modal-footer">
          <button @click="$emit('delete-id', infoModal)" type="button" class="btn btn-primary">Usuń</button>
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
  name: "ModalDelete",
  props: ["infoModal"],
  data() {
    return {};
  }
};
</script>

<style scoped>
.modal {
  display: block;
}

.btn.focus,
.btn:focus,
.btn:hover {
  color: #fff;
}
</style>