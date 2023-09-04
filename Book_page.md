# Domain modeling

## [Book Page 1](https://www.goodreads.com/book/show/228665.The_Eye_of_the_World)
## [Book Page 2](https://www.goodreads.com/book/show/25744928-deep-work)


### ENTITIES:

#### BOOK
    - book cover                                                     
    - Name
    - Description
    - First Published
    - GENRE
    - AWARD
    - original title
    - SERIES
    - Setting
    - Characters
    - EDITION
    - count of Currently reading
    - count of want to read
    - shelf status
    - Price
    - Links to buy the book
    
#### AUTHOR
    - Name
    - Book Count
    - FOLLOW
    - description
    - user follow or not

#### FOLLOW
    - who is being followed
    - who is following

#### AWARD
    - award name
    - Description
    - Link
    - Recipient

#### GENRE
    - Name
    - Description
    - Books tagged with a particular genre
    - Most read books in a genre

#### SERIES
    - Series name
    - author
    - description
    - book sequence
    - book

#### EDITION
    - Language
    - Isbn
    - Format
    - Published
    - Publisher

#### RECOMMENDATION (Readers also enjoyed)
    - BOOK
    - AUTHOR
    - average RATING
    - Rating count

#### USER REVIEW
    - user profile picture
    - rating
    - tags
    - content
    - timestamp
    - spoiler flag
    
#### COMMUNITY REVIEW
    - total number of community review for a partiucular book
    - user profile image
    - user display name
    - user Rating
    - which book
    - time stamp
    - content
    - tags
    - like Count
    - comment Count
    - COMMENT Reply
    - spoiler flag

#### COMMENT REPLY
    - user profile image
    - user display name
    - timestamp
    - content
    - spoiler flag
    - parent community review

#### RATING
    - which book
    - Number of 5 stars
    - Number of 4 stars
    - Number of 3 stars
    - Number of 2 stars
    - Number of 1 stars
    - number of total ratings
    - average rating
    - total review count

#### USER
    - username or identifier
    - Name
    - Profile image
    - number of books rated
    - number of books reviewd
    - Friends
    - Currently reading
    - Wants to read
    - Read in the past 
    - activity

#### FRIENDS
    - User 1
    - User 2
    - Status : (pending, accepted, friends)

#### QUOTES
    - Quote Text
    - User who Shared
    - Book related to the quote
    - Time Stamp

#### USER LIST
    - list name
    - book in the list
    - user who owns the list

#### USER SHELF
    - Shelf Name
    - Books in the Shelf
    - User who owns the Shelf
    
#### USER'S READING PROGRESS
    - Current Page
    - Start Date
    - Finish Date
    - Book related to the progress
    - User related to the progress


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


### CONSTRAINTS
- Uniqueness: 
    - BOOK should have unique isbn for each EDITION
    - user-id, award-id, author-id, genre-id, series-id, should all be unique

- Required: 
    - BOOK should at least have an author, genre, description, name, edition information
    - REVIEW and RATING must be associated with a USER and a BOOK
    - USER-SHELF must be associated with USER and have at least one BOOK
    - USER-LIST must be associated with USER and have at least one BOOK

- Domain: 
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