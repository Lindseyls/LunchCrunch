# Lunch Crunch

>Lunch Crunch aims to help find your lunch in a crunch!

![demo_open_app](https://user-images.githubusercontent.com/25995253/47632460-61640900-db07-11e8-9142-f57b827b10f0.gif)

Lunch Crunch was created as my Capstone Project at Ada Developers Academy. It is the largest undertaking I experienced in the Ada classroom. Not only was it a month long, but I got to be my own product owner. I decided to build Lunch Crunch as an iOS app to provide the ability to make informed decisions on choosing a restaurant based on current wait times, total time spent, and proximity all while on the go. Lunch Crunch uses React Native on the front-end and Rails on the back-end.

Please visit the back-end repository for the application [here](https://github.com/Lindseyls/LunchCrunchAPI ). The back-end is deployed to Heroku to serve data by managing relevant content in a PostgreSQL database and handling Yelp API calls.

## Tech Stack
Reach Native
Redux
Xcode
Ruby on Rails
PostgreSQL
Yelp API
Apple Maps

## Target Users

My target users are those who are always looking for new places to eat for lunch but lack the resource and time to search. Also, just simply anyone who is looking for a quick bite to eat.

## How Lunch Crunch Works

The user can enter their start time with the total allotted time they have for lunch. A filtered list of restauants will render that are within the selected time.

![demo_select_time](https://user-images.githubusercontent.com/25995253/47634347-7a23ed00-db0e-11e8-8319-eafdb534634d.gif)

The user can select the locations to find out information about the restaurant including:
  * wait time
  * total time spent
  * directions
  * pricing
  * ratings/reviews from Yelp

![demo_rest_info](https://user-images.githubusercontent.com/25995253/47635085-00413300-db11-11e8-8a0c-73985ada797f.gif)

If the user does not have a time crunch then they can use the search bar to find a restaurant.

![demo_search_bar](https://user-images.githubusercontent.com/25995253/47634593-4dbca080-db0f-11e8-98a7-155d0801afd0.gif)

A map will render all the locations nearby that fits into the total lunch time which accounts for wait time, distance, and total time spent. Once the lunch destination is selected, the map will give the fastest directions to the location through Apple Maps

![demo_apple_nav](https://user-images.githubusercontent.com/25995253/47634012-3ed4ee80-db0d-11e8-80d6-a6a65fde9229.gif)


## Deploying

To run the app locally, the prerequisite development environment needs to be installed. Follow the React Native instructions [here](https://facebook.github.io/react-native/docs/getting-started.html) and select the "Building Projects with Native Code" tab.

Clone this repository and use the following commands in the terminal:

### `react-native start`

Runs your app in development mode. You should keep this terminal window running while developing your app.

Open it in the [Expo app](https://expo.io) on your phone to view it. It will reload if you save edits to your files, and you will see build errors and logs in the terminal.

#### `react-native run-ios`

Like `react-native start`, but also attempts to open your app in the iOS Simulator if you're on a Mac and have it installed.

## About Me
Luxi Lindsey - [LinkedIn](https://www.linkedin.com/in/luxi-lindsey-69185736/)

## Acknowledgments
Thank you to all the wonderful Ada staff and teachers for preparing us to be ready for our Capstone Project with five months of classroom experience. A special thank you to Charles Ellis, Dan Roberts, and my Capstone Group - Team React Native Apps, for supporting me through the Capstone Project.
