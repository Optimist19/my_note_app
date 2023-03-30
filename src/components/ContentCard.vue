<template>
  <div>
    <div class="t-m">
      <router-link :to="{name: 'FullCard', params:{id: id}}">
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
    // console.log(`${props.id} ${props.type} ${props.d}`)

    return{
      idNumber, words, date, theObject
    }
  }
}
</script>

<style scope>
.t-m{
  width: 15vw;
  border: 1px solid red;
  height: 24vh;
  background-color: rgba(180, 231, 255, 0.192);
  overflow: auto;
}
p{
  margin-top: 1vh;
}

p:first-child{
  font-size: 12x;
  font-family: 'Saira', sans-serif;
}


p:last-child{
  margin-top: 1vh;
  font-size: 10px;
  font-weight: bold;
  font-family: 'Great Vibes', cursive;
}

a{
  text-decoration: none;
  color: black;
}

@media only screen and (max-width: 600px) {
  .con{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .t-m{
    width: 20vw;
    border: 1px solid red;
    height: 28vh;
  }
}
</style>