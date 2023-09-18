"use client";

import {Button} from "@mui/material";
import axios from "axios";

type CardProps = {
  name: string;
  id: number;
  price: number;
};

export const BuyBtn = ({name, id, price}: CardProps) => {
  const sendData = async () => {
    const msg = `<b>Замовлення із сайту</b>\n<b>Товар: ${name} Код товара: ${id}</b>\n<b>Ціна: ${price} coins</b>`;

    const res = await fetch("/api/tg", {
      method: "POST",
      mode: "no-cors",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(msg),
    });
  };

  return (
    <Button
      size="medium"
      style={{backgroundColor: "#4184ff", color: "#fff"}}
      onClick={sendData}
    >
      Buy
    </Button>
  );
};
