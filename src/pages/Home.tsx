import { Link } from "react-router";

function Home() {
    return (
        <div className="home">
            <div>
                <h1 className="title">Saul MMBP</h1>
                <p className="headline">Human</p>
            </div>
            <Link className="start-btn" to="aboutme">
                Click here
            </Link>
        </div>
    );
}

export default Home;
