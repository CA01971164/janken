"use client";
import Link from "next/link";
import "./globals.css";

export default function Home() {
  const handleKeydown = document.addEventListener("keydown", (event: any) => {
    window.location.href = "/explanation";
  });
  return (
    <>
      <h1 className="text-5xl">★ジャンケンゲーム★</h1>

      <Link href="/explanation" onKeyDown={handleKeydown}>
        <button className="btn">start</button>
      </Link>
    </>
  );
}
