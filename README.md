# Welcome to the CRUD Movie Card project repository!

## My comments

In this project I did my first CRUD (Create, Read, Update and Delete) and improved my knowledge of props and state in React. I also learned how to use CSS libs in React to speed up development.

---

## Technologies

The following tools were used in the construction of the project:

- [ReactJS](https://reactjs.org)
- [Bootstrap](https://getbootstrap.com/)
- [Npm](https://www.npmjs.com/)
- [VSCode](https://code.visualstudio.com)
- [Git Bash](https://gitforwindows.org/)

---

## Installation of the project locally

After each of the steps, there will be an example of the command to be typed to do what is being asked, if you have difficulties and the example is not enough, do not hesitate to contact me at _igorln96@gmail.com_.

1. Open the terminal and create a directory in the location of your choice with the command **mkdir**:
``` javascript
   mkdir projects-igorln
```

2. Enter the directory you just created and then clone the project:
``` javascript
   cd projects-igorln
   git clone git@github.com:igorln/movie-cards.git
```

3. Access the project directory and then use the command **npm i** to install all necessary dependencies:
``` javascript
   cd movie-cards
   npm i
```

4. Finally, run the command **npm start** and access the project via browser, in the path `http://localhost:3000/movie-cards`.

---

## What should be developed

Create a **CRUD** of movie cards in React.
The acronym **CRUD** means _Create, Read, Update and Delete_, so it should be possible to perform the following operations on this project:

   - Add a new movie to the list - **CREATE**;
   - List all registered films, with a summary information page for each film and a detailed information page for a selected film - **READ**;
   - Edit a movie in the list - **UPDATE**;
   - And delete a movie from the list - **DELETE**;

---

## Project requirements

#### 1 - Render `BrowserRouter` in the `App` component using routes

#### 2 - Make a request to search and show the list of movies when `MovieList` is assembled

#### 3 - Insert a link to a movie's details page within `MovieCard`

#### 4 - Make a request to find the movie that should be rendered within `Movie Details`

#### 5 - Make a request to find the movie that will be edited in `EditMovie`

#### 6 - Insert a link on the homepage for `NewMovie` to create new cards

#### 7 - Add a link to delete a card in `MovieDetails`
