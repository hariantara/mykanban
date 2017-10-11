<template lang="html">
  <div class="maincontent">
    <div class="container">
      <ModalAddKanban/>
      <TitleHeader/>
      <SubContent/>
      <OnProgress/>
      <Done/>
    </div>
    <div class="kaki">
      <Footers/>
    </div>
  </div>
</template>

<script>
import TitleHeader from '@/components/TitleHeader'
import SubContent from '@/components/SubContent'
import OnProgress from '@/components/OnProgress'
import ModalAddKanban from '@/components/ModalAddKanban'
import Done from '@/components/Done'
import Footers from '@/components/Footers'
export default {
  components: {
    SubContent,
    TitleHeader,
    ModalAddKanban,
    OnProgress,
    Done,
    Footers
  }
}
</script>

<style lang="css">
</style>
