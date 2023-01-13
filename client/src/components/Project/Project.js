import park from "client/public/live-deployed-page.png"
import frogger from "client/public/screencapture-crimekermitterhangman-herokuapp-2022-12-16-09_42_01.png"
import horseion from "client/public/02-advanced-css-homework-demo.gif"

export default function Project() {
    return (
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
    );
}