# Would You Rather Project

The "Would You Rather?" Project, you'll build a web app that lets a user play the “Would You Rather?” game. The game goes like this: A user is asked a question in the form: “Would you rather [option A] or [option B] ?”. Answering "neither" or "both" is against the rules.

In your app, users will be able to answer questions, see which questions they haven’t answered, see how other people have voted, post questions, and see the ranking of users on the leaderboard.

The `_DATA.js` file represents a fake database and methods that let you access the data. The only thing you need to edit in the `_DATA.js` file is the value of `avatarURL`. Each user should have an avatar, so you’ll need to add the path to each user’s avatar.

## How to Run

The application requires only `npm install` and `npm start` to install and launch.

## Libarys used

There are two types of objects stored in our database:

- npm install react react-router-dom --save
- npm install react-redux --save
- npm install redux --save
- npm install redux-thunk --save

### Components

Project COmponents include:

| Name              | Description                                                             |
| ----------------- | ----------------------------------------------------------------------- |
| `Error404.js`     | Error page if users access a path that is non existant                  |
| `Home.js`         | Main Page for the user that displays the cards                          |
| `LedarBoard.js`   | Dispays the users ranking via total items created / answered            |
| `Login.js`        | Page used to login to application                                       |
| `Logout.js`       | Page that houses the logout function                                    |
| `NavBar.js`       | Component used to keep the nav Bar and user login attibutes             |
| `PollCard.js`     | Keeps repetive mapped card for the poll and questions                   |
| `PollGroup.js`    | Keeps the group button to switch between answered and un answered cards |
| `PrivateRoute.js` | Used to test if user is logged in and route to appropiate page          |
| `Question.js`     | Component that alows user to enter new question                         |
| `View Poll.js`    | Component used to show results of user selected polls                   |

### Redux datastore Files

Project COmponents include:

| Name             | Description                                                       |
| ---------------- | ----------------------------------------------------------------- |
| `currentUser.js` | The Reducer to keep the current logged in user for all components |
| `Index.js`       | Combines all reducers                                             |
| `questions.js`   | The Reducer used to keep all the question data                    |
| `users.js`       | The Reducer used to keep all the users data                       |
| `_DATA.js`       | Inital data and mock database functions                           |
| `actions.js`     | Keeps all the actions functions                                   |
| `actionTypes.js` | Keeps the constants for all reducer actions                       |
| `store.js`       | Loads inital data and initilizae redux store and thunk            |

### Database Calls

The Application talks to the mock database via 4 methods:

- `_getUsers()`
- `_getQuestions()`
- `_saveQuestion(question)`
- `_saveQuestionAnswer(object)`
