<template>
  <div>
    {{ idNumber }} {{ words }} {{ date }}
    <div class="t-m">
      <router-link :to="{name: 'FullCard', params:{id: id}}">
        <!-- {{theObject}} -->
        <p>{{ idNumber }}</p>
        <p>{{ words }}</p>
        <p>{{ date }}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
import {ref} from "vue"

export default {
	name: "ContentCard",

  props:{
    id: Number,
    type: String,
    d: String,
    text: Array
  },

  setup(props){
    const theObject = ref(props.text)
    const idNumber = ref(props.id)
    const words = ref(props.type)
    const date = ref(props.d)
    // const date = ref(props.d)
    console.log(`${props.id} ${props.type} ${props.d}`)

    return{
      idNumber, words, theObject, date
    }
  }
}
</script>

<style scope>
.t-m{
  width: 15vw;
  border: 1px solid red;
  height: 24vh;
  background-color: rgba(245, 111, 111, 0.4);
  overflow: auto;
}
</style>