import { useState ,useRef, useReducer} from "react";
import Input from "./inputs";
import { BackButton, ForwardButton } from "./butttons";
import NaughtyBtn from "./butttons/naughtyBtn";
import Result from "./results";
import reducer, { ACTIONS } from "./reducer";
const defaultFriend={
  name:'',
conclusion:{
  name:'',
  type:'',
  naughtyQues:'',
  suggestion:"",
  problem:"",
  nickName:"",
  annoyingPoint:'',
  broCode:''
},
asked:{
  age:0,
favoriteFood:'',
weight:0,
myNickName:'',
}
}

function App() {
  const [result,setResult]  = useState(false)
  // const [name,setName] = useState('')
  const [friend,dispatch] = useReducer(reducer,defaultFriend)
  const slide = useRef(); 
  
  return (<>
    <input id="darkBtn" type="checkbox" className="absolute sm:w-10 sm:h-5 h-4 w-8 z-10  bg-[var(--background-primary)] rounded-3xl top-4  right-7 appearance-none  border-2 border-[var(--btn-color)]
      before:bg-[var(--btn-color)] before:rounded-3xl before:h-full before:aspect-square before:left-0  before:absolute before:transition-custom before:z-10 checked:before:left-4 sm:checked:before:left-5"/>
    <main className='w-screen relative h-screen bg-[var(--background-secondary)] text-center flex flex-col gap-4 items-center justify-center pt-4'>
      {
      result&&<Result info={{...friend}}></Result>
        
      }
      <section className="w-11/12 overflow-hidden rounded-md shadow-[var(--btn-color)] shadow-3xl max-w-2xl  h-3/4 bg-[var(--background-primary)] mx-auto  ">
      <h3 className="text-[var(--font-color)]  h-[20%] justify-center flex items-center bg-[var(--background-primary)] rounded-md font-bold uppercase">friendz quiz</h3>
      <section className=" h-[80%] w-full  relative">
        <div  ref={slide} className="flex-shrink-0  flex h-full ease-in-out duration-300 w-full absolute top-0 left-0">
          
      <div className="slide">
      <article className="w-9/12 text-xs sm:text-sm md:text-base max-w-xs relative ">            
         <input type='text' onChange={(e)=>{
          dispatch({type:ACTIONS.SEARCH,payload:{name:e.target.value}})
         }} id='name' required className="peer/input shadow-custom w-full h-10 text-[var(--btn-color)] px-2 bg-inherit border-[var(--btn-color)]  font-bold rounded-md focus:outline-0" />
        <label htmlFor='name' className=" uppercase  translate-y-[-50%] font-bold transition-custom top-1/2 left-2 bg-transparent text-[var(--font-color)] absolute peer-focus/input:top-[-50%] peer-valid/input:top-[-50%]"> enter your name</label>
         </article>
          <section className="flex justify-evenly w-full items-center ">
          <ForwardButton forward={1} msg={'next'} slide={slide}/>
          <button className="text-white text-xs sm:text-sm md:text-base shadow-custom uppercase font-bold bg-[var(--btn-color)] rounded-md h-7 md:h-8  w-20 md:w-32"
     onClick={()=>setResult(true)} >result</button>
          </section>
      </div>
      <div className="slide">
          <Input dispatch={dispatch}  Id={'age'} type={'number'} msg={'enter your age'} />
          <section className="flex justify-evenly w-full items-center ">
          <BackButton back={0} slide={slide}/>
          <ForwardButton forward={2} msg={'next'} slide={slide}/>
          </section>
      </div>
      <div className="slide">
          <Input dispatch={dispatch} Id={'myNickName'} type={'text'} msg={'what do you call me (my nickname) '} />
          <section className="flex justify-evenly w-full items-center ">
          <BackButton back={1} slide={slide}/>
          <ForwardButton forward={3} msg={'next'} slide={slide}/>
          </section>
      </div>
      <div className="slide">
          <Input dispatch={dispatch} Id={'weight'} type={'number'} msg={'what is your weight in kg ?'} />
          <section className="flex justify-evenly w-full items-center ">
          <BackButton back={2} slide={slide}/>
          <ForwardButton forward={4} msg={'next'} slide={slide}/>
          </section>
      </div>

      <div className="slide">
          <Input dispatch={dispatch} Id={'favoriteFood'} type={'text'} msg={'your favorite food'}/>
          <section className="flex justify-evenly w-full items-center ">
          <BackButton back={3}  slide={slide}/>
          <button className="text-white text-xs sm:text-sm md:text-base shadow-custom uppercase font-bold bg-[var(--btn-color)] rounded-md h-7 md:h-8  w-20 md:w-32"
     onClick={()=>setResult(true)} >result</button>
          </section>
      </div>
        </div>
      </section>
      </section>
    </main>
  </>
  );
}

export default App;
