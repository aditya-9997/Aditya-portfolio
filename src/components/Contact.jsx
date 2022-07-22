import React,{useState} from 'react'

import { db } from "../firebase"
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
  getDocs,
  deleteDoc

} from "@firebase/firestore";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Contact = () => {

  const [store, setstore] = useState({ name: "", email: "", msg: "" });

  const solve = (e) => {
    let name = e.target.name;
    let value = e.target.value;



    setstore({ ...store, [name]: value });
  }
  const userdb = collection(db, "users");
  const submitData = async (e) => {
    e.preventDefault();

    if (store.name && store.email && store.msg) {
      await addDoc(userdb, { name: store.name, email: store.email, msg: store.msg });

      setstore({ name: "", email: "", msg: "" });
      toast("I will connect you soon!");
    }
    else {
      window.alert("please fill the contact fields");
    }

  }
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form  className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact </p>
                <p className='text-gray-300 py-4'>Submit the form below or shoot me an email - aadityapatil997@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' value={store.name} onChange={solve} />
        <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' value={store.email} onChange={solve}/>
        <textarea className='bg-[#ccd6f6] p-2' name="msg" rows="10" placeholder='Message' value={store.msg} onChange={solve}/>
            < button onClick={submitData} className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        <ToastContainer/>
        </form>
    </div>
  )
}

export default Contact