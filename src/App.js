import { useState ,useRef, useEffect} from "react";
import Input from "./inputs";
import { BackButton, ForwardButton } from "./butttons";

function App() {
  const [dark,setDark]= useState(false)
  useEffect(()=>{
    console.log(slide.current.styles);
  })
  const slide = useRef();
  let mode = dark ?'dark':' ';
  return (<>
    <input id="darkBtn" type="checkbox" className="absolute "/>
    <main className='w-screen h-screen bg-[var(--background-secondary)] text-center flex flex-col gap-4 items-center justify-center pt-4'>
      <section className="w-11/12 overflow-hidden rounded-md shadow-black shadow-xl max-w-2xl  h-3/4 bg-slate-900 mx-auto my- rounded- ">
      <h4 className="text-white h-[20%] justify-center flex items-center bg-slate-900 rounded-md font-bold uppercase">friends quiz</h4>
      <section className=" h-[80%] w-full  relative">
        <div  ref={slide} className="flex-shrink-0  flex h-full ease-in-out duration-300 w-full absolute top-0 left-0">
          
      <div className="slide">
          <Input Id={'name'} msg={'enter your name'}/>
          <ForwardButton forward={1} slide={slide}/>
      </div>
      <div className="slide">
          <Input Id={'age'} msg={'enter your age'} />
          <ForwardButton forward={2} slide={slide}/>
          <BackButton back={0} slide={slide}/>
      </div>
      <div className="slide">
          <Input Id={'food'} msg={'your favorite food'}/>
          <BackButton back={1} slide={slide}/>
      </div>
        </div>
      </section>
      </section>
    </main>
  </>
  );
}

export default App;
