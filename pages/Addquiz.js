import { Button } from '@mui/material'
import { useEffect, useState } from "react"
import { fbDelete, postfbdata,editData, postfbtodo } from "./Firebase/firebaseMethods"
import { getDatabase,  ref, onValue   } from "firebase/database";
import app from "./Firebase/Initfirebase";
import Alert from "../Componets/Alert"
const database = getDatabase(app);

const addquiz = (props) => {

  const [inpopt, setinpopt] = useState("");
  const [mess, setmess] = useState("");
  const [opened, setopened] = useState(false);
  const [arry, setarry] = useState([]);
  const [alldata, setalldata] = useState([]);


  const submit = (e) => {
    e.preventDefault()    
    postfbdata(alldata,"QuizApp")
    .then((res)=> {
    setopened(true)  
    setmess("Your Quiz save ")
    })
    .catch((err)=>{
      setopened(true) 
      setmess(err)
    })
  }

  const add = (e) => {
    e.preventDefault()
    setarry([...arry, inpopt])
    setalldata({...alldata, options:arry })
  }

  return (
    <>
    <div className="mt-5" >
      <h2 className='container mb-3  text-center'>Enter the Quiz</h2>
      <div className='container'>
        <form className='contain container'>
          <div className="">
            <h3>Enter the Questions :</h3>
            <input type="text"  className="form-control mb-2" onChange={e => setalldata({...alldata ,question:e.target.value})} placeholder='Enter the question' id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div className="mb-3">
            <h3>Enter the options :</h3>
            <input type="text" value={inpopt} onChange={e => setinpopt(e.target.value)} placeholder='Enter the options' className="form-control" id="exampleInputPassword1" />
            <Button variant='contained' color='success' onClick={add} >Add</Button>
            <h3 className='my-2'>Enter the Correct Answer :</h3>
            <input type="text" onChange={e => setalldata({...alldata,correctAns:e.target.value})} placeholder='Enter the Correct Answer' className="form-control" id="exampleInputPassword1" />
          </div>
          <ul>
            {
              arry.map((x, i) =><li key={i}>{x}</li>)
            }
          </ul>
          <Button variant="contained" color="primary" type="submit" onClick={submit}>Submit</Button>
        </form>
      </div>
</div>
<Alert body={mess} closed={e=>setopened(e)} open={opened} title="Database" />
    </>
  )
}

export default addquiz

