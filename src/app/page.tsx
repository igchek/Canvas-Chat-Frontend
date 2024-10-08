import {MenuIcon,Ellipsis,Smile,ChevronRight,Paperclip} from "lucide-react";
import {Input} from "@/components/ui/input";
import ChatItem from "@/components/peoples/chat-item";
import {Card, CardContent, CardHeader} from "@/components/ui/card";
import {ModeToggle} from "@/shared/theme-switcher/theme-switcher";
import {Button} from "@/components/ui/button";

export default function Home() {
  return (
      <div className="flex">
          <Card className="w-2/5 h-screen">
              <div >
                  <CardHeader >
                      <div className="flex justify-center items-center w-full">
                          <MenuIcon className="cursor-pointer" size={50}/>
                          <Input className="h-20 rounded-full ml-5"/>
                      </div>

                  </CardHeader>
                  <div className="border-t-2">
                      <div className="mt-5 mb-5 mr-5" >
                          <ChatItem icon='default' sender="You" message="sdiokfhoisdhfosdfpoj" username="pivasick"/>

                      </div>
                      <div className="mt-5 mb-5 mr-5">
                          <ChatItem icon='default' sender="You" message="sdiokfhoisdhfosdfpoj" username="pivasick"/>
                      </div>
                    </div>
              </div>
          </Card>
          <Card className="h-screen flex flex-col w-full">
              <CardHeader className="border-b-2">
                  <div className="flex justify-between items-center ">
                      <Ellipsis size={50} className="cursor-pointer"/>
                      <div>
                          <div>name</div>
                          <div>status</div>
                      </div>
                      <ModeToggle/>
                  </div>
              </CardHeader>
              <CardContent className="bg-chat h-full bg-no-repeat w-full bg-cover">
                  <div></div>
              </CardContent>
              <div className="h-32 border-t-2 flex items-center ">
                  <Smile size={50} className="cursor-pointer ml-5 mr-5"/>
                  <Input/>
                  <Button size="icon" className="border-2 flex items-center rounded-full mr-5 ml-5 cursor-pointer">
                      <ChevronRight size={50} />
                  </Button>
                  <Button size="icon" className="border-2  flex items-center rounded-full mr-5 ml-5 cursor-pointer">
                      <Paperclip size={50} />
                  </Button>

              </div>
          </Card>
      </div>
  );
}
