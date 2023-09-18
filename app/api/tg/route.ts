import {NextResponse} from "next/server";
import axios from "axios";

const tg = axios.create({
  timeout: 3000,
});

export async function POST(req: Request) {
  const {TG_URL, TOKEN_TG, METHOD, CHAT_ID} = process.env;
  const BASE_URL = `${TG_URL}/bot${TOKEN_TG}/${METHOD}`;

  const msg = await req.json();

  const res = await tg.post(BASE_URL, {
    parse_mode: "html",
    chat_id: CHAT_ID,
    text: msg,
  });

  return NextResponse.json({
    status: 200,
  });
}
