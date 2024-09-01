import Link from "next/link";
function Explanation() {
  return (
    <>
      <h1 className="text-6xl">ジャンケンゲームのルール</h1>
      <p className="text-2xl mt-16">読み飛ばし（推奨）</p>
      <p className="text-2xl mt-16">
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
        <button className="mb-24">決定</button>
      </Link>
    </>
  );
}

export default Explanation;
