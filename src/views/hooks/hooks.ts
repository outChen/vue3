import {ref, Ref} from 'vue'
type CountReturnResult = {
  count:Ref<number>,
  add:() => void,
  decrease:() => void
}
export default function mathMethod (initValue = 0):CountReturnResult {
  let count = ref(initValue) 
  const add = ():void => {
    count.value += 1
    console.log('加法',  count.value)
  }
  const decrease = ():void => {
    if(count.value ===0) return
    count.value -= 1
  }
  return {
    count,
    add,
    decrease
  }
}
