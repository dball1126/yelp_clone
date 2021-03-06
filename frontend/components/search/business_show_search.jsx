import React from 'react';
import BusinessMap from '../business_show/business_map';
import {withRouter, Link} from 'react-router-dom';

class businessShowSearch extends React.Component{
    constructor(props){
        super(props);
        this.state = {query: "", location: "", results: "", allbusinesses: false};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
            this.state.allBusinesses = "true"
            this.props.searchBusinesses(this.state).then(() => this.props.history.push('/null')).then(() => this.props.history.push({pathname: '/businesses'}))
        
    }

    update(field){
        return (e) => {
            this.setState({ [field]: e.target.value }, () => this.searchdata())
            // this.setState({ [field]: e.target.value })
        }
    }

    reloadPage() {
        this.props.history.go('/null')
    }

    searchdata() {
        let allData = "";

        if (this.state.query.length >= 1) {
            allData = this.props.searchBusinesses(this.state).then((data) => {
                let searchBusinesses;
                if (data.businesses) {
                    searchBusinesses = Object.values(data.businesses)
                } else {
                    searchBusinesses = "";
                }

                this.setState({ results: searchBusinesses });

                return searchBusinesses;
            })
            return allData;
        } else {

            this.setState({ results: "" })
        }
    }


    searchResults() {
        if (this.state.results.length < 1) {
            return ""
        } else {
            let businesses = this.state.results;
            const allbusinesses = businesses.map((business, i) => {
                let image = business.imageLinks[1];

                let businessName = business.name.split("").map((char, idx) => {
                    
                    if (this.state.query.includes(char.toLowerCase())) return (<b key={idx} className="liveLetters">{char}</b>)
                    return char
                })
                return (
                    <div key={i} className="main-page-search-result">
                        <div className="main-business-search-img-box">
                            <Link to={`/businesses/${business.id}`}><img src={image} className="main-business-search-img"></img></Link>
                        </div>
                        <div className="main-business-search-name" >
                            <div onClick={() => this.reloadPage()}><Link  to={`/businesses/${business.id}`}>{businessName}</Link></div>
                        </div>
                    </div>
                )
            })
            return allbusinesses
        }
    }

    render(){

       return (
        <div className="business-search-container">
            <form className="business-show-search" onSubmit={this.handleSubmit}>
                <div className="business-show-search-left">
                    <label htmlFor="" className="searchbar-left-label">
                        <div className="searchbar-left-inside">
                            <span className="find-searchbar-left">Find</span>
                            <span className="input-searchbar-left">
                                <input type="text"
                                    value={this.state.query}
                                    onChange={this.update('query')}
                                    placeholder="search for businesses by name..."
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
                                    value={this.state.location}
                                    onChange={this.update('location')}
                                    placeholder="Brooklyn, NY"
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
               <div className="business-show-index-searchData">

                   {this.searchResults()}
               </div>
        </div>
    );
    }
}

export default withRouter(businessShowSearch);