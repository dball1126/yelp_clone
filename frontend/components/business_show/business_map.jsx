import React from 'react';

// const mapCenter = { lat: 40.7831, lng: 73.9712 };

class BusinessMap extends React.Component{
    constructor(props){
        super(props);
        this.position = this.props.position || "";
        this.center = this.props.center || { lat: 40.70569, lng: -73.99639 };
        this.businesses = this.props.businesses || "";
        this.didUpdate = false;
        this.linkTracker = "true";
        this.catTracker = 0;
    }
    shouldComponentUpdate(ownProps) {
        let catUpdater;
        if (this.props.history) catUpdater = this.props.history.location.state;
        if (ownProps.searching === "true") return false;
        if (catUpdater === "flushDeal") {
            
            return true;
        }
        
        let tracking;
        if (this.props.location) tracking = this.props.location.linkTracker || undefined;

        if (tracking !== undefined && this.props.catLocation === "true") return true;


        if ((this.props.catLocation === "true" && this.catTracker < 2)) {
            this.catTracker++;
            return true;
        }

        if (this.didUpdate === false) {
            this.didUpdate = true

            return true;
        } else {

            return false;
        }

    }

    componentDidMount(){
        
        // const map = ReactDOM.findDOMNode(this.refs.map);
        let zoom = 10;
        if (this.position) zoom = 13;
        
        const mapOptions = {
            center: this.center,
            zoom: zoom,
            marker: this.marker
        }
        this.map = new google.maps.Map(this.mapNode, mapOptions);

        this.pos = new google.maps.LatLng(this.position.lat, this.position.lng);
        
        this.marker = new google.maps.Marker({
            position: this.pos,
            map: this.map
        });
        
        if(this.businesses){
            zoom = 5;
            this.businesses.forEach(business => {

            return (
                this.addBusiness(business)
                 
            )
        });
        }
        
    }

    componentDidUpdate() {
        let zoom = 10;
        if (this.position) zoom = 13;

        const mapOptions = {
            center: this.center,
            zoom: zoom,
            marker: this.marker
        }
        this.map = new google.maps.Map(this.mapNode, mapOptions);
        this.pos = new google.maps.LatLng(this.position.lat, this.position.lng);
        this.marker = new google.maps.Marker({
            position: this.pos,
            map: this.map
        });
        
        if(this.props.businesses){
        this.props.businesses.forEach(business => {
            return (
                this.addBusiness(business)
            )
        })
    }
    }

    addBusiness(business){
        const pos = new google.maps.LatLng(business.latitude, business.longitude)
        const marker = new google.maps.Marker({
            position: pos,
            map: this.map
        });

        const infowindow = new google.maps.InfoWindow({
            content: business.name
        })
        // document.addEventListener('touchstart', handler, {passive: true});
        // marker.addEventListener('touchstart', handler, { passive: true });
        marker.addListener('click', () => {
            infowindow.open(this.map, marker);
                    
                })

    }

    render(){
        
        return (
            <div ref={ map => this.mapNode = map} id="map">
                
            </div>
        )
    }

}

export default BusinessMap;