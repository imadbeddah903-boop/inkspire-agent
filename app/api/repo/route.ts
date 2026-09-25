import {NextResponse} from "next/server";
import {getRepoSummary} from "@/lib/github";
export async function GET(){return NextResponse.json(await getRepoSummary());}