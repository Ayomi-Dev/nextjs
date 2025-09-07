import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken"
import { PrismaClient } from "../../../generated/prisma";

const prisma = new PrismaClient()

export async function POST(req: NextRequest) {
    try{
        const body = await req.json();
        const {name, email, password, confirmPassword} = body;
        
        if(!name || !email || !password){
            return NextResponse.json({message: "name, email, and password required"}, { status: 400});
        }

        const userExist = await prisma.user.findUnique({ 
            where: { email }
        });

        if(userExist){
           return  NextResponse.json(
                { error: "User with email already exxist"},
                {status: 400}
            );
           
        }

        if(password !== confirmPassword){
            return NextResponse.json({ error: "Passwords do not match"}, {status: 400})
        }
 

         


        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword
            }
        })

        if(!process.env.JWT_SECRET){
            console.log("No secret defined")
            NextResponse.json({
                error: "No JWT_SECRET defined"
            });
        }
        
        const token = jwt.sign( {id: user.id, isAdmin: user.isAdmin}, process.env.JWT_SECRET as string, {expiresIn: '7d'})
        
        return NextResponse.json(
            {message: "User successfully signed up!", user: {id: user.id, email: user.email, name: user.name}, token },
            {status: 201}
        )
    }

    catch(error){
        console.error("Sign up error", error);

        return NextResponse.json(
            { error: "Something went wrong"},
            {status: 500}
        )
    }
}