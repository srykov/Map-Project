import React, { Component } from 'react';
import * as LocationAPI from '../util/LocationAPI';

class LocationDetails extends Component {


  constructor(props){
    super(props);
    this.state = {
      item: {}
    }
  }

  componentDidMount(){
      LocationAPI.getLocationDetails(this.props.location.venue.id).then((location) => {
      this.setState({
        item:location
      })
    })
  }

  render() {
    let item = this.state.item
    if(Object.keys(item).length === 0){
     return(
        <div className="info-window">Loading...</div>
     )
    }
    else{
     console.log(item)
     const facebookUrl = `http://www.facebook.com/${item.contact.facebookUsername}`
     const twitterUrl = `http://www.twitter.com/${item.contact.twitter}`

     return(
        <div className="info-window">
          <div className="location-info">
            <div className="location-title">{item.name}</div>
            <div className="location-detail">{item.categories[0].name} | {item.location.address}</div>
            <div className="location-detail">{item.contact.formattedPhone != null && <span>{item.contact.formattedPhone} | </span>} <a href={item.url}>Website</a></div>

            {item.contact.facebookUsername && <a href={facebookUrl}><i className="fab fa-facebook-square fa-2x"></i></a>}
            {item.contact.twitter && <a href={twitterUrl}><i className="fab fa-twitter-square fa-2x"></i></a>}
          </div>
        </div>
     )
   }
 }

}

export default LocationDetails
