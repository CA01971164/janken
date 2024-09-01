import Image from "next/image";
import Link from "next/link";

function selection() {
  return (
    <>
      <h1>じゃんけん</h1>
      <p>
        下の手の形から、好きなものを選んでね。選ぶと、選んだ手で勝負できるよ。
      </p>
      <Link href={{ pathname: "/computer", query: { choice: "rock" } }}>
        <Image src="/rock.png" alt="rock" width={50} height={50} />
      </Link>
      <Link href={{ pathname: "/computer", query: { choice: "scissors" } }}>
        <Image src="/scissors.png" alt="scissors" width={50} height={50} />
      </Link>
      <Link href={{ pathname: "/computer", query: { choice: "paper" } }}>
        <Image src="/paper.png" alt="paper" width={50} height={50} />
      </Link>
    </>
  );
}

export default selection;
