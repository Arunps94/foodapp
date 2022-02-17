import "./App.css";
import {  Link } from "react-router-dom";

function Home() {
  return (
    <>
      <center>
        <div id="home">
          <h1 id="homefont">Welcome to Food's Kitchen</h1>
        </div>
        <div className="mt-5">
          <Link to="/menu" id="homebtn"  >GO TO MENU</Link>
        </div>
      </center>
    </>
  );
}

export default Home;
