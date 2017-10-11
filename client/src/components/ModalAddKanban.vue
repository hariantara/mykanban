<template lang="html">
  <div class="form-group">
    <label class="control-label">Input your task :</label>
    <div class="input-group">
      <span class="input-group-addon">Reminder</span>
      <input type="text" class="form-control" v-model='task'>
      <span class="input-group-btn">
      <button class="btn btn-default" type="button" @click="addTask">Button</button>
    </span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      task: ''
    }
  },
  methods: {
    addTask () {
      var date = Date.now()
      this.$db.ref('kanban/pending').push({
        task: this.task,
        createdAt: date
      })
    }
  }
}
</script>

<style lang="css">
</style>
