# [Kino Character](https://alexjcode.github.io/kino-character)

Users will be able to view and populate a list of their favorite movie / tv / game characters

#### Front end
https://github.com/alexjcode/kino-character

https://alexjcode.github.io/kino-character
#### API
https://github.com/alexjcode/kino-character-rails-api

https://kino-character-rails-api.herokuapp.com

## User Stories
- User will be able to sign in, sign up, and sign out
- User will be able to change their password
- User will be able to add their favorite characters to the website
- User will be able to update or delete the characters on the database

## Stretch Goals
- Actor and Movie tables
- User will be able to search by name
- Collapsible nav bar
- CSS will look like the wireframe

## Tables and columns
```
user(name:string)
characters(last_name:string, first_name:string, location:string, born_on:date, movie:string, likes:string, img:string)
```

## ERD (entity relationship diagram)

<img src="https://i.imgur.com/aq2AnYg.png" alt="ERD"  width="100%">

## Routes

#### RESTful
- index characters (get)
- show character (get)
- create character (post)
- update character (patch)
- delete character (destroy)

#### Custom
- sign-in
- sign-out
- sign-up
- change-password

## Wireframes
<img src="https://i.imgur.com/kY1vwOn.png" alt="wireframes" width="100%">

## Timetable
- Get the back end functionality working first, testing with curl and pry
- Create tests along the way to verify the behavior
- Create front end with buttons, and get the data to display dynamically on the page
- Add CSS

## Unsolved Issues
- Fix gradient on the delete button
- Add modals for the edit button, and use a modal for add character
- Figure out how to display all characters on the database,
  but only show edit/delete buttons on the user's own characters
- Resolve dependency issues
