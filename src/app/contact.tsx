"use client"
import Link from "next/link";

import { useRouter } from "next/navigation";

export default function Contact(){
const route = useRouter()


    return(
        <>
            <Link href={'login'}>login</Link>

        </>
    )
}

