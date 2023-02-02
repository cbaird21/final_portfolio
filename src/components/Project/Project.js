import park from "../../../src/images/park.png";
import frogger from "../../../src/images/hangman.png";
import tracker from "../../../src/images/tracker.png";
import team from "../../../src/images/team.png"
import readMe from "../../../src/images/readMe.png"
import noteTaker from "../../../src/images/noteTaker.png"
import frogr from "../../../src/images/frogr.png"
// importing neccessary bootstrap for card layout 
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { CardGroup, Container } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function Project() {
    return (
        <Container className='d-flex w-100 col justify-content-center'>
            <Row xs={1} md={2} className="g-4">
                <CardGroup className='d-flex row w-100 flex-wrap p-5 ms-auto'>
                    <h2>Work</h2>
                    <Col xs={12} md={8} lg={4} >
                        <Card className='d-flex m-2' style={{ width: "18rem" }}>
                            <Card.Img variant="top" src={frogr}
                                alt="load out of website deployed" className="p-2" />
                            <Card.Body>
                                <Card.Title className="p-2">Frogr</Card.Title>
                                <Card.Text className="p-2">
                                    This is a project I worked on with others to create a social media application.
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>Tech Used: React, GraphQL, Express.js, Node.js, MongoDB</ListGroup.Item>
                                <ListGroup.Item>I worked on the front end for this project using React and React bootstrap with custom Sass a collegue created.</ListGroup.Item>
                                <ListGroup.Item>Contributers: Jennifer Marshall, Andrew Laborde, Garrett Anderson, Michel Getz</ListGroup.Item>
                            </ListGroup>
                            <Card.Body>
                                <Card.Link href="https://frogr-app.herokuapp.com/" target="_blank">Site</Card.Link>
                                <Card.Link href="https://github.com/cbaird21/frogr" target="_blank">Github</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={8} lg={4} >
                        <Card style={{ width: '18rem', margin: '2%' }}>
                            <Card.Img variant="top" src={frogger}
                                alt="load out of website deployed" />
                            <Card.Body>
                                <Card.Title>Hangman Game Application</Card.Title>
                                <Card.Text>
                                    This is a project I worked on with others to recreate our childhood game of Hangman. See if you can win in the Wild West!
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>Tech Used: JavaScript, Handlebars, HTMl, CSS </ListGroup.Item>
                                <ListGroup.Item>I worked on the front end for this project with main focus on Handlebars and also worked as the scrum master utilizing the kanban board.</ListGroup.Item>
                                <ListGroup.Item>Contributers: Jennifer Marshall, Garrett Anderson, Michel Getz</ListGroup.Item>
                            </ListGroup>
                            <Card.Body>
                                <Card.Link href="https://crimekermitterhangman.herokuapp.com/" target="_blank">Site</Card.Link>
                                <Card.Link href="https://github.com/cbaird21/Hangman_app" target="_blank">Github</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={8} lg={4} >
                        <Card style={{ width: '18rem', margin: '2%' }}>
                            <Card.Img variant="top" src={park}
                                alt="load out of website deployed" />
                            <Card.Body>
                                <Card.Title>National Park Finder</Card.Title>
                                <Card.Text>
                                    This is a project I worked on with others to chose a National Park of your choice then get directions using Waze Api.
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>Tech Used: HTML, CSS, JavaScript </ListGroup.Item>
                                <ListGroup.Item>This was a project that we went through together, it was my first project in the industry.</ListGroup.Item>
                                <ListGroup.Item>Contributers: Bradley Rodriguez, Daniel Woodward, Matthew Burkley</ListGroup.Item>
                            </ListGroup>
                            <Card.Body>
                                <Card.Link href="https://heyitsbradley.github.io/National-Park-Finder-with-Directions/" target="_blank">Site</Card.Link>
                                <Card.Link href="https://github.com/HeyItsBradley/National-Park-Finder-with-Directions" target="_blank">Github</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={8} lg={4} >
                        <Card style={{ width: '18rem', margin: '2%' }}>
                            <Card.Img variant="top" src={readMe}
                                alt="load out of website deployed" />
                            <Card.Body>
                                <Card.Title>ReadMe Generator</Card.Title>
                                <Card.Text>
                                    I created this readMe generator to have higher quality readMe files.
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>Tech Used: JavaScript, Node, Inquirer, </ListGroup.Item>
                                <ListGroup.Item>This was a solo project.</ListGroup.Item>
                            </ListGroup>
                            <Card.Body>
                                <Card.Link href="https://drive.google.com/file/d/1kmY9v3tVTNeo5AJn9NFcYaTgATlaDoSU/view" target="_blank">Walkthrough video</Card.Link>
                                <Card.Link href="https://github.com/cbaird21/ReadMeGenerator" target="_blank">Github</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={8} lg={4} >
                        <Card style={{ width: '18rem', margin: '2%' }}>
                            <Card.Img variant="top" src={noteTaker}
                                alt="load out of website deployed" />
                            <Card.Body>
                                <Card.Title>Note Taker</Card.Title>
                                <Card.Text>
                                    I created this note taker application to be able to create a todo list that I can add, edit and delete from.
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>Tech Used: Express, Node, Javascript </ListGroup.Item>
                                <ListGroup.Item>This was a solo project.</ListGroup.Item>
                            </ListGroup>
                            <Card.Body>
                                <Card.Link href="https://nottaker1.herokuapp.com/" target="_blank">Site</Card.Link>
                                <Card.Link href="https://github.com/cbaird21/Note_Taker" target="_blank">Github</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={8} lg={4} >
                        <Card style={{ width: '18rem', margin: '2%' }}>
                            <Card.Img variant="top" src={tracker}
                                alt="load out of website deployed" />
                            <Card.Body>
                                <Card.Title>Employee Tracker</Card.Title>
                                <Card.Text>
                                    I created this to be able to create a page with contact information, job title and group employees together for better tracking.
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>Tech Used: dotenv, Inquirer, mysql2, sequelize, JavaScript</ListGroup.Item>
                                <ListGroup.Item>This was a solo project.</ListGroup.Item>
                            </ListGroup>
                            <Card.Body>
                                <Card.Link href="https://drive.google.com/file/d/1t4_gT6CboGx2IoG3NbFRhKzFjLYnywgl/view" target="_blank">Walkthrough</Card.Link>
                                <Card.Link href="https://github.com/cbaird21/Employee_Tracker" target="_blank">Github</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={8} lg={4} >
                        <Card style={{ width: '18rem', margin: '2%' }}>
                            <Card.Img variant="top" src={team}
                                alt="load out of website deployed" />
                            <Card.Body>
                                <Card.Title>Team Profile Generator</Card.Title>
                                <Card.Text>
                                    I created this to be able to create a page with contact information, job title and group employees together for better tracking.
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>Tech Used: Jest, Inquirer</ListGroup.Item>
                                <ListGroup.Item>This was a solo project.</ListGroup.Item>
                            </ListGroup>
                            <Card.Body>
                                <Card.Link href="https://drive.google.com/file/d/1zqZZ6eW8WMP5yK_DuzPplQCe54emQCp3/view" target="_blank">Walkthrough</Card.Link>
                                <Card.Link href="https://github.com/cbaird21/Team_Profile_Generator" target="_blank">Github</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </CardGroup >
            </Row>
        </Container >
    );
}