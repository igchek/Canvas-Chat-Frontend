"use client"
import {UserIcon} from 'lucide-react';
import {Card} from "@/components/ui/card";
import {useAppDispatch} from "@/utils/hooks";
import {getChat} from "@/store/slices/chat-slice";

interface ChatType{
    icon:string;
    sender:string;
    message:string;
    username:string;
}

export default function ChatItem({username,icon,sender,message}:ChatType) {
    const dispatch = useAppDispatch();
    return (
        <Card className=" cursor-pointer ml-5" onClick={()=>{dispatch(getChat({
            userName: username,
            isActive: false,
            isBanned: false,
            socketKey:"kasjdklas"
        }))}}>
            <div className="mt-5 mb-5 ml-5 flex items-center">
                <div className="rounded-full bg-amber-200">
                    {icon=='default'?(
                        <UserIcon size={50}/>
                    ):(<div></div>)}
                </div>
                <div className="ml-5">
                    <div>{username}</div>
                    <div className="flex items-center justify-center">
                        <div>{sender} </div>
                        <div>: {message}</div>
                    </div>
                </div>
            </div>
        </Card>
    );
}
