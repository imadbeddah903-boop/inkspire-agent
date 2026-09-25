import {NextResponse} from "next/server";
import {setApproval} from "@/lib/upstash";
export async function POST(req:Request){const body=await req.json();if(!body?.approvalId)return NextResponse.json({error:"approvalId is required"},{status:400});await setApproval(String(body.approvalId),Boolean(body.approved));return NextResponse.json({ok:true});}