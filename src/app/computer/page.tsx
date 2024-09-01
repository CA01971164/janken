"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function computer() {
  // コンピュータが出した数字を画面に表示するコードである
  const [userChoice, setUserChoice] = useState<string | null>("");

  const jank: string[] = ["/rock.png", "/scissors.png", "/paper.png"];
  let num: number = Math.floor(Math.random() * 3);
  let selectionImage = jank[num];

  const DisplayImage: React.FC<{ src: string }> = ({ src }) => {
    return <Image src={src} alt="rock" width={50} height={50} />;
  };

  // クエリパラメタから、データを取得

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    let choice: string | null = params.get(`choice`);
    setUserChoice(choice);
  }, []);

  const Result: React.FC = () => {
    let message = "";
    //勝った時のセリフ
    const winner = () => "勝ったよ";
    const loser = () => "負けたよ";
    const hikiwake = () => "引き分け";

    if (userChoice === "rock") {
      if (num === 0) {
        message = hikiwake();
      } else if (num === 1) {
        message = winner();
      } else if (num == 2) {
        message = loser();
      } else {
        console.log("エラーである。");
      }
    } else if (userChoice === "scissors") {
      if (num === 0) {
        message = loser();
      } else if (num === 1) {
        message = hikiwake();
      } else if (num == 2) {
        message = winner();
      } else {
        console.log("エラーである。");
      }
    } else if (userChoice == "paper") {
      if (num === 0) {
        message = winner();
      } else if (num === 1) {
        message = loser();
      } else if (num == 2) {
        message = hikiwake();
      } else {
        console.log("エラーである。");
      }
    } else console.log("すみません！エラーが発生しました。");
    return <div>{message}</div>;
  };

  //じゃんけん結果発表

  return (
    <>
      {/* 結果を表示する */}

      <Result />
      {/* 画像の表示の関数を作る */}
      <DisplayImage src={selectionImage} />
      {/* h1では、あなたが勝ったかか負けたかを伝える。 */}
      <Link href="/explanation">
        <button>もう一回</button>
      </Link>
    </>
  );
}

export default computer;
