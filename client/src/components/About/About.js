import image from "../../images/about.jpg";
// Import React Router Link component for internal hyperlinks
import { Link } from 'react-router-dom';

export default function About() {
    return (
        <div className="container-fluid">
            <Link className="text-dark" to="/About">
                <img className="col-lg-2 mt-5 image" src={image} alt="image"></img>
                <h2>About Me</h2>
                <p>
                    I've worked in restaurant management for twelve years now. I'm taking
                    a step towards a career change in hopes of achieving a higher quality
                    of life. I'm excited to start my coding journey!
                </p>
                <p>
                    I recently learned and am continuing learning about the M.E.R.N stack as my primary focus. I've also become aquanted to JavaScript, CSS, HTML, MySql and more. I'm looking forward to connecting with you!
                </p>
            </Link >
        </div>
    );
}