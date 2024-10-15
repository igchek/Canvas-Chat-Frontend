import {Button} from "@/components/ui/button"
import {Dialog, DialogContent, DialogTrigger,} from "@/components/ui/dialog"
import {Ban, MenuIcon, UserIcon} from "lucide-react";
import {Avatar} from "@/components/ui/avatar";
import {Card} from "@/components/ui/card";

interface DialogProps {
    username: string;
    icon:string;
}

export function PeoplesDialog(props: DialogProps) {
    const {username, icon} = props;
    return (
        <Dialog>
            <DialogTrigger asChild>
                <MenuIcon className="cursor-pointer" size={50}/>
            </DialogTrigger>
            <DialogContent className="max-w-full sm:max-w-[600px] h-full sm:h-fit content-center ">
                <div className="flex justify-center items-center">
                    <Card className="flex flex-col gap-4 items-center w-full sm:w-4/5   ">
                        <div className="flex flex-col">
                            <Avatar className="h-full w-full  rounded-full bg-amber-200 cursor-pointer">
                                {icon == 'default' ? (
                                    <UserIcon size={100}/>
                                ) : (<div></div>)}
                            </Avatar>
                        </div>
                        <div>
                            {username}
                        </div>
                    </Card>
                </div>
                <div className="flex items-center justify-center">
                    <div className="flex flex-col sm:w-4/5 mt-10 mb-10" >
                        <Button className="bg-[#8BABD84A]" variant="outline" size="lg"> Настройки</Button>
                        <Button className="bg-[#8BABD84A]" variant="outline" size="lg">Контакты</Button>
                        <Button className="bg-[#8BABD84A]" variant="outline" size="lg">Избранное</Button>
                        <Button className="bg-[#8BABD84A]" variant="outline" size="lg">Звонки</Button>
                        <Button className="bg-[#8BABD84A]" variant="outline" size="lg">Мои истории</Button>
                        <Button className="bg-[#8BABD84A]" variant="outline" size="lg">Подарки</Button>

                    </div>

                </div>
                <div className='flex justify-center items-center'>
                    <Button variant="destructive" size="lg" className='sm:w-4/5'><Ban/>Выйти</Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}
