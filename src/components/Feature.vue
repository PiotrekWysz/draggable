<template>
  <div>
    <div class="feature">
      <div></div>
      <div class="title-card">
        {{
        element.name
        }}
      </div>
      <div style="display: flex;">
        <v-icon small class="mr-2" @click="$emit('edit-element', element)">edit</v-icon>
        <v-icon small class="mr-2" @click="$emit('delete-element', element)">close</v-icon>
      </div>
    </div>
    <div class="content" v-html="element.description"></div>
  </div>
</template>

<script>
export default {
  name: "Feature",
  props: ["element"],
  data() {
    return {};
  }
};
</script>

<style scoped>
.feature {
  display: flex;
  justify-content: space-between;
  background-color: #ace1af;
  text-align: center;
}
.title-card {
  padding: 15px 0 15px 0;
  text-transform: uppercase;
}
</style>