# Client side of Mah_Ellen_MovieReviewer_Capstone

## You must install the server before you attempt to install the client of this application!

Vite React Javascript frontend for an application that allows a user to post movie reviews. Supplies OMDB API info on movies to add visual interest and help identify what movie is being reviewed. This application also displays reviews for published reviews.

## To run code from this Github:

1. Run `npm install`

2. Obtain YOUR_API_KEY from OMDB https://www.omdbapi.com/apikey.aspx

3. Create a `.env` file that contains the following:

`VITE_OMDB_URL_WITH_KEY=http://www.omdbapi.com/?apikey=YOUR_API_KEY`
`VITE_MDB_SERVER=http://WHERE_YOUR_EXPRESS_MONGODB_SERVER_IS`

## To use the application:

1. Run `npm run dev`

1. The user starts on the Landing Page. User is directed to use the "Log In" button to access the application. Click the "Log In" button on the top left of the screen.

1. The user is then taken to the LogIn page. Any "UserId" and "Password" combo will work as no real authentication is used in this demo app.

1. Click on the "Add Review" item in the top navigation to be taken to the AddReview page where users can review a movie.

1. Enter a title of a movie into the search box. Note: Currently users must provide a valid word/string for the search.  It can be any word/string that has been in a movie title.

1. Click on the "Search" button.

1. An array of 10 movies will be displayed that match your search string. 

1. Click on the "Add a Review" button next to the movie you would like to review.

1. Enter the Title and Body of the reveiw you are making into the form. 

1. Click on "Submit Review" to save the review to the MongoDB. This new review is displayed to the user, and the option to edit the review is offered to the user.

1. Click on "Show Reviews" in the top navigation to be taken to the AllReviews page to see all the reviews that have already been submitted.

1. From the Show Reviews page a user can select "Delete" any review that has already been added.

1. A user may also select to "Edit" any review from the Show Reviews page. This will take the user to the EditReview Page.

1. Other pages for "Privacy", "Terms", and "Contact" info are available in the Footer.

1. A user may logout using the "Log Out" button in the top navigation.

<a href="https://mah-ellen-moviereviewer-capstone.onrender.com/">Live deploy available onrender.com</a> 

## Notes

1. You may notice that it's possible to add more than one review of a given film. This is a feature, not a bug. Roger Ebert, famed film critic, was well-known for purposely reviewing a film more than once. Having a different opinion on a movie three years later after your original review is legitimate, and does not erase your first review from the universe. A refreshed opinion is not the same as an edit.

2. I've created a placeholder images for instances where OMDb did not return an image at all.

## Known Defects and To-Dos

1. There are currently no user accounts. This is by design and is TBD. This is a fast way for a single user to blog about their movie opinions.

2. Currently there are no comments allowed, but this feature will be added at some point.

 ## Credits

Source of movie data:
OMDb API via  https://www.omdbapi.com/

Empty Movie Poster image based on "Empty cinema poster panel"
By Who is Danny from Adobe Stock
https://as1.ftcdn.net/v2/jpg/03/01/83/28/1000_F_301832885_XSg1F3ba571JjJ1RCrSnXs5VFvyopVMD.jpg

Landing page theater photo by <a href="https://unsplash.com/@somethingmagical?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">something magical</a> on <a href="https://unsplash.com/photos/empty-chairs-inside-a-lighted-hall-SdjA-_Xzuxg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a> 