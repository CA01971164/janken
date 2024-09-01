import Link from "next/link";
import "./globals.css";

export default function Home() {
  return (
    <>
      <h1 className="text-5xl">★ジャンケンゲーム★</h1>

      <Link href="/explanation">
        <button className="btn ">start</button>
      </Link>
    </>
  );
}
