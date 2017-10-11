<template lang="html">
  <div class="list">
  <div class="col-md-4">
    <h3 id="pending">Pending</h3>
    <div class="thumbnail" v-for="data in kanban">
      <div class="caption">
        <h4>Task : {{ data.task }}</h4>
        <p></p>
        <p></p>
      </div>
      <div class="butt">
        <p><a href="#" class="btn btn-warning" role="button" @click="addTaskOnProgress(data, data['.key'])">Next</a></p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      taskOnProgress: ''
    }
  },
  firebase () {
    return {
      kanban: this.$db.ref('kanban/pending')
    }
  },
  methods: {
    addTaskOnProgress (data, param) {
      this.$db.ref(`kanban/onprogress/`).push({
        taskOnProgress: data.task,
        createdAt: new Date()
      })
      this.$db.ref(`kanban/pending/${param}`).remove()
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

#pending {
  text-align: center;
  color: red;
}

.thumbnail {
  box-shadow: 10px 10px 5px #888888;
}
</style>
