import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-slate-50 items-center justify-center">
      <Card className="w-[440px] h-[700px] grid grid-rows-[min-content_1fr_min-content]">
        <CardHeader>
          <CardTitle>My Chat English</CardTitle>
          <CardDescription>Using Vercel SDK to Create a chat bot</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-3 text-slate-600 text-sm">
            <Avatar>
              <AvatarFallback>FB</AvatarFallback>
              <AvatarImage src="https://github.com/fabioNog.png"/>
            </Avatar>
            <p className="leading-relaxed">
              <span className="block font-bold text-slate-700">Humano</span>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, &excl;
            </p>

          </div>

          <div className="flex gap-3 text-slate-600 text-sm">
            <Avatar>
              <AvatarFallback>FB</AvatarFallback>
              <AvatarImage src="https://fabionog.github.io/fabionogueira/static/media/fabionogueira-pc.1806dcda3d1feef28a3b.jpeg"/>
            </Avatar>
            <p className="leading-relaxed">
              <span className="block font-bold text-slate-700">Humano</span>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, &excl;
            </p>

          </div>
        </CardContent>
        <CardFooter className="space-x-2">
         <Input placeholder="How Can I help you?" className="flex-1"/>
         <Button type="submit">Send</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
