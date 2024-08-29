import Link from "next/link";
function Explanation() {
  return (
    <>
      <h1>ジャンケンゲームのルール</h1>
      <p>
        このゲームは、コンピュータとじゃんけんができるゲームだよ。
        <br />
        ルールは、とても簡単。
        <br />
        グーがチョキに勝ち、チョキがパーに勝ち、パーがグーに勝つよ。
        <br />
        そして、同じ手の形を出すと、あいこになるよ。
        <br />
        説明を聞いたらやってみよう。
      </p>
      <Link href="selection">
        {" "}
        <button>決定</button>
      </Link>
    </>
  );
}

export default Explanation;
