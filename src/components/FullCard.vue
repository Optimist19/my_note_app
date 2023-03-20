<template>
  <div>jghdjgsdfjkjhgvjjhbjmbdh</div>
  <!-- <div>{{displayRoute}}</div> -->
  <!-- <div>{{text.typing}}</div> -->
  <div>{{arr.type}}</div>
  <div>{{arr.d}}</div>
</template>

<script>

import useComposable from "../composable/useComposable";
import {useRoute} from "vue-router"
import {ref} from "vue"

export default {
	name: "FullCard",
	setup(){

		const route = useRoute()
		const displayRoute = route.params.id
		const arr = ref(null)

		const {text} = useComposable()
		console.log("text", text.value)

		arr.value = text.value.find(a => a.id === parseInt(displayRoute))

		// const {text} = useComposable()
		// console.log(text)
		// const arr = text.value.find(a => a.id === displayRoute)


		
		return{
			text,
			displayRoute,
			arr
		}
	}
}
</script>

<style>

</style>