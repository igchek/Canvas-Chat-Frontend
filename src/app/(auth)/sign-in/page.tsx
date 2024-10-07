"use client"
import Image from "next/image";
import {ModeToggle} from "@/shared/theme-switcher/theme-switcher";
import {useEffect, useState} from "react";
import {LoginForm} from "@/components/sign-up/auth";

export default function SignInPage() {

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
                    <LoginForm/>
                </div>
            </div>
        </div>
    );
}
