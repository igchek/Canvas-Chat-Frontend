import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export const description =
    "A simple login form with email and password. The submit button says 'Sign in'."

export function LoginForm() {
    return (
        <Card className=" xl:w-1/2 sm:w-3/4 w-screen content-center">
            <CardHeader>
                <CardTitle className="text-4xl">Login</CardTitle>
                <CardDescription>
                    Enter your email below to login to your account.
                </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-5">
                <div className="grid gap-5">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="m@example.com" required />
                </div>
                <div className="grid gap-5">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" required />
                </div>
            </CardContent>
            <CardFooter>
                <Button size="xl" className="w-full mt-10">Sign in</Button>
            </CardFooter>
        </Card>
    )
}
