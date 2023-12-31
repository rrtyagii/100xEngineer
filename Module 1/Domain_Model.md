# Domain modeling

## Screens for reference
1. [Book Page 1](https://www.goodreads.com/book/show/228665.The_Eye_of_the_World)
2. [Book Page 2](https://www.goodreads.com/book/show/25744928-deep-work)
3. [Book Review Page 1](https://www.goodreads.com/review/show/1777455910)
4. [Book Review Page 2](https://www.goodreads.com/review/show/2376175112)
5. [Author Page 1](https://www.goodreads.com/author/show/147891.Cal_Newport)
6. [Author Page 2](https://www.goodreads.com/author/show/221559.Jeff_Kinney)


### ENTITIES:
BOOK
	Book cover
	string Name
	string Description
	First Published
	GENRE
	AWARD
	original title
	SERIES
	Setting
	Characters
	EDITION
	count_of_Currently_reading
	count_of_want_to_read
	shelf_status
	Price
	Links_to_buy_the_book

Author
	Name
	Profile_image
	Born
	Date_of_Birth 
	Date_of_Death_Place_of_Birth
	Goodreads_Author_or_not
	GENRE
	Description
	BOOK authored
	SERIES List
	videos
	website link
	Quotes 
	Blogs
	Followers
	Friends
	Shelf
	taking_question

USER
	Name
	Profile_image
	number_of_books_rated
	number_of_books_reviewd
	Friends
	Shelf
	Profile
	Following
	Followers
	Reading_Challenge
	Authors_following

USER PROFILE
	Updates 
	Currently Reading
	User_lists
	USER_Stats

BOOK STATS
	Book Associated with it
	statistics category (current edition or all)
	total number of ratings given
	total number of reviews
	average rating

USER Stats
	Books read
	given year
	User

BLOGS
	Date
	Content
	Author
	Number of Likes
	Comments

LIKE
	User who Liked
	User who got liked
	counter for likes
	post metadata

FOLLOW
	who is being followed
	who is following

AWARD
	award name
	Description
	Link
	Recipient

GENRE
	Name
	Description
	Books tagged with a particular genre
	Most read books in a genre

SERIES
	Series name
	author
	description
	book sequence
	book

EDITION
	Language
	Isbn
	Format
	Published
	Publisher

RECOMMENDATION
	User
	recommendation_generation_timestamp
	user shelves
	user rated books
	authors user follow
	user followed / liked genres
	context (daily generated recommendation or Similar Books after rating a book or author)
	user's freinds

USER REVIEW
	user profile picture
	rating
	tags
	content
	timestamp
	spoiler flag
	reading progress
	book the review is about
	number of likes
	comment reply

COMMUNITY REVIEW
	total number of community review for a partiucular book
	user profile image
	user display name
	user Rating
	which book
	time stamp
	content
	tags
	like Count
	comment Count
	COMMENT Reply
	spoiler flag

COMMENT REPLY
	user profile image
	user display name
	timestamp
	content
	spoiler flag
	parent community review OR parent question

RATING
	which book
	Number of 5 stars
	Number of 4 stars
	Number of 3 stars
	Number of 2 stars
	Number of 1 stars
	number of total ratings
	average rating
	total review count

FRIENDS
	User 1
	User 2
	Status : (pending, accepted, friends)

QUOTES
	Quote Text
	User who Shared
	Book related to the quote
	Time Stamp
	Author related to the quote

BOOK_DISCUSSIONS
	book associated with it
	discussion topic
	started by
	number of posts
	view
	timestamp

BOOK_QUESTIONS
	Book in question
	User posting question
	content
	number of likes
	timestamp
	number of answers

BOOK_ANSWER
	Book in question
	which Question
	User posting answer
	content
	number of likes
	timestamp
	any Comment to the answer

AUTHOR_AMA_QUESTION
	Author who's taking question
	user asking question to the author
	question content

AUTHOR_AMA_ANSWER
	Author in question
	Question associated
	author posting answer
	content
	number of likes
	timestamp
	any Comment to the answer

USER LIST
	list name
	book in the list
	user who owns the list

USER SHELF
	Shelf_Name
	Books in the Shelf
	User who owns the Shelf
	
USER'S READING PROGRESS
	int Current_Page
	Start Date
	Finish Date
	Book related to the progress
	User related to the progress

SETTING
	setting name
	books associated with this setting

CURRENTLY_READING
	User associated wiht this
	book / books
	timestamp of last update
	reading progress

### RELATIONSHIPS
    - BOOK <> AUTHOR : MANY TO MANY
    - BOOK <> EDITION ; 1 TO MANY
    - BOOK <> SERIES : MANY TO 1
    - BOOK <> REVIEW : 1 TO MANY
    - BOOK <> GENRE : MANY TO MANY
    - BOOK <> RATING : 1 TO MANY
    - BOOK <> EDITION : 1 TO MANY
    - USER <> RATING : 1 TO 1 (a user can only give one rating to a book at a time)
    - USER <> REVIEW : 1 TO 1 (a user can only give one rating to a book at a time)
    - REVIEW <> COMMENT : 1 TO MANY
    - USER <> BOOK: MANY TO MANY
    - USER <> AUTHOR: MANY TO MANY (for following authors)
    - USER <> USER: MANY TO MANY (for friendships)
    - SERIES <> AUTHOR: MANY TO 1
    - AWARD <> AUTHOR: MANY TO MANY (awards can also be given to authors)
    - USER <> QUOTES: MANY TO MANY 
    - USER <> USER SHELF: 1 TO MANY (a user can have multiple shelves)
    - USER SHELF <> BOOK: MANY TO MANY (a shelf can have multiple books, a book can be on multiple shelves)
    - USER <> USER READING PROGRESS : 1 TO MANY
    - USER <> USER LIST : 1 TO MANY
    - COMMUNITY REVIEW <> COMMENT REPLY : 1 TO MANY
    - USER <> FRIENDS : 1 TO MANY
    - USER <> RECOMMENDATION: 1 TO MANY
    - BOOK <> RECOMMENDATION: MANY TO MANY
    - USER_SHELF <> RECOMMENDATION: MANY TO MANY
    - RATING <> RECOMMENDATION: MANY TO MANY


### CONSTRAINTS

- __Uniqueness:__
    - BOOK should have unique isbn for each EDITION
    - user-id, award-id, author-id, genre-id, series-id, should all be unique

- __Required:__ 
    - BOOK should at least have an author, genre, description, name, edition information
    - REVIEW and RATING must be associated with a USER and a BOOK
    - USER-SHELF must be associated with USER and have at least one BOOK
    - USER-LIST must be associated with USER and have at least one BOOK

- __Domain:__
    - RATING must be from (1-5)
    - Price should be non-negative
    - FRIEND Status must be (pending, accepted, friends)
    - USER can only give one RATING and one REVIEW to a BOOK at a time
    - QUOTE must have a certain character limit and must be associated with a BOOK

- if USER A is friends with USER B, then USER B is friends with USER A
- If a USER is deleted, all associated reviews, ratings, user-list, user-shelfs must be deleted
- BOOK that is part of a SERIES must also be part of the AUTHOR book list
- if a COMMUNITY REVIEW is deleted, all the COMMENT REPLY must be deleted as well


### ACTIONS
    1. a USER is currently reading a BOOK
    2.  a USER wants to read a BOOK
    3.  a USER have read a BOOK
    4.  a USER adds a BOOK to his USER-LIST
    5.  a USER sends another USER a FREIND-request
    6.  a USER FOLLOWs an AUTHOR
    7.  a USER FOLLOWs an USER
    8.  an AUTHOR has written a book
    9.  a USER posts a REVIEW
    10.  a USER likes a COMMUNITY REVIEW
    11.  a USER posts a COMMENT to COMMUNITY REVIEW
    12.  a USER rates a BOOK
    13.  an AUTHOR adds a BOOK to a SERIES
    14.  a USER recommends a BOOK to their FRIEND
    15. a USER add tags to their REVIEW  