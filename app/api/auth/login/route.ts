import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"
import { PrismaClient } from "../../../generated/prisma";

const prisma = new PrismaClient();


export async function POST(req:NextRequest) {

    try{
        const body = await req.json();

        const { email, password} = body;

        if(!email || !password){
            NextResponse.json(
                { error: "Email mand password required"}
            )
        }

        const user= await prisma.user.findUnique({
            where: {email}
        });

        if(!user){
            NextResponse.json(
                {error: "User not found"}
            )
        }

        const validPassword = await bcrypt.compare(password, user.password);
        if(!validPassword){
            NextResponse.json(
                { error: "Password incorrect"}
            )
        }

        if(!process.env.JWT_SECRET){
            console.log("No secret defined")
            NextResponse.json({
                error: "No JWT_SECRET defined"
            })
        }

        const token = jwt.sign( {id: user.id, isAdmin: user.isAdmin}, process.env.JWT_SECRET as string, {expiresIn: '7d'})

        return NextResponse.json(
            { user: {
                id: user.id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin
            }, token},
            { status: 201}
          
        )
    }
    catch(error){
        console.error(error);
        return NextResponse.json(
            { error: "Something went wrong"}
        )
    }
}