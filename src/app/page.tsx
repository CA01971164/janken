import Link from "next/link";
import "./globals.css";

export default function Home() {
  return (
    <>
      <h1>★ジャンケンゲーム★</h1>

      <Link href="/explanation">
        <button>start</button>
      </Link>
    </>
  );
}
