<template>
	<div>
		<p>{{arr.type}}</p>
		<p>{{arr.d}}</p>
	</div>
</template>

<script>
import store from "../store/index"
import {useRoute} from "vue-router"
import {ref} from "vue"

export default {
	name: "FullCard",
	setup(){

		const route = useRoute()
		const displayRoute = route.params.id
		const arr = ref(null)

		
		arr.value = store.state.text.find(a => a.id === parseInt(displayRoute))
		
		return{
			displayRoute,
			arr,
			store
		}
	}
}
</script>

<style scoped>

p{
  margin-top: 1vh;
  font-family: 'Saira', sans-serif;
}

p:first-child{
  font-size: 22px;
  text-align: justify;
  margin: 0 2vw;
}


p:last-child{
  text-align: center;
  font-size: 18px;
  margin-top: 5vh;
}


</style>