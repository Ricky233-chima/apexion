import React, { useState } from 'react';  

export default function ControlledInput() {  
    const [userName, setUserName] = useState("");  
    const [password, setPassword] = useState("");  
    const [email, setEmail] = useState("");  
    const [isSubmitted, setIsSubmitted] = useState(false);   

    function isValidEmail(email: string): boolean {  
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;  
        return emailPattern.test(email);  
    }  
    
    function isValidPassword(password: string): boolean {  
        const passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,}$/;  
        return passwordPattern.test(password);  
    }   

    const handleSubmit = (e: React.FormEvent) => {  
        e.preventDefault();   
        if (!isValidEmail(email)) {  
            alert("Please enter a valid email address.");  
            return;  
        }  
        if (!isValidPassword(password)) {  
            alert(password + "not strong enough use a mix of capital letter, number and symbols.");  
            return;  
        }  

      
        setIsSubmitted(true);  
    };  

    return (  
        <div>  
            <form onSubmit={handleSubmit}>  
                <div>  
                    <label htmlFor="name">Your Name</label>  
                    <input  
                        type="text"  
                        id='name'  
                        placeholder='name'  
                        value={userName}  
                        onChange={(e) => setUserName(e.target.value)}  
                    />  
                </div>  
                <div>  
                    <label htmlFor="password">Password:</label>  
                    <input  
                        type="password"  
                        id="password"  
                        placeholder='password'  
                        value={password}  
                        onChange={(e) => setPassword(e.target.value)}  
                    />  
                </div>  
                <div>  
                    <label htmlFor="email">Email</label>  
                    <input  
                        type="email"  
                        id="email"  
                        placeholder='email..'  
                        value={email}  
                        onChange={(e) => setEmail(e.target.value)}  
                    />  
                </div>  
                <button type="submit">Submit</button>  
            </form>  
 
            {isSubmitted && (  
                <>  
                    <p className='text-2xl'>Name: {userName}</p>  
                    <p className='text-2xl'>Email: {email}</p>  
                    <p className='text-2xl'>Password: {password}</p>  
                </>  
            )}  
        </div>  
    );  
}