import { useState,useEffect } from "react";
function NumberCounter(){
  const desiredValue = 300;
  const desiredValue2 = 500;
  const desiredValue3 = 800;
    const [count,setCount] = useState(0);
    const [count2,setCount2] = useState(0);
    const [count3,setCount3] = useState(0);
    const [isInView,setIsInView] = useState(false);
    const [isInView2,setIsInView2] = useState(false);
    const [isInView3,setIsInView3] = useState(false);
     
      useEffect(()=>{
         const handleScroll = () =>{
        const element = document.getElementById("targetDiv");
        const element2 = document.getElementById("targetDiv2");
        const element3 = document.getElementById("targetDiv3");
        if(element){
          const rect = element.getBoundingClientRect();
          const isElementInView = rect.top < window.innerHeight && rect.bottom >= 0
          setIsInView(isElementInView);
        }
        if(element2){
          const rect2 = element2.getBoundingClientRect();
          const isElementInView2 = rect2.top < window.innerHeight && rect2.bottom >= 0
          setIsInView2(isElementInView2);
        }
        if(element3){
          const rect3 = element3.getBoundingClientRect();
          const isElementInView3 = rect3.top < window.innerHeight && rect3.bottom >= 0
          setIsInView3(isElementInView3);
        }
      }
        window.addEventListener("scroll",handleScroll);
        return () => window.removeEventListener("scroll",handleScroll)
      },[])

      useEffect(()=>{
        let interval = null;
        const duration = 2000;
      if(isInView){
        interval = setInterval(()=>{
          setCount((prev) =>{
            if(prev >= desiredValue){
              clearInterval(interval);
              return desiredValue
            }
            return prev + 1
          })
        },duration / desiredValue)

       }
      else{
        clearInterval(interval);
      }
      return () => clearInterval(interval);
      },[isInView,desiredValue])

      useEffect(()=>{
        let interval2 = null;
        const duration2 = 2000;
      if(isInView2){
        interval2 = setInterval(()=>{
          setCount2((prev) =>{
            if(prev >= desiredValue2){
              clearInterval(interval2);
              return desiredValue2
            }
            return prev + 1
          })
        },duration2 / desiredValue2)

       }
      else{
        clearInterval(interval2);
      }
      return () => clearInterval(interval2);
      },[isInView2,desiredValue2])

      useEffect(()=>{
        let interval3 = null;
        const duration3 = 2000;
      if(isInView3){
        interval3 = setInterval(()=>{
          setCount3((prev) =>{
            if(prev >= desiredValue3){
              clearInterval(interval3);
              return desiredValue3
            }
            return prev + 1
          })
        },duration3 / desiredValue3)

       }
      else{
        clearInterval(interval3);
      }
      return () => clearInterval(interval3);
      },[isInView3,desiredValue3])
    return (
        <>
        <section className="number_counter">
            <div className="number_counter_content">
                <div className="number_counter_content_entry">
               <div id="targetDiv">
                    <h1>{count}</h1>
               </div>
                <h3>Employees Global</h3>
                </div>
                <div className="number_counter_content_entry">
               <div id="targetDiv2">
               <h1>{count2}</h1>
               </div>
                <h3>Employees Global</h3>
                </div>
                <div className="number_counter_content_entry">
               <div id="targetDiv3">
               <h1>{count3}</h1>
               </div>
                <h3>Employees Global</h3>
                </div>
            </div>
        </section>
        </>
    )


}
export default NumberCounter;