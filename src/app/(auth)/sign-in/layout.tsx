import {ReactNode} from "react";

export default function AuthLayout({children}: {children: ReactNode}) {

    return (
        <div className="text-5xl">
            {children}
        </div>
    )
}