# React Notes App

Using Create React App to get off the ground, this simple project showcases a vanilla React note application that manages notes.

## See it in action

1. Clone it down
2. Ensure you have json-server installed `npm i -g json-server`
3. Fire up your json-server `json-server -p 8080 --watch db.json`
4. Fire up the application `npm start`
5. Play with it in a browser at [localhost:3000](localhost:3000)

## Notable features

* In-place edits
* Autosaving every 10 seconds after a change is made
* State controlled inside the NoteApp component
* Data persistence through node's json-server and a root/db.json file
* partial and pipe in src/lib/utils

## Note on testing and dev strategy
* The helper functions in this application were built with TDD using Jest. Find the todoHelpers, utils, and tests in /src/lib
* All components are being checked with snapshots and propTypes

Run the test suite locally from the command line with `npm test`
