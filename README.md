## Project Idea

```md
Kino Character. Users will use it to search, add and favorite many different movie characters
```

## Write between 3-5 user stories

```md
- User will be able to sign in, sign up, and sign out
- User will be able to change their password
- User will be able to view the characters on the website
- User will be able to update or delete the characters on the database
- User will be able to add characters to the database
- User will be able to add characters to their favorites

## Stretch Goals
- Actor and Movie tables
- User will be able to search
- User sign in will be in the nav bar
- CSS will look like the wireframe

## Tables and columns

```md
user(name:string)
characters(last_name:string, first_name:string, location:string, born_on:date, movie:string)
favorites(list:references, user: references)
```

## ERD (entity relationship diagram)

<img src="https://i.imgur.com/AStZ9Tw.jpg" alt="ERD">

## Routes

```md
#### RESTful
index characters (get)
show character (get)
create character (post)
update character (patch)
delete character (destroy)

index user faves (get)
show fave (get)
create favorite (post)
delete favorite (post)

#### Custom
sign-in
sign-out
sign-up
change-password
```

## Wireframes
<img src="https://i.imgur.com/kY1vwOn.png" alt="wireframes" width="100%">
(List === Characters)

## Timetable
```md
#### First Phase
- Get the back end functionality working first, testing with curl and pry
- Create tests along the way to verify the behavior
#### Last Phase
- Create front end with buttons, and get the data to display dynamically on the page
- Add CSS
```
