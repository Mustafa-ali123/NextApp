import { fbDelete, postfbdata,editData, postfbtodo } from "./Firebase/firebaseMethods"
import { getDatabase,  ref, onValue   } from "firebase/database";
import app from "./Firebase/Initfirebase";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Confirm from "../Componets/Confirm"
import { Button } from '@mui/material';
import {useState,useEffect} from 'react';
const database = getDatabase(app);
export default function GetTodos({a}) {
  // console.log(a)
  let [todo, settodo] = useState([])
  let [fbdata, setfbdata] = useState([])
  let [btnText, setbtnText] = useState("+")
  let [index, setindex] = useState("")
  let [id, setid] = useState("")
  let [colors, setcolors] = useState("primary")
  const [mess, setmess] = useState("Are you sure to delete this task");
  const [opened, setopened] = useState(false);
  let rendering = () => { 
     let dataref =  ref(database, "Todos")
    onValue(dataref, (data) => {
  if (data.exists()) { 
  setfbdata(Object.values(data.val()))
  } else {   
    setfbdata("")
  }
})
  }
  let add = () => {

    if(!todo.todo){
        alert("Please enter some Tasks")
        return
    }
    if(index){
     editData(todo,'Todos',todo.id)
    .then(()=>{
      setbtnText("+") 
      setcolors("primary")
    })
    .catch((err)=>console.log(err))
    }else{
      postfbtodo(todo,"Todos").then((res)=>console.log(res))
    .catch((err)=>console.log(err))
    } 
    setindex("")
  }
  useEffect(()=>{  
    rendering()
  },[])

  let remove = (e) => {
    setopened(true)
    setid(e)
  }
  let controlYes = () => {
    setopened(false)
    fbDelete("Todos", id).then((res)=>{
      rendering()
    }).catch((err)=>console.log(err))  
  }

  let edit = (x, id) => {
      setindex(id)       
      settodo({todo:x,id})
      setbtnText("Edit") 
      setcolors("success")
  }
  return (
    <>
      <div className='container contained'>
<div className='row '>
  <div className='col-lg-12 col-md-12 sm-12 mt-5 mx-4'>
    <input className="control-input" value={todo.todo} type="text" onChange={e => settodo({...todo,todo:e.target.value})} placeholder=" Enter the todo" />
     <Button variant="contained" color={colors} onClick={add} className="py-3 mb-1 btns" >{btnText}</Button>
    
   <ul className=' pb-1 '>
          {fbdata==""?<h5 className="mt-5 mx-5">No Any Todos</h5>:fbdata.map((x, i) =><li key={i}>
            <span className="span">{x.todo}</span>
          <Button color="error" onClick={() => remove(x.id)}> <DeleteIcon /></Button>
                <Button color="success" onClick={() => edit(x.todo,x.id)}><EditIcon /></Button> </li>           
            )
          }
        </ul>     
  </div>
</div>
</div>

        <style jsx global>
          {`
          h5{color:red;}
            `}
          </style>  
          <Confirm  open={opened} title="Database" closed={e=>setopened(e)} body={mess} state={e => controlYes()}/>
    </>

  )
}


export async function getStaticProps(context) {   
  
    let dataref = ref(database, "Todos")
    let  a;
  onValue(dataref, (data) => {
    if (data.exists()) { 
     a= data.val()
    } else {
      console.log("Data Not Found :(");
    }
  })
   return {
      props: {a},
    }
  }
