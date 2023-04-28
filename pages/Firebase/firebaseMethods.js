import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";
import { getDatabase, set, ref, onValue, push, remove } from "firebase/database";
import app from "./Initfirebase";

const auth = getAuth(app);
const database = getDatabase(app);


let signUpUser = (obj) => {
    return new Promise((resolve, reject) => {
        createUserWithEmailAndPassword(auth, obj.email, obj.password)
            .then(res => {
                obj.id = res.user.uid
                const reference = ref(database, `users/${obj.id}`)
                set(reference, obj)
            }).then(() => {
                alert("You SignUp Successuly")
            }).catch((err) => reject(err.message))
    });
};
let loginUser = (obj) => {

    return new Promise((resolve, reject) => {
        signInWithEmailAndPassword(auth, obj.email, obj.password)
            .then(res => {
                resolve(res.user.uid)
            }).catch(err => reject(err.message))
    })
};

let signoutUser = () => {
    return new Promise((resolve, reject) => {
        signOut(auth).then(res => console.log(res))
            .catch(err => console.log(err))
    })

};

let postfbdata = (obj, node) => {

    return new Promise((resolve, reject) => {
        let keyrefr = ref(database, `${node}/`);
        obj.id = push(keyrefr).key;
        let objRefre = ref(database, `${node}/${obj.id}`)
        let dataref = ref(database, `${node}`)
        set(objRefre, obj).then((res) => {
            onValue(dataref, (data) => {
                if (data.exists()) {
                    resolve(data.val());
                } else {
                    alert("Data Not Found :(");
                }
            })
        }).catch((err) => reject(err.message))

    })
};

let postfbtodo = (obj, node) => {
    return new Promise((resolve, reject) => {
        let keyrefr = ref(database, `${node}/`);
        obj.id = push(keyrefr).key;
        let objRefre = ref(database, `${node}/${obj.id}`)
        let dataref = ref(database, `${node}`)
        set(objRefre, obj).then((res) => {})
        .catch((err) => reject(err.message))

    })
};

let editData = (obj, node, id) => {
    return new Promise((resolve, reject) => {
        let objRefre = ref(database, `${node}/${id}`)
        set(objRefre, obj).then((res) => {
            resolve("Your Changing is Save")
        }).catch((err) => reject(err.message))
    })
};

let editTodo = (obj, node, ide) => {
    return new Promise((resolve, reject) => {
        console.log(obj)
        let objRefre = ref(database, `${node}/${ide}`)
        set(objRefre, obj).then(() => {            
            alert("Your Changing is Save")
        }).catch((err) => reject(err.message))
    })
};
let fbDelete = (node, id) => {
    return new Promise((resolve, reject) => {  
          remove(ref(database, `${node}/${id}`)).then(() => {
            resolve("done")
    }).catch((error) => {
      reject(error)
    })
    })
};

let fbGetById = () => { };
let fbEdit = () => { };
let fbGet = () => { };
export {
    postfbdata,
    postfbtodo,
    editData,
    editTodo,
    signUpUser,
    loginUser,
    signoutUser,
    fbGet,
    fbGetById,
    fbEdit,
    fbDelete,
};