# React Date picker

- React context used instead of Redux to provide non-persistant storage. Currently only implemented on one page but the intention is that this would be used for the duration of the booking process across multiple pages
- Booking widget is the main parent component and I used composition to break the fuctionaltiy into reuseable components
- Each component is controlled and takes it's props from the parent, the parent widget takes it's props from the context. I chose to not use context in the components to decouple them from the state model.
- The component supports keyboard navigation via tabbing and each effect does not hijack this behaviour.
- Added in a date picker to allow the user to choose different dates and times
- CSS modules with SASS

TODO
- Make the first day selected by default
- As the user selects a day scroll the menu to a better position (maybe left aligned)
- On selection of day focus the user to the next available time slot button
- On selection of time focus the user to the next button
- Add custom tests using testing library (only snapshots at the moment which are only useful indicators)
- The scroll effect is sometimes incorrect. I suspect it needs a slight delay post render.


Built on the default TypseScript Create React App template.







# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
