import Course from "@/app/models/Course";
import {dbConnect} from "@/app/utils/dbConnect";
import { NextResponse } from "next/server";

export async function GET(req, {params}){
    const {courseid} = params;
    // dbConnect();

    // let courseData;
    // try{
    //     if(courseid == "all"){
    //         // courseData = await Course.find()
    //     }
        
    //     // courseData = await courseData.json()
    //     return NextResponse.json({courseData})
    // }
    // catch(e){
        return NextResponse.json({"course":"something went wrong"})
    // }
}