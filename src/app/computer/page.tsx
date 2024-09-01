import Link from "next/link";
function computer() {
  return (
    <>
      <h1 id="result"></h1>
      <p id="computer_image"></p>
      {/* h1では、あなたが勝ったかか負けたかを伝える。 */}
      <Link href="/explanation">
        <button>もう一回</button>
      </Link>
    </>
  );
}

export default computer;
