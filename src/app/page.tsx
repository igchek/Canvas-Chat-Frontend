"use client"
import {Smile,ChevronRight,Paperclip} from "lucide-react";
import {Input} from "@/components/ui/input";
import ChatItem from "@/components/peoples/chat-item";
import {Card, CardContent, CardHeader} from "@/components/ui/card";
import {ModeToggle} from "@/shared/theme-switcher/theme-switcher";
import {Button} from "@/components/ui/button";
import {ChatDialog} from "@/components/chat-dialog/chat-dialog";
import {PeoplesDialog} from "@/components/peoples-dialog/peoples-dialog";
import {useAppSelector} from "@/utils/hooks";

export default function Home() {
    const chatData = useAppSelector((state)=>state.chat)
    console.log(chatData.isActive)
  return (
      <div className="flex font-inter">
          <Card className="w-2/5 h-screen">
              <div >
                  <CardHeader >
                      <div className="flex justify-center items-center w-full">
                          <PeoplesDialog username="name" icon="default"/>
                          <Input className="h-20 rounded-full ml-5"/>
                      </div>

                  </CardHeader>
                  <div className="border-t-2">
                      <div className="mt-5 mb-5 mr-5" >
                          <ChatItem icon='default' sender="You" message="sdiokfhoisdhfosdfpoj" username="test"/>

                      </div>
                      <div className="mt-5 mb-5 mr-5">
                          <ChatItem icon='default' sender="You" message="sdiokfhoisdhfosdfpoj" username="pivasick"/>
                      </div>
                    </div>
              </div>
          </Card>
          <Card className="h-screen flex flex-col w-full">
              {chatData.userName!=='' ? (
                  <>
                      <CardHeader className="border-b-2">
                          <div className="flex justify-between items-center ">
                              <ChatDialog icon="default" username="zalupa" birthday={Date.now()} description="sjkdfnklsdfl"/>
                              <div className="flex flex-col justify-center items-center">
                                  <div>{chatData.userName}</div>
                                  {chatData.isActive
                                      ?(<div className="text-green-400">Online</div>)
                                      :(<div className="text-red-400">Offline</div>)
                                  }
                              </div>
                              <ModeToggle/>
                          </div>
                      </CardHeader>
                      <CardContent className="bg-blue-300 h-full">
                          <div></div>
                      </CardContent>
                      <div className="h-32 border-t-2 flex items-center ">
                          <Smile size={50} className="cursor-pointer ml-5 mr-5"/>
                          <Input/>
                          <Button size="icon" className="border-2 flex items-center rounded-2xl mr-5 ml-5 cursor-pointer">
                              <ChevronRight size={50} />
                          </Button>
                          <Button size="icon" className="border-2  flex items-center rounded-2xl mr-5 ml-5 cursor-pointer">
                              <Paperclip size={50} />
                          </Button>
                      </div>
                  </>
              ):(
                  <div className="h-full w-full flex justify-center items-center bg-blue-300">
                      <Card className="flex items-center justify-center w-2/4 h-32 rounded-full opacity-50"> Выбери пользователя, чтобы написать</Card>
                  </div>

              )}

          </Card>
      </div>
  );
}
