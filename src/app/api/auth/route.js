import { NextResponse } from "next/server";
import { pipeline } from "nodemailer/lib/xoauth2";
import {promisify} from 'util'
import fs from 'fs'
// export function GET(req){
//    return NextResponse.json({Name:"Hamza"})
   
   
// }


export async function POST(req){let data = await req.formData()
 let meraDataBijo = promisify(pipeline)
  let meriFile = data.get('file')
    meraDataBijo(meriFile.stream(),
    fs.createWriteStream(process.cwd()+'/'+meriFile.name))
    console.log(data)
    
    return NextResponse.json({success:"true"})
} 