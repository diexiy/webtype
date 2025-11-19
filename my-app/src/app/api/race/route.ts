import {NextResponse} from "next/server";

export async function GET() {
    const raceText = "test kan du stava eller inte? wow";

    return NextResponse.json({ text: raceText });

}

export async function POST(req: Request) {
    const body = await req.json();
    const { username, progress } = body;


console.log(`${username} typed ${progress} characters`);

return NextResponse.json({ success: true });
}