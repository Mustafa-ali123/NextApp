import { Button } from '@mui/material'
import { useEffect, useState } from "react"
import { fbDelete, postfbdata,editData, postfbtodo } from "./Firebase/firebaseMethods"
import { getDatabase,  ref, onValue   } from "firebase/database";
import app from "./Firebase/Initfirebase";
import Result from '@/Componets/Result';

const database = getDatabase(app);

const quiz = ({a}) => {
  let correct =[]
  const [data, setdata] = useState([]);
  const [mark, setmark] = useState(0);
  const [dismark, setdismark] = useState(0);
  const [show, setshow] = useState(false);
  const [load, setload] = useState(false);
  const [incorect, setincorect] = useState();
  const [corrected, setcorrected] = useState();

  useEffect(()=>{
    if(a){
      setdata(a)
      data.map((x,i)=>correct.push( x.correctAns))
      setload(false)
    }
 
  })

const check = (e) => {
  correct.filter((x,i)=>{
  if(e==x){
    setmark(pre=>pre+1)
  }else{
    setincorect(pre=>pre+1)
  }
}
  )
}
const submit = () => {
  setshow(true)
  setmark(mark)
  setcorrected(mark)
  setincorect(dismark)
}
  return (
    <div>
      <h1 className="text-center mt-5">Quiz</h1>
    {load?<h1 className="text-center">No Auy Quiz </h1>: data.map((x,i)=>
          <div key={i}>
          <h2 className="text-center my-3 my-5">{x.question}</h2>
          
           <div className="container option ">
          {
            x.options.map((e,ind)=> <p key={ind}> <span>{e}</span>  <input value={e} name={x.id} onClick={()=>check(e)} type="radio"/> </p>)
          }</div>
          </div>
      )
    }
    <Button className='but my-5' variant='contained' color='success' onClick={submit}>Submit</Button>
    {show&&(<Result corr={corrected} inco={incorect}/>)}
    </div>
  )
}

export default quiz

export async function getStaticProps(context) {   
  
  let dataref = ref(database, "QuizApp")
  let  a;
onValue(dataref, (data) => {
  if (data.exists()) { 
   a= Object.values(data.val())
   console.log(a)
  } else {
    console.log("Data Not Found :(");
  }
})

  return {
    props: {a},
  }
}
