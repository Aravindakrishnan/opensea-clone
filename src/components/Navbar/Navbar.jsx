import "./Navbar.css";

export default function Navbar() {

    const dropdown_items = [
        {
            name : "All NFTs",
            url : "https://opensea.io/static/images/icons/allnfts-dark.svg"
        },
        {
            name : "Art",
            url : "https://opensea.io/static/images/icons/art-dark.svg"
        },
        {
            name : "Collectibles",
            url : "https://opensea.io/static/images/icons/collectibles-dark.svg"
        },
        {
            name : "Domain Names",
            url : "https://opensea.io/static/images/icons/domain-names-dark.svg"
        },
        {
            name : "Music",
            url : "https://opensea.io/static/images/icons/music-dark.svg"
        },
        {
            name : "Photography",
            url : "https://opensea.io/static/images/icons/photography-category-dark.svg"
        },
        {
            name : "Sports",
            url : "https://opensea.io/static/images/icons/sports-dark.svg"
        },
        {
            name : "Trading Cards",
            url : "https://opensea.io/static/images/icons/trading-cards-dark.svg"
        },
        {
            name : "Utility",
            url : "https://opensea.io/static/images/icons/utility-dark.svg"
        },
        {
            name : "Virtual Worlds",
            url : "https://opensea.io/static/images/icons/virtual-worlds-dark.svg"
        }
    ]

    return(
        <nav className="navbar">
            <div className="navbar__top">
                <img className="navbar__logo" src="https://opensea.io/static/images/logos/opensea.svg" alt="opensea_logo" />
                <h2 className="navbar__title">OpenSea</h2>
            </div>
            <div className="navbar__search">
                <ion-icon className="search__icon" name="search-outline"></ion-icon>
                <input type="text" className="navbar__input" placeholder="Search items, collections, and accounts" />
            </div>
            <div className="navbar__nav">
                <li className="nav__item">
                    <a href="#" className="nav__link">Explore</a>
                    <div className="nav__dropdown">
                        {
                            dropdown_items.map(dropdown_item=>{
                                return (<div key={dropdown_item.url} className="nav__ditem"> <img className="nav__dlogo" src={dropdown_item.url} alt="" /> {dropdown_item.name}</div>)
                            })
                        }
                    </div>
                </li>
                <li className="nav__item"><a href="#" className="nav__link">Stats</a></li>
                <li className="nav__item"><a href="#" className="nav__link">Resources</a></li>
                <li className="nav__item"><a href="#" className="nav__link">Create</a></li>
                <li className="nav__item"><a href="#" className="nav__link"><ion-icon className="icon" name="person-outline"></ion-icon></a></li>
                <li className="nav__item"><a href="#" className="nav__link"><ion-icon className="icon" name="wallet-outline"></ion-icon></a></li>
            </div>

        </nav>
    )
}