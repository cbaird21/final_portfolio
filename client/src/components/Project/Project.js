import park from "../../images/park.png";
import frogger from "../../images/hangman.png";
import horseion from "../../images/horieson.gif";
// Import React Router Link component for internal hyperlinks
import { Link } from 'react-router-dom';

export default function Project() {
    return (
        <Link to="/Project" >
            <section id="work" className="section">
                <h2>Work</h2>
                <div className="card-box">
                    <div id="mostRecent">
                        <h3>Hangman Application</h3>
                        <a
                            href="https://crimekermitterhangman.herokuapp.com/"
                            target="no_blank"
                        >
                            <a
                                href="https://crimekermitterhangman.herokuapp.com/"
                                target="no_blank"
                            >
                                <img
                                    src={frogger}
                                    alt="load out of website deployed"
                                /></a></a>
                        <div className="card">
                            <h3>National Park Finder with directions</h3>
                            <a
                                href="https://heyitsbradley.github.io/National-Park-Finder-with-Directions/"
                                target="no_blank"
                            >
                                <img
                                    src={park}
                                    alt="load out of website deployed"
                                /></a>
                        </div>
                        <div className="card">
                            <h3>Horseion</h3>
                            <a
                                href="https://cbaird21.github.io/module1challenge1/"
                                target="no_blank"
                            ><img
                                    src={horseion}
                                    alt="load out of website deployed"
                                /></a>
                        </div>
                    </div>
                </div>
            </section>
        </Link >
    );
}