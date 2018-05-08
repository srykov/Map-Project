export const torontoLat = 43.653226
export const torontoLng = -79.383184

const client_id='4HQKBFUPS0MOXK1EOLLV3CYVIY4XDGU2WI0WCQAFCYI2UAWG'
const client_secret='P1LFYYR2HIBCLZDRFQA52HIHHM4SILROLR5WX2RC2BW0OLPH'

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


export const getLocations = () => {
	const venuesRequestUrl = `${venuesEndpoint}?${buildQueryString(paramsForVenueRequest)}`

	return fetch(venuesRequestUrl)
	.then(response => response.json())
    .then(data => data.response.groups[0].items)
}



//https://api.foursquare.com/v2/venues/VENUE_ID/photos
//https://developer.foursquare.com/docs/api/venues/details



const detailsEndpoint = 'https://api.foursquare.com/v2/venues/'
const paramsForDetailsRequest = {
	client_id: client_id,
	client_secret: client_secret,
	v:'20180507'
}

export const getLocationDetails = (venueId) => {
	let detailsRequestUrl = `${detailsEndpoint}/${venueId}`
	detailsRequestUrl = `${detailsRequestUrl}?${buildQueryString(paramsForDetailsRequest)}`

	return fetch(detailsRequestUrl)
	.then(response => response.json())
    .then(data => data.response.venue)
}


function buildQueryString(parameters){
  let qs = "";
  for(let key in parameters) {
    let value = parameters[key];
    qs += encodeURIComponent(key) + "=" + encodeURIComponent(value) + "&";
  }
  return qs
}