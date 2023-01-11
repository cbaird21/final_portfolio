import Card from 'react-bootstrap/Card';

export default function Work() {
    return (
        <Card>
            <Card.Body>
                <h2>Work</h2>
                <div id="mostRecent">
                    <h3>Hangman Application</h3>
                    <a
                        href="https://crimekermitterhangman.herokuapp.com/"
                        target="no_blank"
                    ></a>
                </div>
                <div>
                    <h3>National Park Finder with directions</h3>
                    <a
                        href="https://heyitsbradley.github.io/National-Park-Finder-with-Directions/"
                        target="no_blank"
                    ></a>
                </div>
                <div>
                    <h3>Horesion</h3>
                    <a
                        href="https://cbaird21.github.io/module1challenge1/"
                        target="no_blank"
                    ></a>
                </div>
            </Card.Body>
        </Card>
    );
}