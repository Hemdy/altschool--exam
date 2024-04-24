// eslint-disable-next-line react/prop-types
const SearchBar = ({inputValue, setInputValue}) => {
    return (
        <div className="search-bar">
            <input
            type="search"
            className="search-input"
            placeholder="Search for a repository"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
             />
        </div>
    )
}
export default SearchBar