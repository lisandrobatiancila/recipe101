import { Link } from "react-router-dom"

function Navigation({ keywords, setKeywords, goSearch, setIsLoading }) {

    return (
        <nav className="nav nav_dark">
            <ul className="nav_item">
                <li style={{float: "left"}}>
                    <Link to="/" className="icon">
                        <i className="fa fa-bars"></i>
                    </Link>
                </li>
                <li style={{float: "left"}}>
                    <Link to="/" className="text_capitalize">recipes</Link>
                </li>
                <li style={{float: "left"}}>
                    <Link to="/favorites" className="text_capitalize">favorites</Link>
                </li>
                
            </ul>
            <ul className="float_end">
                <li>
                    <input type={"search"} placeholder="Search recipe..."
                        value = { keywords }
                        onChange={ (e) => {
                            setKeywords(e.target.value)
                            setIsLoading(true)
                        } } />

                    <button className="text_capitalize"
                        onClick={ goSearch }>
                        search
                    </button>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation