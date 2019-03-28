## React seed

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### VSCode

I strongly recommend that you use vscode, and have included a .vscode folder with some project settings that will help with linting and auto fixing to follow a code standard.

### Available Scripts

In the project directory, you can run:

#### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

#### `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the
best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment)
for more information.

#### `yarn lint`

While the create react app does have a linter, I've added eslint and an rc file
so that you can lint as you go, in your IDE.

#### `yarn unit:test`

Launches the Jest test runner in interactive watch mode.

See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests)
for more information.

Unit tests are useful but you should be careful not to test the React library.

Interesting articles:
- [Testing React](https://www.valentinog.com/blog/testing-react/)
- [Why I stopped using snapshot testing](https://medium.com/@tomgold_48918/why-i-stopped-using-snapshot-testing-with-jest-3279fe41ffb2).

#### `yarn sdd`

Starts Styleguidist and opens the Cypress test suite.

This is a very useful way to develop tests, documentation and components at the
same time.

#### `yarn sdd:start`

Start developing in the styleguidist environment. This is where all component
development should be done, rather than in the application view.

Open http://localhost:6060 to view it in the browser.

You should do this so that you focus on the structure and integrity of the component,
and ignore it's parent layout completely. Stay focused on it's simplicity!

#### `yarn sdd:build`

If you ever wish to publish your styleguide, you can build it with this command.

This could be useful if you wanted to send someone a static zip file, or maybe
it could be useful to build before browser testing in CI.

#### `yarn sdd:test`

Opens the cypress test suite with styleguidist as the target.

Styleguidist must be running.
