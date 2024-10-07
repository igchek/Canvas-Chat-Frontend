"use client"
import Image from "next/image";
import {ModeToggle} from "@/shared/theme-switcher/theme-switcher";
import {SignUp} from "@/components/sign-up/sign-up";
import {useEffect, useState} from "react";

export default function SignUpPage() {

    const [isBack, setIsBack] = useState(true);
    useEffect(() => {
        addEventListener("resize", () => {
            if(window.innerWidth<1200){
                setIsBack(false);
            }else{setIsBack(true);}
        });
        return () => {removeEventListener("resize", () => {})}
    }, []);
    return (

        <div className="flex">
            {isBack && (
                <Image src="/backgrounds/authBG.svg" alt="background" width={0}
                       height={0}
                       sizes="100vw" className="h-screen w-auto"
                />
            )}


            <div className="w-full h-screen">
                <div className="ml-10 mt-10 absolute ">
                    <ModeToggle/>
                </div>
                <div className="w-full h-full flex items-center justify-center ">
                    <SignUp />
                </div>
            </div>
        </div>
    );
}
