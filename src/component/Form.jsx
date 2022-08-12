import React, {useState} from 'react';
// import { useReducer } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';
import * as yup from 'yup'
import { useEffect } from 'react';
import '../App.css'


const initialState = {
    person: '',
    size: '',
    feta: true,
    olives: true, 
    peppers: true, 
    onions: true, 
    special: ''
    } 

const Form = (props) => {

    const formSchema = yup.object().shape({
        person: yup.string().min(2, 'name must be at least 2 characters')
     })

    const {newOrder} = props

    const history = useHistory()

    const [form, setForm] = useState(initialState)
    
    const [error, setError] = useState({

        person: ""

    })

        const validateChange = (name, value) => {
            yup.reach(formSchema, name)
                .validate(value)
                .then(() => {
                    setError({...error, [name]: ''})
                })
                .catch((error)=> {
                    setError({...error, [name]: error.errors[0]})
                })
        }
         
    const changes = (e) => {

        const {name, type, checked} = e.target

        let {value} = e.target 

        value = type === 'checkbox' ? checked: value

        setForm({...form, [name]: value})

    } //end of changes function


    
   const submit = (e) => {
        e.preventDefault()

        axios.post('https://reqres.in/api/orders', form)
            .then(res =>{
                newOrder(res.data)
                setForm(initialState)
                history.push('/Order') 
            })

      }

    //   useEffect(()=>{
    //     formSchema.isValid(form)
    //         .then((enabled)=>{
    //            setDisabled(!enabled)     
    //         })
    // }, [form])

    return(

        <article data-style='order-form'> 

            <h2>Pizza Order Form</h2>

           <img src={`../Assets/Pizza.jpg`} alt='A fresh baked pizza' />  {/*Can't seem to get this image to work */}

            <form onSubmit={submit} id='pizza-form'>

                <label>
                    {`Enter Your Name: ${error.person}`}
                    <input onChange={changes} type='text' name='person' value={form.person} id='name-input' />
                </label>

                <label>

                    Select Your Size:

                    <select onChange={changes} name='size' id='size-dropdown'>
                        <option value=''>Please Select</option>
                        <option value='Small'>Small</option>
                        <option value='Medium'>Medium</option>
                        <option value='Large'>Large</option>
                    </select>

                </label>

                <label>
                    I want Feta!:
                    <input onChange={changes} type='checkbox' name='feta' value={form.feta} />
                    I want olives!:
                    <input onChange={changes} type='checkbox' name='olives' value={form.olives} />
                    I want peppers!:
                    <input onChange={changes} type='checkbox' name='peppers' value={form.peppers} />
                    I want onions!:
                    <input onChange={changes} type='checkbox' name='onions' value={form.onions} />
                </label>

                <label>
                    Enter Your Special Instructions:
                    <input onChange={changes} type='text' name='special' value={form.special} id='special-text' />
                </label>

                <button type='submit' id='order-button'>Submit</button>

              
            </form>


           {/* <form onSubmit={submit} id='pizza-form'>
               <label>
                <span>
                {`Enter your name: ${errors.name}`}
                </span>
                <input onChange={changes} type='text' name= 'name' value={form.name} id='name-input'/>
                </label> 

                <label>
                Select your size: 
                    <select onChange={changes} name='size' id='size-dropdown'>
                        <option value=''>Please Select</option>
                        <option value='Large'>Large</option>
                        <option value='Medium'>Medium</option>
                        <option value='Small'>Small</option>
                     </select>
                </label>
                    
                <label>
                    <input onChange={changes} type='checkbox' name='feta' value={form.feta}/>
                    <input onChange={changes} type='checkbox' name='olives' value={form.olives}/>
                    <input onChange={changes} type='checkbox' name='peppers' value={form.peppers}/>
                    <input onChange={changes} type='checkbox' name='onions' value={form.onions}/>
                </label>

                <label>
                Enter your special instructions here:
                <input onChange={changes} type='text' name='special' value={form.special} id='special-text'/>
                </label>

                <button type='submit'>Submit Order</button>
            </form> */}
           
        </article>
    )

}

export default Form