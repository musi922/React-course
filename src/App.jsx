import React, { useState } from 'react';
import './App.css'


export default function App() {
  const [formData, setFormData] = useState({
    email:"", 
    password:"", 
    confirmpassword:"",
    okayToEmail:true
  })
  function handleformData(event) {
    const {name,type,value,checked} = event.target
    setFormData(prevformData=>{
        return {
            ...prevformData,
            [name]:type==='checkbox'?checked:value
        }
        
    })
    
    
  }
  
    
    function handleSubmit(event) {
        event.preventDefault()
        console.log(formData);
        if (formData.confirmpassword === formData.password) {
            console.log('Successfully signed up')
        }
        else {
            console.log('passwords to not match')
            return
        }
        if (formData.okayToEmail) {
            console.log('Thanks for signing up for our newsletter!"');
            
        }
    }
    
    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    placeholder="Email address"
                    className="form--input"
                    name='email'
                    value={formData.email}
                    onChange={handleformData}
                />
                <input 
                    type="password" 
                    placeholder="Password"
                    className="form--input"
                    name='password'
                    value={formData.password}
                    onChange={handleformData}
                />
                <input 
                    type="password" 
                    placeholder="Confirm password"
                    className="form--input"
                    name='confirmpassword'
                    onChange={handleformData}
                    value={formData.confirmpassword}
                />
                
                <div className="form--marketing">
                    <input
                        id="okayToEmail"
                        type="checkbox"
                        name='okayToEmail'
                        checked={formData.okayToEmail}
                        onChange={handleformData}
                    />
                    <label htmlFor="okayToEmail">I want to join the newsletter</label>
                </div>
                
                <button 
                    className="form--submit"
                    onClick={handleSubmit}
                >
                    Sign up
                </button>

            </form>
        </div>
    )
}

