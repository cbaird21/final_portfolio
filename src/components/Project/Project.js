import park from "../../../src/images/park.png";
import frogger from "../../../src/images/hangman.png";
import tracker from "../../../src/images/tracker.png";
import team from "../../../src/images/team.png"
import readMe from "../../../src/images/readMe.png"
import noteTaker from "../../../src/images/noteTaker.png"
import frogr from "../../../src/images/frogr.png"
// Import React Router Link component for internal hyperlinks
import { Link } from 'react-router-dom';

export default function Project() {
    return (
        <Link to="/Project" >
            <section id="work" className="section text-decoration-none">
                <h2>Work</h2>
                <div className="card-box">
                    <div id="mostRecent">
                        <div className="card">
                            <h3>Frogr</h3>
                            <a
                                href="https://frogr-app.herokuapp.com/"
                                target="no_blank"
                            >
                                <img className="col-lg-2 mt-5 park"
                                    src={frogr}
                                    alt="load out of website deployed"
                                /></a>
                        </div>
                        <h3>Hangman Application</h3>
                        <a
                            href="https://crimekermitterhangman.herokuapp.com/"
                            target="no_blank"
                        >
                            <img className="col-lg-2 mt-5 frogger"
                                src={frogger}
                                alt="load out of website deployed"
                            /></a>
                        <div className="card">
                            <h3>National Park Finder with directions</h3>
                            <a
                                href="https://heyitsbradley.github.io/National-Park-Finder-with-Directions/"
                                target="no_blank"
                            >
                                <img className="col-lg-2 mt-5 park"
                                    src={park}
                                    alt="load out of website deployed"
                                /></a>
                        </div>
                        <div className="card">
                            <h3> Readme Generator </h3>
                            <a
                                href="https://drive.google.com/file/d/1kmY9v3tVTNeo5AJn9NFcYaTgATlaDoSU/view"
                                target="no_blank"
                            ><img className="col-lg-2 mt-5 readMe"
                                src={readMe}
                                alt="load out of readme.md file"
                                /></a>
                        </div>
                        <div className="card">
                            <h3> Note Taker </h3>
                            <a
                                href="https://nottaker1.herokuapp.com/"
                                target="no_blank"
                            ><img className="col-lg-2 mt-5 noteTaker"
                                src={noteTaker}
                                alt="load out note taker page"
                                /></a>
                        </div>
                        <div className="card">
                            <h3> Employee Tracker </h3>
                            <a
                                href="https://drive.google.com/file/d/1t4_gT6CboGx2IoG3NbFRhKzFjLYnywgl/view"
                                target="no_blank"
                            ><img className="col-lg-2 mt-5 tracker"
                                src={tracker}
                                alt="image of walk through"
                                /></a>
                        </div>
                        <div className="card">
                            <h3>Team Profile Generator</h3>
                            <a
                                href="https://drive.google.com/file/d/1zqZZ6eW8WMP5yK_DuzPplQCe54emQCp3/view"
                                target="no_blank"
                            ><img className="col-lg-2 mt-5 team"
                                src={team}
                                alt="load out of website deployed"
                                /></a>
                        </div>
                    </div>
                </div>
            </section>
        </Link >
    );
}