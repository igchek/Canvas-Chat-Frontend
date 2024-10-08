import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"
import {AudioLines, Ban, BellRing, File, FileCheck, Link2, MenuIcon, Mic, UserIcon} from "lucide-react";
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
                            <Avatar className="h-full w-20  rounded-full bg-amber-200">
                                {icon == 'default' ? (
                                    <UserIcon size={50}/>
                                ) : (<div></div>)}
                            </Avatar>
                        </div>
                        <div>
                            {username}
                        </div>
                    </Card>
                </div>
                <div className="flex items-center justify-center">
                    <div className="flex flex-col gap-2 w-full sm:w-4/5 " >
                        <Button className="bg-[#8BABD84A]" variant="outline" size="lg"><BellRing/> Уведомления</Button>
                        <Button className="bg-[#8BABD84A]" variant="outline" size="lg"><File/>Файлы</Button>
                        <Button className="bg-[#8BABD84A]" variant="outline" size="lg"><AudioLines/>Аудиофайлы</Button>
                        <Button className="bg-[#8BABD84A]" variant="outline" size="lg"><FileCheck/>Избранное</Button>
                        <Button className="bg-[#8BABD84A]" variant="outline" size="lg"><Link2/>Ссылки</Button>
                        <Button className="bg-[#8BABD84A]" variant="outline" size="lg"><Mic/>Голосовые сообщения</Button>
                        <Button variant="destructive" size="lg"><Ban/>Заблокировать</Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}
