import React from 'react';

const businessShowSearch = () => {
    return (
        <div className="business-search-container">
            <form method="get" className="business-show-search">
                <div className="business-show-search-left">
                    <label htmlFor="" className="searchbar-left-label">
                        <div className="searchbar-left-inside">
                            <span className="find-searchbar-left">Find</span>
                            <span className="input-searchbar-left">
                                <input type="text"
                                    placeholder="ac repair, burgers, bars, spas..."
                                    className="business-search" />
                            </span>
                        </div>
                    </label>
                </div>
                <div className="business-show-search-right">
                    <label htmlFor="" className="searchbar-right-label">
                        <div className="searchbar-right-inside">
                            <span className="near-searchbar-right">Near</span>
                            <span className="input-searchbar-right">
                                <input type="text"
                                    placeholder="Manhattan, NY"
                                    className="location-search" />
                            </span>
                        </div>
                    </label>
                </div>
                <div className="business-show-search-button">
                    <button type="submit" className="search-button-business-show">
                        <div className="business-show-search-image"></div>
                    </button>
                </div>
            </form>
        </div>
    );
}

export default businessShowSearch;