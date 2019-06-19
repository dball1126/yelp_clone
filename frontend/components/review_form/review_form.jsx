import React from 'react';
import {Link} from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class ReviewForm extends React.Component{
    constructor(props){
        super(props);
        this.state = this.props.review || {};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.photoFile = this.state.photoFile || {};
    }

    componentDidMount(){
        this.props.fetchBusiness(this.props.match.params.businessId);
        this.setState({...this.props.review});
        
    }

    handleSubmit(e){
        e.preventDefault();
        const formData = new FormData();
        
        if(this.state.photoFile){
            
        formData.append('review[image]', this.state.photoFile);
        formData.append('review[content]', this.state.content);
        formData.append('review[author_id]', this.props.currentUser.id);
            formData.append('review[rating]', parseInt(this.state.rating));
            formData.append('review[business_id]', this.props.match.params.businessId);

        }
        
        $.ajax({
            url: '/api/reviews',
            method: 'POST',
            data: formData,
            contentType: false,
            processData: false,
        }).then(() => this.props.history.push(`/businesses/${this.props.match.params.businessId}`));
          
        // const vals = {
        //     // image: formData,
        //     content: this.state.content,
        //     author_id: this.props.currentUser.id,
        //     rating: parseInt(this.state.rating),
        //     business_id: this.props.match.params.businessId
            
        // }
        
        // this.props.action(vals).then(() => this.props.history.push(`/businesses/${this.props.match.params.businessId}`));
    }

    update(field){
        return (e) => {
            this.setState({[field]: e.target.value})
        }
    }

    handleFile(e){
        
        this.setState({photoFile: e.currentTarget.files[0]});

    }

    render(){
            console.log(this.state);
        const business = this.props.businesses[this.props.match.params.businessId];
            if (business === undefined) return "" ;

        return (
            <div>
                <div className="review-banner">
                    <div className="review-banner-container">
                        <div className="reivew-banner-inner-container">
                            <div className="review-logo">

                            </div>
                            <div className="write-a-review-header">
                                <span>Write a Review</span>
                            </div>
                        </div>
                    </div>
                    <div className="review-main-container">
                        <div className="review-container">
                            <div className="left-review-container">
                                <div className="business-review-header">
                                    <div className="review-business-name">
                                        <span>{business.name}</span>
                                    </div>
                                    <div className="guidelines">
                                        <a href="">Read our review guidelines</a>
                                    </div>
                                </div>

                                <div className="review-form-container">
                                    <form onSubmit={this.handleSubmit} >
                                    <div className="review-form">
                                        <div className="rating-data">
                                        
                                            <ul className="ul-field-rating" >
                                      
                                                <span className="rating select"> Select your rating</span>
                                                    
                                                <input type="radio" id="rating-input-1-5" className="rating-input" name="rating-input-1" value="5" onChange={this.update('rating')}/>
                                                <label htmlFor="rating-input-1-5" className="star-box-rev" className="fa fa-star" ></label>
                                                
                                                    
                                                <input type="radio" id="rating-input-1-4" className="rating-input" name="rating-input-1" value="4" onChange={this.update('rating')}/>
                                                <label htmlFor="rating-input-1-4" className="star-box-rev" className="fa fa-star"></label>
                                                
                                                <input type="radio" id="rating-input-1-3" className="rating-input" name="rating-input-1" value="3" onChange={this.update('rating')}/>
                                                <label htmlFor="rating-input-1-3" className="star-box-rev" className="fa fa-star"></label>
                                                
                                                
                                                <input type="radio" id="rating-input-1-2" className="rating-input" name="rating-input-1" value="1" onChange={this.update('rating')}/>
                                                <label htmlFor="rating-input-1-2" className="star-box-rev" className="fa fa-star"></label>
                                                
                                                <input type="radio" id="rating-input-1-1" className="rating-input" name="rating-input-1" value="1" onChange={this.update('rating')}/>
                                                <label htmlFor="rating-input-1-1" className="star-box-rev" className="fa fa-star"></label>
                                               
                                                </ul>
                                            
                                        </div>
                                        <textarea className="content-data" 
                                                  onChange={this.update('content')}
                                                  placeholder="Your review helps other learn about great local businesses"/>
                                    </div>
                                        <div className="field">
                                            <input type="file"
                                                   onChange={this.handleFile}/>
                                        </div>
                                        <div className="review-button-box">
                                            <div className="review-buttin-inner">
                                                <button className="actual-review-button">
                                                    <span className="post-review">Post Review</span>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>   
            </div>
        )
    }
}

export default withRouter(ReviewForm);