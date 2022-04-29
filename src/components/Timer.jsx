import { useState,useEffect } from "react"
import useSound from "use-sound";
import correct from "../sounds/src_sounds_correct.mp3";
import wrong from "../sounds/src_sounds_wrong.mp3";
import play from "../sounds/src_sounds_play.mp3";



export default function Timer({setStop,QuestionNumber}) {
    const [timer,setTimer]=useState(30);

    useEffect(() => {
        if(timer===0){
            return setStop(true);
        }
        const interval=setInterval(() => {
            setTimer(prev=>prev-1);
        }, 1000);
        return ()=>clearInterval(interval);
      
    }, [setStop,timer]);
    useEffect(() => {
      setTimer(30); 
    }, [QuestionNumber])
    
    
  return timer;
}
