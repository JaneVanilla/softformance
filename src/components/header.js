import logo from "../images/softformance_logo.svg";

export default function Header() {
    return <header className="page-header">
                <a
                    className="logo"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={logo} className="" alt="logo" />
                </a>
            </header>
}