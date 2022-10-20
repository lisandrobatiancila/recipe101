import { Link } from "react-router-dom"

function Navigation() {
    return (
        <nav className="nav nav_dark">
            <ul className="nav_item">
                <li style={{float: "left"}}>
                    <Link to="/" className="text_capitalize">recipes</Link>
                </li>
            </ul>
            <ul className="float_end">
                <li>
                    <input type={"search"} placeholder="Search recipe..." />
                    <button className="text_capitalize">
                        search
                    </button>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation