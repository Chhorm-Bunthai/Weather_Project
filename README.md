# Hi! My name is Bunthai 

# Project Overview 
- This is Weather project that created by me. This weather project can help us see the current weather and the upcomming weather forcast for the next four days. This app includes current weather date and time also the current location that we use the app.

# [APP DEMO](https://weather-hosting.vercel.app/)

# Technology Used
Main technology used in this project include :
- JavaScript
- React Js
- JSX
- CSS
- Git and Github
- Openweather (for fetching data)
- External libraries include:
    - Bootstrap     : [link](https://getbootstrap.com/)
    - Axios library : [link](https://axios-http.com/)
    - gogle font(Merriweather)    : [link](https://fonts.google.com/specimen/Merriweather?query=Merriweather)
    - Vite (for building fast and optimized web applications)

# Installation
1. clone it to your local machine
```
- git clone https://github.com/anb-hq/code404s_Bunthai_weather-project.git
- cd weather 
- npm insatll 
- npm install react-bootstrap bootstrap
- npm install axios
```
2. You can change api key to your api key from this website [openweather](https://openweathermap.org/api)

# Usage :
1. after you already all the external libraries above to the project you can open terminal and run this command:
> npm run dev
2. after run that command it will show
> Local:   http://localhost:5175/<br>
  ➜  Network: use --host to expose
3. copy the https//localhost:5175/ and paste it to browser
4. If website want you to see your current location you have just to click allow.
# Convention guide
- you can access it [here](https://www.notion.so/Convention-Guide-Weather-App-2e8b65237e024bc183175fd20e3f8275?pvs=4)

# Git flow methods
1. Main Branch
- store the stable version of app
2.  Develop Branch
- This branch is use as the app developing integreation
- Any feature that created are merged into develop branch
- Represents the latest state of the application with features being developed.
3. Feature Branches
- Feature branch responsible for the app features
- Feature branches derived from develop branch and it can not merge to main branch
4. Release Branches
- Release Branches
    - Create a release branch from the develop
    - Release branched :
        - release/1.0
5. Bugfix Branches
- If any bug appear when demo the app after release
6. Hoxfix Branches
- used to quickly patch production releases. Hotfix branches are a lot like release branches and feature branches except they're based on main instead of develop.
# Documents
- [App flow](https://drive.google.com/file/d/1HP1HJwlDqvo8EBdcnwdm9lRtCKTfyEt4/view?usp=sharing)
- [Figma](https://www.figma.com/file/3OloKeKbepXCf9IRAfo5Jb/Untitled?type=design&node-id=1%3A3&mode=design&t=zVLLBUMoRXELTBzC-1)

## Contributors
- For fetching data, I learn from Udemy (Modern React with Redux [2023 Update]) and Doing research on Google such as [Shecodes](https://www.shecodes.io/) and also [MDN](https://www.shecodes.io/) other random resources.
- For icons, I got recommended from TourLeng in ANBPrime Team,[Meteocons](https://bas.dev/)
- For everything in this weather app, I did and did research about the this weather project by myself and sometimes if I did not clear about some functions in Js that need to use in my concepts of using it to get things display in my components, I sometimes ask ANB prime member about usage of that function.
## App components flow
- I decided to create 5 components such as Location, ShowWeather, Time, TodayWeather, Wrapper to work differently.
- For Wrapper component, I mainly for fetching API and combine other components to render.
- For Location component, I created it for get data from API through props and use it to display city and short name of the country.
- For Time component, I created for showing date and current time and pass it to Wrapper components. 
- For TodayWeather, I created it for display current weather that take props from Wrapper component and get data to display.
- And lastly, I created Showweather to display next four days that display days, celcius, and icons.
