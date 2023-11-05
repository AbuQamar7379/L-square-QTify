import searchIcon from '../../assets/searchIcon.png';

const Search = () => {
    return(
        <div className='searchField'>
        <input type="search" placeholder='Search a album of your choice' />
        <div><img src={searchIcon} alt='Search Icon' /></div>
        </div>
    )
};

export default Search;