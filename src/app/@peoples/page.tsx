import {MenuIcon} from "lucide-react";
import {Input} from "@/components/ui/input";
import ChatItem from "@/components/peoples/chat-item";

export default function PeoplesComponent() {
    return (
        <div className="w-1/4 h-full">
            <div className="flex justify-center items-center mt-5 mb-5">
                <MenuIcon className="cursor-pointer ml-5" size={50} />
                <Input className="h-20 rounded-full ml-5"/>
            </div>
            <div className="mt-5">
                <ChatItem icon='default' sender="You" message="sdiokfhoisdhfosdfpoj" username="pivasick" />

            </div>
            <div className="mt-5">
                <ChatItem icon='default' sender="You" message="sdiokfhoisdhfosdfpoj" username="pivasick"/>
            </div>
        </div>
    );
}
