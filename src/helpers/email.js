import { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import {useNavigate } from "react-router-dom";

const MailForm = () => {
  const [reciver, setReciver] = useState()
  const [name, setName] = useState()
  const [reciverValue, setReciverValue] = useState("template_mbp5d5q")
  const navigate = useNavigate();

    
    useEffect(() => {
    if (reciver === "admin") {
        setReciverValue("template_mbp5d5q")
    } else if (reciver === "sales") {
        setReciverValue("template_g2aug67")
    }

}, [reciver , reciverValue])


  const form = useRef();
  const sendData = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_9x5xr6j",
        `${reciverValue}`,
        form.current,
        "bzOhBtdtwKxOfZ_k1"
      )
      .then(
        (result) => {
          console.log(result.text);
          navigate("/" ,{state:{name}})
          e.target.reset()
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form className='ContactForm ' ref={form} onSubmit={(e) => sendData(e)}>
    <h2> <span>WE COVER</span> ALL OF THE UNITED KINGDOM </h2>
    <p>We have a full UK coverage and can offer instant response to any WEEE, data, storage or recycling issue that may arise</p>
         <div className=' ContactFormFlex flex a-center j-center gap-half'>
        
        <input name='name' type="text" placeholder='Name' required onChange={(e)=> setName(e.target.value)} />
        <input name='email' type="email" placeholder='Email' required  />
        <input name='company' type="Text" placeholder='Company name' required />
        <input name='phone' type="Text" placeholder='Contact number' required />
         <select  required  name="service"> 
        <option  hidden>Choose Service</option>
        <option  value="Recycling">IT Recycling&Dipolal</option>
        <option value="Buying">Buying</option>
        <option value="Selling">Selling</option>
        </select> 

         <select required name="contact" onChange={(e) => setReciver(e.target.value)}> 
        <option hidden>Choose One</option>
        <option value="admin">Admin</option>
        <option value="sales">Sales</option>
        </select> 
        <textarea defaultValue="Hello Egy-Technology." name="message" rows="4" cols="50" />
            
        <input type="submit" defaultValue="Send" />

    </div>
    </form>
  );
};
export default MailForm;




export const MailFormMini = () => {
  const [reciver, setReciver] = useState()
  const [name, setName] = useState()
  const [reciverValue, setReciverValue] = useState("template_mbp5d5q")
  const navigate = useNavigate();
  
  useEffect(() => {
  if (reciver === "admin") {
      setReciverValue("template_mbp5d5q")
  } else if (reciver === "sales") {
      setReciverValue("template_g2aug67")
  }

}, [reciver , reciverValue])


const form = useRef();
const sendData = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_9x5xr6j",
      `${reciverValue}`,
      form.current,
      "bzOhBtdtwKxOfZ_k1"
    )
    .then(
      (result) => {
        console.log(result.text);
        navigate("/" ,{state:{name}})
       e.target.reset()

      },
      (error) => {
        console.log(error.text);
      }
    );
};

return (


  <form className=' ContactForm flex a-center  gap-small'  ref={form} onSubmit={(e) => sendData(e)}>
  <input name='name' type="text" placeholder='Name' required onChange={(e)=> setName(e.target.value)} />
  <input name='email' type="email" placeholder='Email' required />
  <input name='phone' type="Text" placeholder='Contact number' required />
  <select required name="contact" onChange={(e) => setReciver(e.target.value)}> 
        <option hidden>Choose One</option>
        <option value="admin">Admin</option>
        <option value="sales">Sales</option>
        </select> 
        <textarea defaultValue="Hello Egy-Technology."  name="message" rows="4" cols="25" />
  <input type="submit" defaultValue="Send" />

</form>

);
};
