<template>
  <div>
    <ChildHome />
  </div>
</template>
<script>

import { defineComponent } from '@vue/composition-api'
import { ChildHome } from '../ChildHome'
export default defineComponent({
  components: { ChildHome },
  setup() {
    return {

    }
  },
})
</script>
