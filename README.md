# Technologies
The application is based on React and Redux.

# How to use
Open webbrowser at GitHub Pages' https://26bricks.github.io/stopwatch/

or

1. Clone this repository content to your local folder
2. Open terminal and run npm install
3. Run npm start
4. Open webbrowser at localhost:3000

or
use Docker Hub image at https://hub.docker.com/repository/docker/26bricks/stopwatch
# Getting started
## Buttons meanings
Start / pause button: runs and alternates start and pause action\
Log button: adds a log\
Reset button: resets timer\
Clear button: resets timer and clears logs

It is possible to comment logged actions.

# Usecases
## Start - stop usecase
Roles: user, system

User  | System
:------------- | :-------------
presses start button|&nbsp;
&nbsp;|starts counter
&nbsp;|changes start button color to red
&nbsp;|changes start button label to pause
presses pause button|&nbsp;
&nbsp;|pauses counter
&nbsp;|changes pause button color to green
&nbsp;|changes pause button label to start

\
Result screenshot:\
![Simple start - stop usage image](/src/stopwatch_start_stop.png)

## Commented championship usecase
Roles: user, system

Result screenshot:
![Orienteering championship usage image](/src/stopwatch_orienteering.png)
