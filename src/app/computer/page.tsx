"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function Computer() {
  const [userChoice, setUserChoice] = useState<string | null>(null);
  const [num, setNum] = useState<number | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const jank: string[] = ["/rock.png", "/scissors.png", "/paper.png"];
  const [sendImage, setSendImage] = useState<string | null>(null);

  useEffect(() => {
    const num = Math.floor(Math.random() * 3);
    setNum(num);
  }, [userChoice]);

  useEffect(() => {
    if (num !== null) {
      setSendImage(jank[num]);
    }
  }, [num]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const choice = params.get("choice");
    setUserChoice(choice);
  }, []);

  useEffect(() => {
    if (userChoice && num !== null) {
      determinResult();
    }
  }, [userChoice, num]);

  const determinResult = () => {
    if (!userChoice || num === null) return;
    let message = "";
    const winner = () => "勝ったよ";
    const loser = () => "負けたよ";
    const hikiwake = () => "引き分け";

    if (userChoice === "rock") {
      if (num === 0) {
        message = hikiwake();
      } else if (num === 1) {
        message = winner();
      } else {
        message = loser();
      }
    } else if (userChoice === "scissors") {
      if (num === 0) {
        message = loser();
      } else if (num === 1) {
        message = hikiwake();
      } else {
        message = winner();
      }
    } else if (userChoice === "paper") {
      if (num === 0) {
        message = winner();
      } else if (num === 1) {
        message = loser();
      } else {
        message = hikiwake();
      }
    } else {
      console.log("すみません！エラーが発生しました。");
    }

    setMessage(message);
  };

  const DisplayImage: React.FC<{ src: string }> = ({ src }) => {
    return <Image src={src} alt="computerChoice" width={300} height={300} />;
  };

  const Result: React.FC = () => {
    return <div className="my-32 text-5xl">{message}</div>;
  };

  return (
    <>
      {/* 結果を表示する */}
      <Result />
      {/* 画像の表示の関数を作る */}
      {sendImage && <DisplayImage src={sendImage} />}
      {/* h1では、あなたが勝ったか負けたかを伝える。 */}
      <Link href="/explanation">
        <button>もう一回</button>
      </Link>
    </>
  );
}

export default Computer;
