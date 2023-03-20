import {ref} from "vue"

export default function useComposable(){
	const display = ref(true)
    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${day}-${month}-${year}`

    const text = ref([])
    const typing = ref("")
    // console.log(typing.value)
    // const name = ref("")
    // const d = ref(currentDate)


    function show(){
      display.value = true
    }

    function notShow(){
      display.value = false
    }

    function add(){
        text.value.push({
        id: Math.floor(Math.random() * 1000000),
        type: typing.value,
        d: currentDate
      
      })
      display.value = false
      typing.value = ""

    }

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