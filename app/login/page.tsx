"use client"
import { useState } from "react"


const LoginPage = () => {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("");

  

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
        const res = await fetch('http://localhost:3000/api/auth/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
        })
        const data = await res.json();
        console.log(data)
    } catch (error) {
        console.log(error)
    }

  }
  return (
    <form action="" onSubmit={handleLogin} className='w-[500px] mx-auto bg-white shadow-lg rounded-md text-center h-[400px]'>
        <label htmlFor="" className='block my-1'>Email</label>
        <input type="email" name='email' className='block outline-none border px-3 py-1'
            onChange={(e) => setEmail(e.target.value)} value={email}
        />
        <label htmlFor="" className='block my-1'>Password</label>
        <input type="password" name="password" id="" className='block outline-none border px-3 py-1'
            onChange={(e) => setPassword(e.target.value)} value={password}
        />

        <button type="submit" className='px-3 py-2 bg-blue-500 rounded-md text-white'>Login</button>
    </form>
  )
}

export default LoginPage