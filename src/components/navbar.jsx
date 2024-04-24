import SearchBar from "./searchBar"
import useFetch from "./useFetch"
import { Link } from 'react-router-dom'
// eslint-disable-next-line react/prop-types
const Navbar = ({inputValue, setInputValue}) => {
    const {data: user, isPending, error} = useFetch("https://api.github.com/users/Hemdy")
    return(
        <div className="intro">
            {error && ""}
            {isPending && "Loading Hemdinachi"}
            {user &&
            <div>
                <nav className="navbar">
                    <h3 className="nav-logo  nav-item">{user.login}</h3>
                    <SearchBar inputValue={inputValue} setInputValue={setInputValue}/>
                    <ul className="navbar-btn nav-item">
                        <Link className="link navbtn nav-link-1" to={"./"}>All Repositories</Link>
                        <Link className="link navbtn nav-link-2" to={"https://github.com/new"}>Create</Link>
                    </ul>
                </nav>
            </div>}
        </div>
    )
}
export default Navbar