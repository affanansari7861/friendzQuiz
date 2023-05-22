import { useState ,useRef, useEffect, createContext} from "react";
import Input from "./inputs";
import { BackButton, ForwardButton } from "./butttons";
import NaughtyBtn from "./butttons/naughtyBtn";

export const FriendContext = createContext()

function App() {
  const [friendInfo,setFriendInfo]= useState({
    name:'',
    age:0,
    favoriteFood:'',
    weight:0,
    myNickName:'',
  })


  const slide = useRef(); 
  return (<FriendContext.Provider value={{friendInfo,setFriendInfo}}>
    <input id="darkBtn" type="checkbox" className="absolute sm:w-10 sm:h-5 h-4 w-8 z-10  bg-[var(--background-primary)] rounded-3xl top-4  right-7 appearance-none  border-2 border-[var(--btn-color)]
      before:bg-[var(--btn-color)] before:rounded-3xl before:h-full before:aspect-square before:left-0  before:absolute before:transition-custom before:z-10 checked:before:left-4 sm:checked:before:left-5"/>
    <main className='w-screen h-screen bg-[var(--background-secondary)] text-center flex flex-col gap-4 items-center justify-center pt-4'>
      <section className="w-11/12 overflow-hidden rounded-md shadow-[var(--btn-color)] shadow-3xl max-w-2xl  h-3/4 bg-[var(--background-primary)] mx-auto  ">
      <h4 className="text-[var(--font-color)]  h-[20%] justify-center flex items-center bg-[var(--background-primary)] rounded-md font-bold uppercase">friendz quiz</h4>
      <section className=" h-[80%] w-full  relative">
        <div  ref={slide} className="flex-shrink-0  flex h-full ease-in-out duration-300 w-full absolute top-0 left-0">
          
      <div className="slide">
          <Input Id={'name'} type={'text'} msg={'enter your name'}/>
          <section className="flex justify-evenly w-full items-center ">
          <ForwardButton forward={1} msg={'next'} slide={slide}/>
          </section>
      </div>
      <div className="slide">
          <Input Id={'age'} type={'number'} msg={'enter your age'} />
          <section className="flex justify-evenly w-full items-center ">
          <BackButton back={0} slide={slide}/>
          <ForwardButton forward={2} msg={'next'} slide={slide}/>
          </section>
      </div>
      <div className="slide">
          <Input Id={'myNickName'} type={'text'} msg={'what do you call me (my nickname) '} />
          <section className="flex justify-evenly w-full items-center ">
          <BackButton back={1} slide={slide}/>
          <ForwardButton forward={3} msg={'next'} slide={slide}/>
          </section>
      </div>
      <div className="slide">
          <Input Id={'weight'} type={'number'} msg={'what is your weight in kg ?'} />
          <section className="flex justify-evenly w-full items-center ">
          <BackButton back={2} slide={slide}/>
          <ForwardButton forward={4} msg={'next'} slide={slide}/>
          </section>
      </div>
      <div className="slide">
          <Input Id={'favoriteFood'} type={'text'} msg={'your favorite food'}/>
          <section className="flex justify-evenly w-full items-center ">
          <BackButton back={3}  slide={slide}/>
          </section>
      </div>
        </div>
      </section>
      </section>
    </main>
  </FriendContext.Provider>
  );
}

export default App;
