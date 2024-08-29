function selection() {
    return (
      <>
          <h1>じゃんけん</h1>
          <p>下の手の形から、好きなものを選んでね。選ぶと、選んだ手で勝負できるよ。</p>
          <ul>
            <li className="result"><img src="../images/rock.png" alt="グー" /></li>
            <li className="result">
              <img src="../images/scissors.png" alt="チョキ" />
            </li>
            <li className="result"><img src="../images/paper.png" alt="パー" /></li>
          </ul>
      </>
    );
  }
  
  export default selection;
  