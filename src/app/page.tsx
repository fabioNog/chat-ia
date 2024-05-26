import { Card, CardDescription, CardHeader, CardTitle,CardContent, CardFooter } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex items-center justify-center">
      <Card className="w-[400px] h-[700px]">
        <CardHeader>
          <CardTitle>My Chat English</CardTitle>
          <CardDescription>Using Vercel SDK to Create a chat bot</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Mensagens</p>
        </CardContent>
        <CardFooter>
          form
        </CardFooter>
      </Card>
    </div>
  );
}
