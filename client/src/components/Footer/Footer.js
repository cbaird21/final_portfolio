import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Footer() {
    return (
        <Navbar expand="lg" bg="dark" variant="dark" fixed="bottom">
            <Container>
                <Nav>
                    <Nav.Link href="https://github.com/cbaird21" target="blank">Github</Nav.Link>
                    <Nav.Link href="https://www.linkedin.com/in/chandler-baird-39965b129/" target="blank">Linked In</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};
//         <div className="container-fluid">
//             <div className="row">
//                 <footer className="align-items-center text-center text-white bg-dark col-lg-12 pt-2">
//                     <div className="container">
//                             <section className="mb-2">
//                                 <a
//                                     href="https://github.com/cbaird21"
//                                     role="button"
//                                     target="_blank"
//                                     rel="noreferrer"
//                                 >
//                                     <h3>GitHub</h3>
//                                 </a>
//                                 <a
//                                     href="https://www.linkedin.com/in/chandler-baird-39965b129/"
//                                     role="button"
//                                     rel="noreferrer"
//                                     target="_blank"
//                                 >
//                                     <h3>LinkedIn</h3>
//                                 </a>
//                                 <a
//                                     href="mailto: chandler.barid21@gmail.com"
//                                     rel="noreferrer"
//                                     role="button"
//                                     target="_blank"
//                                 >
//                                     <h3>Email</h3>
//                                 </a>
//                             </section>
//                     </div>
//                 </footer>
//             </div>
//         </div>
//     );
// }

