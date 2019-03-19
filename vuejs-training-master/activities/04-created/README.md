# Instructions

- Starting from the code in `unsolved`, we're going to make the LoginPage populate the input fields when it's loaded.
- Look at the `src/services/storage.js` file.  It provides 2 APIs to save and load data.  They store the data in `localStorage` but simulate calling a server function by returning a `Promise`.  Use these APIs in the `LoginPage` component to save and load data.
- When the page initially loads, retrieve the saved values and populate the input fields.
- When the Login button is clicked, save the values, and after they've all been saved, put up an alert saying that the data was saved.
