import {NextResponse} from "next/server";
import {createPullRequest} from "@/lib/github";
export async function POST(req:Request){const b=await req.json();if(!b?.branch||!b?.title)return NextResponse.json({error:"branch and title are required"},{status:400});const pr=await createPullRequest(String(b.branch),String(b.title),String(b.body||""));return NextResponse.json(pr);}