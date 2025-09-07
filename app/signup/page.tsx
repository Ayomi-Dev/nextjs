"use client"
import React from 'react'
import { FaEnvelope, FaEye, FaHome, FaLock, FaUser } from 'react-icons/fa';
import { PageWrapper } from '../../utils/PageWrapper';
import { InputComponent } from '../../utils/InputComponent';



const SignUpPage = () => {
    const [email, setEmail] = React.useState("")
    const [name, setName] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [confirmPassword, setConfirmPassword] = React.useState("");
    const [passwordType, setPasswordType] = React.useState("password");
    const [confirmPasswordType, setConfirmPasswordType] = React.useState("password");


    const showPassword = () => {
        setPasswordType(passwordType === "password" ? "text" : "password");
    }

    const showConfirmPassword = () => {
        setConfirmPasswordType(confirmPasswordType === "password" ? "text" : "password");
    }

    const handleSubmit = async (e:React.FormEvent) => {
        e.preventDefault();

        if(!name || !email || !password || !confirmPassword){
            alert("please fill all fields");
            return;
        }

        try { 
            const res = await fetch("http://localhost:3000/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": " application/json"
                },
                body: JSON.stringify( { name, email, password, confirmPassword})
            })
            const data = await res.json();
            console.log(data);
            if(!res.ok){
                throw new Error(data.error  || "Something went wrong")
            }

        } catch (error) {
            console.log(error);
            alert(error)
        }

        setEmail("");
        setName("");
        setPassword("");
        setConfirmPassword("");
    }
  return (
    <PageWrapper>
        <h1 className='text-center py-3 font-bold'>Sign Up</h1>
        <form action="" onSubmit={handleSubmit} className='shadow-lg rounded-md w-[500px] mx-auto py-3 px-2 flex flex-col items-center justify-center'>
            <div className="flex w-full items-center ">
                <FaUser />
                <InputComponent id='name' label='Username' type='text' value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="flex items-center w-full">
                <FaEnvelope />
                <InputComponent id='email' label='Email Address' type='text' value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="flex items-center w-full">
                <FaLock />
                <InputComponent id='password' label='Password' type={passwordType} value={password} onChange={(e) => setPassword(e.target.value)} />
                <FaEye onClick={ showPassword } className='cursor-pointer' />
            </div>
            <div className="flex items-center w-full">
                <FaLock />
                <InputComponent id='confirmPassword' label='Confirm Password' type={confirmPasswordType} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />           
                <FaEye onClick={showConfirmPassword} className='cursor-pointer' />
            </div>
            <button type="submit" className='px-3 py-1 bg-blue-400 rounded-md text-white mt-3 cursor-pointer'>Sign up</button>
        </form>
    </PageWrapper>
  )
}

export default SignUpPage