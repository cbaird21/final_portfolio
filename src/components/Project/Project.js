import park from "../../../src/images/park.png";
import frogger from "../../../src/images/hangman.png";
import tracker from "../../../src/images/tracker.png";
import team from "../../../src/images/team.png"
import readMe from "../../../src/images/readMe.png"
import noteTaker from "../../../src/images/noteTaker.png"
import frogr from "../../../src/images/frogr.png"
// Import React Router Link component for internal hyperlinks
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export default function Project() {
    return (
        <Link to="/Project" >
            <section id="work" className="section">
                <h2>Work</h2>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={frogr}
                        alt="load out of website deployed" />
                    <Card.Body>
                        <Card.Title>Frogr</Card.Title>
                        <Card.Text>
                            This is a project I worked on with others to create a social media application.
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>Tech Used: </ListGroup.Item>
                        <ListGroup.Item>I worked on the front end for this project using React and React bootstrap with custom Sass a collegue created.</ListGroup.Item>
                        <ListGroup.Item>Contributers:</ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                        <Card.Link href="https://frogr-app.herokuapp.com/">Site</Card.Link>
                        <Card.Link href="https://github.com/cbaird21/frogr">Github</Card.Link>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={frogger}
                        alt="load out of website deployed" />
                    <Card.Body>
                        <Card.Title>Hangman Game Application</Card.Title>
                        <Card.Text>
                            This is a project I worked on with others to recreate our childhood game of Hangman. See if you can win in the Wild West!
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>Tech Used: </ListGroup.Item>
                        <ListGroup.Item>I worked on the front end for this project and also worked as the scrum master utilizing the kanban board.</ListGroup.Item>
                        <ListGroup.Item>Contributers:</ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                        <Card.Link href="https://crimekermitterhangman.herokuapp.com/">Site</Card.Link>
                        <Card.Link href="https://github.com/cbaird21/Hangman_app">Github</Card.Link>
                    </Card.Body>
                </Card>

                <div className="card text-decoration-none">
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
                <div className="card text-decoration-none">
                    <h3> Readme Generator </h3>
                    <a
                        href="https://drive.google.com/file/d/1kmY9v3tVTNeo5AJn9NFcYaTgATlaDoSU/view"
                        target="no_blank"
                    ><img className="col-lg-2 mt-5 readMe"
                        src={readMe}
                        alt="load out of readme.md file"
                        /></a>
                </div>
                <div className="card text-decoration-none">
                    <h3> Note Taker </h3>
                    <a
                        href="https://nottaker1.herokuapp.com/"
                        target="no_blank"
                    ><img className="col-lg-2 mt-5 noteTaker"
                        src={noteTaker}
                        alt="load out note taker page"
                        /></a>
                </div>
                <div className="card text-decoration-none">
                    <h3> Employee Tracker </h3>
                    <a
                        href="https://drive.google.com/file/d/1t4_gT6CboGx2IoG3NbFRhKzFjLYnywgl/view"
                        target="no_blank"
                    ><img className="col-lg-2 mt-5 tracker"
                        src={tracker}
                        alt="image of walk through"
                        /></a>
                </div>
                <div className="card text-decoration-none">
                    <h3>Team Profile Generator</h3>
                    <a
                        href="https://drive.google.com/file/d/1zqZZ6eW8WMP5yK_DuzPplQCe54emQCp3/view"
                        target="no_blank"
                    ><img className="col-lg-2 mt-5 team"
                        src={team}
                        alt="load out of website deployed"
                        /></a>
                </div>
            </section >
        </Link >
    );
}