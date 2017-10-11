<template lang="html">
  <div class="list">
  <div class="col-md-4">
    <h3 id="OnProgress">On Progress</h3>
    <div class="thumbnail" v-for="data in kanban">
      <div class="caption">
        <h4>Task: {{ data.taskOnProgress }}</h4>
        <p></p>
        <p></p>
      </div>
      <div class="butt">
        <p><a href="#" class="btn btn-danger" role="button" @click="backToPending(data, data['.key'])">Back</a> <a href="#" class="btn btn-success" role="button" @click="addTaskDone(data, data['.key'])">Next</a></p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      taskDone: ''
    }
  },
  firebase () {
    return {
      kanban: this.$db.ref('kanban/onprogress')
    }
  },
  methods: {
    addTaskDone (data, param) {
      this.$db.ref(`kanban/done`).push({
        taskDone: data.taskOnProgress,
        createdAt: Date.now()
      })
      this.$db.ref(`kanban/onprogress/${param}`).remove()
    },
    backToPending (data, param) {
      this.$db.ref(`kanban/pending`).push({
        task: data.taskOnProgress,
        createdAt: Date.now()
      })
      this.$db.ref(`kanban/onprogress/${param}`).remove()
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

#OnProgress {
  text-align: center;
  color: orange;
}
</style>
