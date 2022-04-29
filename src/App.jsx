import React from "react";
import { useState,useEffect } from "react";
import { useMemo } from "react";
import "./App.css" 
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";
import Start from "./components/Start";

function App() {
const [username,setUsername]=useState(null);
const [QuestionNumber,setQuestionNumber]=useState(1);
const [stop,setStop]=useState(false);
const [earned,setEarned]=useState('$ 0');

const moneyPyramid=useMemo(()=>
   [
      { id: 1, amount: "$ 100" },
      { id: 2, amount: "$ 200" },
      { id: 3, amount: "$ 300" },
      { id: 4, amount: "$ 500" },
      { id: 5, amount: "$ 1.000" },
      { id: 6, amount: "$ 2.000" },
      { id: 7, amount: "$ 4.000" },
      { id: 8, amount: "$ 8.000" },
      { id: 9, amount: "$ 16.000" },
      { id: 10, amount: "$ 32.000" },
      { id: 11, amount: "$ 64.000" },
      { id: 12, amount: "$ 125.000" },
      { id: 13, amount: "$ 250.000" },
      { id: 14, amount: "$ 500.000" },
      { id: 15, amount: "$ 1.000.000" },
   ].reverse(),
[])
const data = [
   {
     id: 1,
     question: "Rolex is a company that specializes in what type of product?",
     answers: [
       {
         text: "Phone",
         correct: false,
       },
       {
         text: "Watches",
         correct: true,
       },
       {
         text: "Food",
         correct: false,
       },
       {
         text: "Cosmetic",
         correct: false,
       },
     ],
   },
   {
     id: 2,
     question: "When did the website `Facebook` launch?",
     answers: [
       {
         text: "2004",
         correct: true,
       },
       {
         text: "2005",
         correct: false,
       },
       {
         text: "2006",
         correct: false,
       },
       {
         text: "2007",
         correct: false,
       },
     ],
   },
   {
     id: 3,
     question: "Who played the character of harry potter in movie?",
     answers: [
       {
         text: "Johnny Deep",
         correct: false,
       },
       {
         text: "Leonardo Di Caprio",
         correct: false,
       },
       {
         text: "Denzel Washington",
         correct: false,
       },
       {
         text: "Daniel Red Cliff",
         correct: true,
       },
     ],
   },
   {
    id: 4,
    question: "Electric Bulb filament is made of ?",
    answers: [
      {
        text: "Copper",
        correct: false,
      },
      {
        text: "Aluminium",
        correct: false,
      },
      {
        text: "Lead",
        correct: false,
      },
      {
        text: "Tungesten",
        correct: true,
      },
    ],
  },
  {
    id: 5,
    question: "which of the following is a non-metal that remains a liquid at room temperature?",
    answers: [
      {
        text: "Phosphorous",
        correct: false,
      },
      {
        text: "Bromine",
        correct: true,
      },
      {
        text: "Chlorine",
        correct: false,
      },
      {
        text: "Helium",
        correct: false,
      },
    ],
  },
  {
    id: 6,
    question: "The Centre for Cellular and Molecular Biology is Siyuated at?",
    answers: [
      {
        text: "Patna",
        correct: false,
      },
      {
        text: "jaipur",
        correct: false,
      },
      {
        text: "Hyderabad",
        correct: true,
      },
      {
        text: "New-Delhi",
        correct: false,
      },
    ],
  },
  {
    id: 7,
    question: "Where is the railway Staff College Situated?",
    answers: [
      {
        text: "Pune",
        correct: false,
      },
      {
        text: "Prayagraj",
        correct: false,
      },
      {
        text: "Vadadora",
        correct: true,
      },
      {
        text: "Delhi",
        correct: false,
      },
    ],
  },
  {
    id: 8,
    question: "Who took Ashoka's pillar inscription of Topra and meerut to delhi?",
    answers: [
      {
        text: "Allaudin Khilji",
        correct: false,
      },
      {
        text: "firoz Shah tukhlaq",
        correct: true,
      },
      {
        text: "muhammad Ghori",
        correct: false,
      },
      {
        text: "Sikandar Lodi",
        correct: false,
      },
    ],
  },
  
 ];
useEffect(() => {
   QuestionNumber>1 && setEarned(moneyPyramid.find(m=>m.id === QuestionNumber-1).amount)
}, [moneyPyramid, QuestionNumber])

   return <div className="app">
         {username ?(
            <>

            
         <div className="main">
         {stop ? <h1 className="endText">You Earned {earned}</h1>:(
            <>
            <div className="top">
               <div className="timer"> <Timer setStop={setStop} QuestionNumber={QuestionNumber}/></div>
            </div>
            <div className="bottom">
               <Trivia data={data} setStop={setStop} setQuestionNumber={setQuestionNumber} QuestionNumber={QuestionNumber}/>
            </div></>
         )}
         </div>
         <div className="pyramid"> 
            <ul className="moneyList">
               {moneyPyramid.map((m)=>(
                  <li className={QuestionNumber === m.id?"moneyListItem active":"moneyListItem"}>
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
               </li>
               ))}
               </ul>
              
          </div>
          </>
         ):<Start setUsername={setUsername}/>
         }
   </div>
}

export default App;