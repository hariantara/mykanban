<template lang="html">
  <div class="list">
  <div class="col-md-4">
    <h3 id="Done">Done</h3>
    <div class="thumbnail" v-for="data in kanban">
      <div class="caption">
        <h4>Task: {{ data.taskDone }}</h4>
        <p></p>
        <p></p>
      </div>
      <div class="butt">
        <p><a href="#" class="btn btn-warning" role="button" @click="backToOnProgress(data, data['.key'])">Back</a> <a href="#" class="btn btn-primary" role="button" @click="clear(data['.key'])">Clear</a></p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  firebase () {
    return {
      kanban: this.$db.ref('kanban/done')
    }
  },
  methods: {
    backToOnProgress (data, param) {
      this.$db.ref(`kanban/onprogress`).push({
        taskOnProgress: data.taskDone,
        createdAt: Date.now()
      })
      this.$db.ref(`kanban/done/${param}`).remove()
    },
    clear (param) {
      this.$db.ref(`kanban/done/${param}`).remove()
    }
  }
}
</script>

<style lang="css">
.img {
  height: 242px;
  width: 200px;
}

.caption {
  text-align: center;
}

.butt {
  text-align: center;
}

#Done {
  text-align: center;
  color: Green;
}
</style>
