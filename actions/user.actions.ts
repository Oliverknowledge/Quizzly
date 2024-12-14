"use server";

import { connectToDB } from "@/lib/mongoose";
import User from "@/models/user.models";
import { userTypes } from '@/types/Usertypes'
import { NextResponse } from "next/server";

export const createUser = async({name, email, password, examboard, profile_picture}: userTypes) => {
    try{
        connectToDB(); // Connect to database
        const existingUser = await User.findOne({ email });
     
        if (existingUser) {
            return NextResponse.json({ message: "User already exists" }, { status: 400 });
        }

        const user = await new User({name, email, password, examboard, profile_picture});
        user.save()
        console.log(existingUser)
    }
    catch(error: any){
        console.log(error.message)
    }
}

export const validateUser = async(email: string, password: string) => {
    try{
        connectToDB();

        
        const user = await User.find({email: email});
        console.log(user)
        if (user.length > 0){
            if ( user[0].email == email && user[0].password == password){
                return true
            }
        }
        else{
            return false
        }

    }
    catch(error: any){
        console.log(error.message)

    }
    }