import { Link } from "react-router-dom";

export default function home() {
    return (
        <main >
            <Link to="/">
                <div className="flex-row justify-center text-decoration-none">
                    <div
                        className="col-12 col-md-10 mb-3 p-3"
                        style={{ border: '1px dotted #1a1a1a' }}
                    >
                        <p>
                            Hello, welcome to my portfolio! If you have any questions about what you see, please ask!
                        </p>
                    </div>
                </div>
            </Link>
        </main>
    );
};