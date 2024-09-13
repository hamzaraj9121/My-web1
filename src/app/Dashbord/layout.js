import Link from "next/link";

export default function layout({children}){
    return <div>
        <h1>ye leout page hai</h1>
       <div><Link href={"/Dashbord/student"}> Student</Link></div>
       
      <div> <Link href={"/Dashbord/teachers"}>teachers</Link></div>
       {children}
    </div>
}