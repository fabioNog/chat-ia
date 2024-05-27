"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Message {
  role: string;
  content: string;
}

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const newMessage: Message = {
      role: "user",
      content: inputText
    };

    // Add user message to messages
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setInputText("");

    try {
      const response = await fetch('http://localhost:3001/chatgpt/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ prompt: inputText })
      });

      const data = await response.json();
      console.log("Mensagem da API:", data);
      const botMessage: Message = {
        role: "bot",
        content: data.candidates[0].content.parts[0].text
      };

      // Add bot response to messages
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-50 items-center justify-center p-4">
      <Card className="w-[440px] h-[700px] grid grid-rows-[min-content_1fr_min-content] shadow-lg">
        <CardHeader>
          <CardTitle>My Chat English</CardTitle>
          <CardDescription>Using Vercel SDK to Create a chat bot</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 overflow-auto">
          {messages.map((message, index) => (
            <div key={index} className="flex gap-3 text-slate-600 text-sm">
              <Avatar>
                <AvatarFallback>{message.role === "user" ? "U" : "B"}</AvatarFallback>
                <AvatarImage src={message.role === "user" ? "https://github.com/fabioNog.png" : "https://fabionog.github.io/fabionogueira/static/media/fabionogueira-pc.1806dcda3d1feef28a3b.jpeg"} />
              </Avatar>
              <p className="leading-relaxed">
                <span className="block font-bold text-slate-700">{message.role === "user" ? "Humano" : "Bot"}</span>
                {message.content}
              </p>
            </div>
          ))}
        </CardContent>
        <CardFooter>
          <form onSubmit={handleSubmit} className="w-full flex gap-3">
            <Input 
              placeholder="How Can I help you?" 
              id="messageInput" 
              className="flex-1 h-12" 
              value={inputText} 
              onChange={(e) => setInputText(e.target.value)} 
            />
            <Button type="submit">Send</Button>
          </form>
        </CardFooter>
      </Card>
    </div>
  );
}
