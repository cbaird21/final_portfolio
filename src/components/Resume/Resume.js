import Resume from "client/src/images/Chandler.pdf"
import { Link } from 'react-router-dom';

export default function Resume() {
    return (
        <div className="container-fluid">
            <Link className="text-dark" to="/Resume">
                <h2> Resume </h2>
                <img className="col-lg-2 mt-5 Resume"
                    src={Resume}
                    alt="Resume"
                />
            </Link >
        </div>
    );
}