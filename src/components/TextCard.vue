<template>
  <div class="hello">
   <!-- hello world -->
    <div>
      <div class="h1-bttn">
        <h1>Notes</h1>
        <button class="open" @click="show">+</button>
      </div>
      {{ text }}
      <ContentCard v-for="note in text" :text="text" :id="note.id" :d="note.d" :type="note.type" :key="note.id"/>
      <!-- <div class="t-m" v-for="note in text" :key="note.id">
        <div>
          <p>{{note.type}}</p>
          <p>{{ note.d }}</p>
          <p>{{ note.id }}</p>
        </div>
      </div> -->
    </div>
    <div class="bttn-text" v-if="display">
      <div>
        <textarea v-model="typing"></textarea>
        <div class="bttns">
          <button class="add" @click="add">Add</button>
          <button class="close" @click="notShow">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContentCard from "./ContentCard.vue"
import useComposable from "@/composable/useComposable";
// import {ref} from "vue"
export default {
  name: 'TextCard',

  components:{
    ContentCard
  },

  setup(){
    const {display, show, notShow, text, add, typing} = useComposable()
    // const display = ref(true)
    // const date = new Date();

    // let day = date.getDate();
    // let month = date.getMonth() + 1;
    // let year = date.getFullYear();
    // let currentDate = `${day}-${month}-${year}`

    // const text = ref([])
    // const typing = ref("")
    // console.log(typing.value)
    // const name = ref("")
    // const d = ref(currentDate)


    // function show(){
    //   display.value = true
    // }

    // function notShow(){
    //   display.value = false
    // }

    // function add(){
    //     text.value.push({
    //     id: Math.floor(Math.random() * 1000000),
    //     type: typing.value,
    //     d: currentDate
      
    //   })
    //   display.value = false
    //   typing.value = ""

    // }

    return{
      display,
      show,
      notShow,
      // d,
      text,
      add,
      // name,
      typing
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.hello{
  height: 100vh;
  width: 100vw;
  background-color: aquamarine;
}
.h1-bttn{
  width: 100%;
  /* height: 40vh; */
  /* background: rgba(0, 0, 255, 0.1); */
  /* display: flex; */
  /* justify-content: space-around; */
  /* align-items: center; */
  /* position: absolute; */
  max-width: 70vw;
  /* padding: 10px; */
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

/* .t-m{
  width: 15vw;
  border: 1px solid red;
  height: 24vh
} */

h1{
  font-size: 32px;
  font-weight: bold;
  /* margin: 0; */
}

.open{
  font-size: 40px;
}

.bttn-text{
  width: 50vw;
   /* height: 50vh; */
  border: 1px solid red;
  /* top: 40vh;
  position: absolute */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
}

.bttns{
  display: flex;
  flex-direction: column;
}

.relative-con{
  position: relative;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: center; */
}
</style>
