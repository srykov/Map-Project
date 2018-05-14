/*
 * latitude/longitude of a central point in Toronto around which to find
 * and display location information
 */
export const torontoLat = 43.653226
export const torontoLng = -79.383184


const client_id='4HQKBFUPS0MOXK1EOLLV3CYVIY4XDGU2WI0WCQAFCYI2UAWG'
const client_secret='P1LFYYR2HIBCLZDRFQA52HIHHM4SILROLR5WX2RC2BW0OLPH'

/*
 * Constants for Foursquare Venue Recommendations Service Endpoint & Query Params
 */
const venuesEndpoint = 'https://api.foursquare.com/v2/venues/explore'
const paramsForVenueRequest = {
	ll: `${torontoLat},${torontoLng}`,
	radius:'2000',
	section:'food',
	client_id: client_id,
	client_secret: client_secret,
	v:'20180507',
	limit:'15',
	openNow:true
}


/*
 * Get list of locations around a central point (lat/long) from Foursquare Venue
 * Recommendation service. Return array of venues.
 */
export const getLocations = () => {
	const venuesRequestUrl = `${venuesEndpoint}?${buildQueryString(paramsForVenueRequest)}`

	return fetch(venuesRequestUrl)
	.then(response => response.json())
    .then(data => data.response.groups[0].items)
    .catch(error => {
    	console.log(error)
    	throw error
    })
}


/*
 * Constants for Foursquare Venue Details Service Endpoint & Query Params
 */
const detailsEndpoint = 'https://api.foursquare.com/v2/venues/'
const paramsForDetailsRequest = {
	client_id: client_id,
	client_secret: client_secret,
	v:'20180507'
}

/*
 * Get detailed information for one location from Foursquare's venue details service.
 * Return an object whose properties contain the venue's information.
 */
export const getLocationDetails = (venueId) => {
	let detailsRequestUrl = `${detailsEndpoint}/${venueId}`
	detailsRequestUrl = `${detailsRequestUrl}?${buildQueryString(paramsForDetailsRequest)}`

	return fetch(detailsRequestUrl)
	.then(response => response.json())
    .then(data => data.response.venue)
    .catch(error => console.log(error))
}

/*
 * buildQueryString() takes an object with an arbitrary number of properties,
 * builds and returns a query string with these properties as query parameters.
 */
function buildQueryString(parameters){
  let qs = "";
  for(let key in parameters) {
    let value = parameters[key];
    qs += encodeURIComponent(key) + "=" + encodeURIComponent(value) + "&";
  }
  return qs
}