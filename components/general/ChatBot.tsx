"use client";

import { useState, FormEvent, useRef, useEffect } from "react";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardHeader } from "../../components/ui/card";
import { ScrollArea } from "../../components/ui/scroll-area";
import { Send, X } from "lucide-react";
import Image from "next/image";
import lightLogo from "../../public/light-webnote.svg";
import bubble from "../../public/icons/bubble.svg";

interface Message {
  sender: "user" | "bot";
  text: string;
}

export default function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "bot",
      text: "გამარჯობა! 👋 როგორ შემიძლია დაგეხმაროთ დღეს? ზუსტი და გამართული პასუხისთვის გთხოვთ შეკითხვა შეიყვანოთ ქართულად.",
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Scroll ref გამოიყენება ავტომატური სკროლისთვის
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll-ი ყოველთვის ბოლო მესიჯზე
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  // დახურვა, როცა გარეთ კლიკს ახდენს
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [containerRef]);

  const sendMessage = async (e: FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const newMessage: Message = { sender: "user", text: inputMessage };
    setMessages((prev) => [...prev, newMessage]);
    setInputMessage("");
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("msg", inputMessage);

      const response = await fetch("/api/get", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      setMessages((prev) => [...prev, { sender: "bot", text: data.text }]);
    } catch (err) {
      setMessages((prev) => [...prev, { sender: "bot", text: "Sorry, something went wrong." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div ref={containerRef} className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-2">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-2 transform transition-all duration-300 scale-100">
          <Card className="flex max-md:w-f max-sm:z-10 max-md:fixed max-md:top-0 max-md:left-0 max-md: flex-col h-[500px] rounded-[24px] overflow-hidden w-[380px]">
            {/* Header */}
            <CardHeader className="bg-primary-900 text-white flex justify-between p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Image className="w-[35px] h-[35px]" src={lightLogo} alt="webnote chatbot" />
                  <h2 className="text-lg font-manrope font-[500]">AI Webnotes</h2>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="hover:bg-white/20 text-white rounded-full p-1 transition"
                >
                  <X size={22} />
                </button>
              </div>
            </CardHeader>

            {/* Messages */}
            <CardContent className="flex-1 p-4 overflow-hidden bg-primary-50">
              <div ref={scrollRef} className="h-full overflow-y-auto flex flex-col space-y-4">
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex ${msg.sender === "user" ? "justify-end " : "justify-start"}`}
                  >
                    <div
                      className={`px-4 py-2 rounded-2xl max-w-[75%] text-[15px] ${
                        msg.sender === "user"
                          ? "bg-primary-500 text-white rounded-br-none"
                          : "bg-white text-primary-900 rounded-bl-none border border-gray-200"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
                {loading && (
                  <div className="flex items-center gap-1">
                    <span className="text-gray-500 text-sm ml-2 ">შეტყობინება იგზავნება... ✍️</span>
                  </div>
                )}
              </div>
            </CardContent>

            {/* Input */}
            <form onSubmit={sendMessage} className="flex gap-2 p-4 bg-white">
              <Input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="შეიყვანეთ კითხვა აქ..."
                className="flex-1 text-sm focus:ring-1 focus:ring-blue-400"
              />
              <Button
                type="submit"
                className="bg-primary-500 upper-case text-white text-sm h-auto py-3 px-5 flex items-center gap-2"
              >
                გაგზავნა <Send size={18} />
              </Button>
            </form>
          </Card>
        </div>
      )}

      {/* Chat Toggle Button - ყოველთვის ქვემოთ */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="bg-yellow-400 hover:bg-yellow-300 text-primary-900 p-4 rounded-full flex text-base items-center justify-center transform transition-all duration-300 hover:scale-105"
      >
        <Image
          className="w-[30px] max-md:w-[25px] max-md:h-[25px] opacity-80 h-[30px]"
          src={bubble}
          alt="bubble icon"
        />
      </button>
    </div>
  );
}
