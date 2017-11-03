# bootstrap4 #

This is based on the [Bootstrap theme](https://github.com/pelican-themes/bootstrap "Bootstrap"), by [getpelican](https://github.com/getpelican).

## changelog ##

11/03/2016:

- *Updated to Bootstrap v4.0.0.beta.2.*
- *Moved sidebar to right.*
- *Broke sidebar into sections: blogroll, social media links, and optional authors, categories, and tags.*
- *Archives moved to top navigation menu, far right*
- *no categories, authors or tags pages used, no such pages listed in top navigation menu*
- *Replaced home link in top navigation menu with image link to home page.*
- *added arias for accesibility and screen readers.*


## features ##

### general ###

- Where possible, the default behaviour of the bootstrap 4 theme has been followed.
- Additionally the theme has been designed for accessibility for the visally impaired and for screen readers.

### caveats ###

This means the site may have difficulty being viewed on small or narrow screens.

### new settings ###

Your pelican settings file will require the following additional settings:

`SITE_DESCRIPTION = 'description of the website'.`

`SHOW_AUTHORS = False`, Determines if the author, and an appropriate link, for each indexed article, is shown in the metadata. This only applies if the article in question has an author listed, in the head metadata.

Additionally the following settings are optional:

`SHOW_AUTHORS_SIDEBAR = False`, Show a sidebar card listing links for authors of articles. Note that if all articles only ever have one author, an Author sidebar will never be shown anyway.

`SHOW_CATEGORIES_SIDEBAR = False`, Show a sidebar card listing links for categories.

`SHOW_TAGS_SIDEBAR = False`, Show a sidebar card listing links for tags.


## Screenshot ##

**screenshot to be updated. This is the one from pelican-themes/bootstrap**
![screenshot](screenshot.png)
