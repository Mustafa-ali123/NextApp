// // import firebase from "firebase/app"
// import { useEffect, useState } from "react"
// import { fbDelete, postfbdata, postfbtodo } from "./Firebase/firebaseMethods"
// import { getDatabase,  ref, onValue   } from "firebase/database";
// import app from "./Firebase/Initfirebase";

// const database = getDatabase(app);

// export default function Home(props) {
//   let {a}=props
  
//   let [input, setinput] = useState("")
//   let [todo, settodo] = useState([])
//   let [fbdata, setfbdata] = useState([])

//   let rendering = () => {
//   settodo(a)
//   console.log(todo)
//   }
//   let add = () => {
//     postfbtodo(todo,"Todos").then((res)=>console.log(res))
//     .catch((err)=>console.log(err))
//     // setinput("")

//   }
//   useEffect(()=>{  
//     rendering()
//   },[])

//   let remove = (e) => {
//     console.log(e)   
//     fbDelete("Todos", e ).then((res)=>{
//       rendering()
//       console.log(res)
//     }).catch((err)=>console.log(err))  
//   }

//   // let edit = (x, i) => {
//   //   setindex(i)
//   //   setinput(x)
//   // }
//   return (
//     <>
//       <div className="mx-auto">
//         <input type="text" onChange={e => settodo({todo:e.target.value})} placeholder="Enter the todo" />
//         <button className="btn" onClick={add}>Add</button>
//         <ul>
//           {
//             fbdata.map((x, i) =><li key={i}>{x}<button className="btn" onClick={() => remove(i)}>Remove</button>
//                 <button className="btn" onClick={() => edit(x, i)}>edit</button> </li>
            
//             )
//           }
//         </ul>
//       </div>
//     </>
//   )
// }

// export async function getStaticProps(context) {   
  
//   let dataref = await ref(database, "Todos")
//   let  a;
// onValue(dataref, (data) => {
//   if (data.exists()) { 
//    a= Object.values(data.val())
//    console.log(a)
//   } else {
//     console.log("Data Not Found :(");
//   }
// })

//   return {
//     props: {a},
//   }
// }

import Addquiz from './Addquiz'

const index = () => {
  return <Addquiz/>
}

export default index
