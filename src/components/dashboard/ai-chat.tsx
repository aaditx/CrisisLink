"use client";

import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, Bot, User, ShieldAlert } from "lucide-react";
import { useChat } from "@ai-sdk/react";

export function AIChat() {
    const { messages, input, handleInputChange, handleSubmit } = useChat();

    return (
        <Card className="flex flex-col h-[500px] border-border/40 shadow-xl shadow-black/20 bg-card/50 backdrop-blur-xl">
            <CardHeader className="border-b border-border/20 py-4">
                <CardTitle className="flex items-center gap-2 text-lg">
                    <Bot className="w-5 h-5 text-primary" /> Logistics Intelligence
                </CardTitle>
            </CardHeader>

            <CardContent className="flex-1 p-4 overflow-hidden relative">
                <ScrollArea className="h-full pr-4">
                    <div className="flex flex-col gap-4 pb-4">
                        {messages.length === 0 && (
                            <div className="flex flex-col items-center justify-center text-center text-muted-foreground mt-10 h-full opacity-60">
                                <ShieldAlert className="w-12 h-12 mb-4" />
                                <p>Describe a crisis scenario to receive an automated logistical breakdown.</p>
                                <p className="text-xs mt-2 font-mono">Example: "We need 500 blankets in Sector 3"</p>
                            </div>
                        )}

                        {messages.map((m) => (
                            <div key={m.id} className={`flex gap-3 ${m.role === "user" ? "flex-row-reverse" : ""}`}>
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border ${m.role === "user" ? "bg-primary/20 border-primary text-primary" : "bg-muted border-border text-foreground"}`}>
                                    {m.role === "user" ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                                </div>
                                <div className={`rounded-xl p-3 text-sm max-w-[80%] shadow-md whitespace-pre-wrap leading-relaxed ${m.role === "user" ? "bg-primary text-primary-foreground rounded-tr-sm" : "bg-background border border-border/50 rounded-tl-sm"}`}>
                                    {m.content}
                                </div>
                            </div>
                        ))}
                    </div>
                </ScrollArea>
            </CardContent>

            <CardFooter className="p-4 border-t border-border/20 bg-background/20 backdrop-blur-md">
                <form onSubmit={handleSubmit} className="flex w-full gap-2 relative">
                    <Input
                        value={input}
                        onChange={handleInputChange}
                        placeholder="Type crisis scenario..."
                        className="flex-1 bg-background border-border/50 focus-visible:ring-primary h-12 pr-12"
                    />
                    <Button type="submit" size="icon" className="absolute right-1 top-1 h-10 w-10 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg shadow-sm">
                        <Send className="w-4 h-4" />
                    </Button>
                </form>
            </CardFooter>
        </Card>
    );
}
