# Neighborhood Map Project

This was a project that I developed as part of my Udacity [Front-End Web Developer Nanodegree Program](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001). The project required me to create a single-page application using React to present a neighborhood map. I used [Foursquare](https://developer.foursquare.com/docs)'s services get a list of locations within the neighborhood, and then used Google Maps to display a map of the neighborhood and to display a marker for each location.

I wrote the HTML, CSS, Javascript and JSX to required make the app beautiful, functional and interactive.

I made use of the [React Google Maps](https://github.com/tomchentw/react-google-maps) library in order to integrate Google Maps with React.

## What I Learned
This project gave me an opportunity to practice what I learned in the React Fundamentals and Google Maps API courses as well as in the other courses of my Nanodegree. Essentially this project allowed me to put all the pieces together.

Specifically I practiced:
* creating React components
* using React lifecycle events and the Fetch API to fetch & render external data
* using React's state management
* working with the Google Maps API

## Foursquare Services
I used [Foursquare's Venue Recommendation Service](https://developer.foursquare.com/docs/api/venues/explore) to ge the initial list of neighborhood locations. I passed in the latitude/longitude of a central location in Toronto, and received JSON data for a set of locations within a 2km radius of that location.

When users click on a given marker, or location in the list view, the application opens an Info Window, and I used data from [Foursquare's Venue Details Service](https://developer.foursquare.com/docs/api/venues/details) to show more detailed information about the location, such as address, phone number, twitter handle etc.

## Getting Started
You can try the Neighborhood Map app out by doing the following:
* Download the source code
* Install all project dependencies with `npm install`
* Start the development server with `npm start`
* Go to localhost:3000 in your browser

## Service Worker Caching Functionality
I took advantage of the service worker caching functionality that is provided out-of-the box by create-react-app. To test this you should do the following:
* Build the application (using `npm run build`).
* Run a simple http server to serve the production build (e.g. serve -s build)

## Contributing

This repository is the finished code for _my_ Neighborhood Map project. Therefore, I will most likely will not accept pull requests.