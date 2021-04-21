# Lab: Class 02

## Project: basic-express-server

### Author: Audrey Patterson

## Links and Resources

- [Main Branch deployed to heroku](https://audrey-basic-express-server.herokuapp.com/)
- [ci/cd](https://github.com/arpatterson31/basic-express-server/actions)
- [Pull Request dev to main](https://github.com/arpatterson31/basic-express-server/pull/1)

### Setup

#### `.env` requirements (when applicable)

i.e.

- `PORT` - 3333

#### How to initialize/run your application (where applicable)

- e.g. `npm start`

#### Tests

- How do you run tests?
  - run `npm test` in the terminal from root
- Any tests of note?
  - 404 on a bad route
  - 404 on a bad method
  - 500 if no name in the query string
  - 200 if the name is in the query string
  - given an name in the query string, the output object is correct
- Describe any tests that you did not complete, skipped, etc
  - The Validator tests - I wasn't sure if it needed to look like the logger tests or our tests in the server if there was no name in the query.

#### UML / Application Wiring Diagram

![Lab 02 UML](assets/lab02uml.jpg)
