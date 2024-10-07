import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export const description =
    "A sign up form with first name, last name, email and password inside a card. There's an option to sign up with GitHub and a link to login if you already have an account"

export function SignUp() {
    return (
        <Card  className=" xl:w-1/2 sm:w-1/2 w-screen content-center">
            <CardHeader>
                <CardTitle className="text-4xl">Sign Up</CardTitle>
                <CardDescription>
                    Enter your information to create an account
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid gap-4">
                    <div className="grid gap-5 mt-5">
                        <Label htmlFor="Username">Username</Label>
                        <Input id="last-name" placeholder="Robinson" required/>
                    </div>
                    <div className="grid gap-5 mt-5">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="m@example.com"
                            required
                        />
                    </div>
                    <div className="grid gap-5 mt-5">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" type="password"/>
                    </div>
                    <Button size="xl" type="submit" className="w-full mt-10">
                        Create an account
                    </Button>
                </div>
                <div className="mt-4 text-center text-2xl">
                    Already have an account?{" "}
                    <Link href="#" className="underline">
                        Sign in
                    </Link>
                </div>
            </CardContent>
        </Card>
    )
}