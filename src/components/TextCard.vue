<template>
  <div>
    <div>
      <div class="h1-bttn">
        <h1>Notes</h1>
        <button class="open" @click="store.commit('show')">+</button>
      </div>
      <div class="con">
        <ContentCard v-for="note in store.state.text" :id="note.id" :d="note.d" :type="note.type" :key="note.id"/>
      </div>
    
    </div>
    <div class="bttn-text" v-if="store.state.display">
      <div>
        <textarea v-model="store.state.typing" placeholder="Title of your texts should the first"></textarea>
        <div class="bttns">
          <button class="add" @click="store.commit('add')">Add</button>
          <button class="close" @click="store.commit('notShow')">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContentCard from "./ContentCard.vue"
import store from "../store/index"

export default {
  name: 'TextCard',

  components:{
    ContentCard
  },

  setup(){
    // console.log(store)

    return{
      store
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.h1-bttn{
  width: 100%;
  max-width: 70vw;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  
}


h1{
  font-size: 32px;
  font-weight: bold;
}

.open{
  font-size: 40px;
}

.con{
  margin-top: 6vh;
  display: flex;
  justify-content: center;
  row-gap: 20px;
  column-gap: 10px;
  flex-wrap: wrap;
}

.bttn-text{
  width: 50vw;
  border: 1px solid brown;
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
}

@media only screen and (max-width: 600px) {
  .con{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
