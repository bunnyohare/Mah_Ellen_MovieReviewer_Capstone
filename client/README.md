# Client side of Mah_Ellen_MovieReviewer_Capstone

## You must install the backend before you attempt to install the fronted of this application!

Vite React Javascript frontend for an application that allows users to post movie reviews. Supplies OMDB API info on movies to add visual interest and help identify what movie is being reviewed. This application also displays reviews and allows comments for published reviews.

## To run code from this Github:

1. Run `npm install`

2. Obtain YOUR_API_KEY from OMDB https://www.omdbapi.com/apikey.aspx

3. Create a `.env` file that contains the following:
`VITE_OMDB_URL_WITH_KEY=http://www.omdbapi.com/?apikey=YOUR_API_KEY`

## To use the application:

1. Run `npm run dev`

1. The user starts on the Landing Page. They directed to use the Log In button to access the application. Click the Log In button.

1. The user the then taken to the LogIn page. Any UserId and Password combo will work as no real authentication is used in this demo app.

1. Click on the Add Review item in the top navigation to be taken to the AddReview page where users can review a movie.

1. Enter a title of a movie into the search box. 

1. Click on the Search button.

1. An array of movies will be displayed that match your search string. 

1. Select the movie you would like to review. 

1. Enter the Title and Body of the reveiw you are making into the form. 

1. Click on Submit Review to save the review to the MongoDB. This new review is displayed to the user, and the option to edit the review is offered to the user.

1. Click on Show Reviews in the top navigation to be taken to the AllReviews page to see all the reviews that have already been submitted.

1. From the Show Reviews page a user can select Delete any review that has already been added.

1. A user may also select to EDIT any review from the Show Reviews page. This will take the user to the EditReview Page.

1. Other pages for Privacy, Terms, and Contact info are available in the Footer.

1. A user my logout using the Log Out button in the top navigation.

Live deploy available at: TBD


 ## Credits

Source of movie data:
OMDb API via  https://www.omdbapi.com/

Background image based on "Milky way" By 24Novembers from Adobe Stock
https://as1.ftcdn.net/v2/jpg/03/37/57/74/1000_F_337577487_VpfpvGTSY1rNGDWM7p4pKfMUxgIxqq3C.jpg

Empty Movie Poster image based on "Empty cinema poster panel"
By Who is Danny from Adobe Stock
https://as1.ftcdn.net/v2/jpg/03/01/83/28/1000_F_301832885_XSg1F3ba571JjJ1RCrSnXs5VFvyopVMD.jpg

Landing page theater photo by <a href="https://unsplash.com/@somethingmagical?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">something magical</a> on <a href="https://unsplash.com/photos/empty-chairs-inside-a-lighted-hall-SdjA-_Xzuxg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a> 