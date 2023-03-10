# React Template App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Aim

This template app is designed to give you everything you need to build a production ready React application. I've set up unit testing (Jest), e2e testing (Cypress), linting (eslint) and added a library for state management (Redux). For more simple apps Redux will probably be overkill, so just remove it and use React's built in useState and useContext hooks.

# Unit Testing - Jest

Run `npm run jest` in your console to run the unit tests in watch mode. You can see 2 simple example tests in [`App.test.tsx`](./src/App.test.tsx). The ['React Testing Library'](https://testing-library.com/docs/react-testing-library/intro/) comes pre-installed, and I highly recommend it.

Jest is set up to work with TypeScript via the [ts-jest](https://kulshekhar.github.io/ts-jest/) pre-processor (which allows features such as type checking in your tests). You can see this package has configuration in the `jest.config.js` file (which sets the 'preset' property to `ts-jest`).

## Testing with Redux: test-utils.tsx

If you look at [test-utils.tsx](./src/utils/test-utils.tsx), you'll see it exports a version of `@testing-library/react`'s 'render' function, but wrapped in a Provider that gives access to a Redux store. You'll need to use this instead of the normal 'render' for testing any components that interact with the Redux store.

# e2e Testing - Cypress

For end-to-end testing I've installed Cypress. Please see a simple example test in ['app.cy.ts'](./cypress//e2e/app.cy.ts).

You can run the Cypress tests with `npm run cypress`.

The Cypress tests are not currently running automatically before pushing to a remote repo, so make sure to run them yourself before you deploy your app.

# linting

The linting rules are set up in the file ['.eslintrc'](.eslintrc).

You can run linting across all js/ts files using the command `npm run lint`

## pre-commit hook

Linting is run via a husky pre-commit hook, which attempt to fix any linting error before the commit and prevents the commit if any errors cannot be automatically corrected.

The command for the hook is set up in the [pre-commit](.husky/pre-commit) file in the husky folder. And this runs the ['lint-staged'](https://github.com/okonet/lint-staged) package, which is set up (in package.json) to lint all staged JavaScript and Typescript files in the project.

The [huskyrc](huskyrc) file allows the pre-commit hook to run npx when you commit using VsCode's git tools.

# Pre-push Hook

There is also a pre-push hook set up to run the unit tests before pushing to any remote branch.

If you want the best user experience, commit using the command line instead of VsCode - you'll get pretty colorized unit test output this way.

**NB**: if you are sure you don't need to run your unit tests before pushing, you can always skip this hook by giving the 'no-verify' flag, i.e. `git push --no-verify`

# Redux store management library

If you look inside the src/store folder you'll see the `index.ts` file, which contains a very simple example use of Redux.

We have a single piece of state `navCount` which represents a counter displayed on the two routes of this sample app (Home and About).

Inside the `rootReducer`, you can see we only have one 'action' defined to change the state ('INCREMENT_NAVIGATION_COUNT), and it simply increments the 'navCount' every time that action is dispatched.

You can see that in both the HomePage and AboutPage components that the `useDispatch` hook is used to dispatch our action, and the `useSelector` hook is used to access our `navCount` piece of state.

# Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run jest`

Starts the Jest test runner in watch mode (i.e. it re-runs the tests when you make changes to your files)

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can???t go back!**

If you aren???t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you???re on your own.

You don???t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn???t feel obligated to use this feature. However we understand that this tool wouldn???t be useful if you couldn???t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
