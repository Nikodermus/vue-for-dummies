# Instructions

- Starting from your solution to the previous activity or the code in this folder, we're going to add a Details page to search OMDB for movies.
- Create the files/folders necessary for a new `DetailsPage.vue` page and add it to the routing.
- The Details page should accept the movie ID as part of it's route.
- The Details page should use the movie ID and OMDB service to get the details of the movie.  On the page, it should display the movie's title, full date it was released, the rating (G, PG, R, etc.), actors, and movie poster.
- Change the Search page so that clicking on a row will navigate to the Details page.
- ** THERE A BUG IN OUR APP!! **
    - To reproduce:
        - Go to the Search page and search for some movies.
        - Click on a movie to go to the Details page.
        - Click the back button.
        - Notice that the search results are gone.
    - Why does this happen?  How can we fix it?
        - Hint: Look into `<keep-alive>`.

