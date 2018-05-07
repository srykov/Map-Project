export const torontoLat = 43.653226
export const torontoLng = -79.383184

const client_id='4HQKBFUPS0MOXK1EOLLV3CYVIY4XDGU2WI0WCQAFCYI2UAWG'
const client_secret='P1LFYYR2HIBCLZDRFQA52HIHHM4SILROLR5WX2RC2BW0OLPH'
const venuesEndpoint = 'https://api.foursquare.com/v2/venues/explore'
const paramsForVenueRequest = {
	ll: `${torontoLat},${torontoLng}`,
	radius:'500',
	section:'food',
	client_id: client_id,
	client_secret: client_secret,
	v:'20180507',
	limit:'8',
	openNow:true
}


export const getLocations = () => {
	const venuesRequestUrl = `${venuesEndpoint}?${buildUrl(venuesEndpoint, paramsForVenueRequest)}`

	return fetch(venuesRequestUrl)
	.then(response => response.json())
    .then(data => data.response.groups[0].items)
}



function buildUrl(url, parameters){
  let qs = "";
  for(let key in parameters) {
    let value = parameters[key];
    qs += encodeURIComponent(key) + "=" + encodeURIComponent(value) + "&";
  }
  return qs
}