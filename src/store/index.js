import { createStore } from "vuex";

const store = createStore({
	state:{
		text: [],
		typing: "",
		d: "",
		display: false
	},

	mutations:{
		add(state){

			let date = new Date();

			let day = date.getDate();
			let month = date.getMonth() + 1;
			let year = date.getFullYear();
			let currentDate = `${day}-${month}-${year}`

			state.text.push({
				id: Math.floor(Math.random() * 1000000),
				type: state.typing,
				d: state.d = currentDate
			})

			state.display = false
			state.typing = ""

		},

		notShow(state){
			state.display = false
		},

		show(state){
			state.display = true
		}
	}
})

export default store
