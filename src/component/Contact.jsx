import React, { useState } from "react";
import vg from "../assets/vg.png";
import { motion } from "framer-motion";
// import { set } from 'mongoose'
import toast from "react-hot-toast";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase.js";

const Contact = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [disableBten,setDisableBtn] = useState(false);

  const changeHandler = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    setDisableBtn(true);
    try{
    await addDoc(collection(db, "contacts"), {
     ...inputs
    });
    toast.success("Message sent");
     setDisableBtn(false);
     setInputs(
      {
        name :"",
        email:"",
        message:"",
      }
     )
  }catch(error){
    toast.error("Error")
    console.log(error)
    setDisableBtn(false)

  }
    // console.log(inputs)
   

  };
  const animation = {
    form: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
      transition: {
        delay: 0.5,
      },
    },
  };

  return (
    <div id="contact">
      <section>
        <motion.form action="" {...animation.form} onSubmit={submitHandler}>
          <h2>Contact me</h2>
          <input
            type="text"
            value={inputs.name}
            onChange={changeHandler}
            name="name"
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            value={inputs.email}
            onChange={changeHandler}
            placeholder="Your Email"
            name="email"
            required
          />
          <input
            type="text"
            value={inputs.message}
            onChange={changeHandler}
            name="message"
            placeholder="Your Message"
            required
          />
          <motion.button
          className={
            disableBten? "disableBtn" : ""
          } 
          disabled={disableBten}
          {...animation.button} type="submit">
            Send
          </motion.button>
        </motion.form>
      </section>
      <aside>
        <img src={vg} alt="Graphics" />
      </aside>
    </div>
  );
};

export default Contact;
