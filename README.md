# bootstrap4 #

This was inspired by the [Bootstrap theme](https://github.com/pelican-themes/bootstrap), by [getpelican](https://github.com/getpelican).

This theme relies on Bootstrap 4 and Jquery libraries.

## changelog ##


12/20/2017:
- *Added capability to override color scheme with custom stylesheet.*

12/11/2017:

- *Working when optional settings are missing.*
- *New options to place category, tag, author and blogroll menus in navbar.*
- *Social media now only icons on footer.*

11/29/2017:

- *Check and Test against mock site, preparation for beta.*
- *Test behaviour if new optional settings are missing.*

11/03/2017:

- *Updated to Bootstrap v4.0.0.beta.2.*
- *Moved sidebar to right.*
- *Broke sidebar into sections: blogroll, social media links, and optional authors, categories, and tags.*
- *Archives moved to top navigation menu, far right*
- *no categories, authors or tags pages used, no such pages listed in top navigation menu*
- *Replaced home link in top navigation menu with image link to home page.*
- *added arias for accessibility and screen readers.*
- *added social icons for links referring meetup.com, anaconda.org and instagram.com. Updated reference for del.icio.us*


## features ##

### general ###

- Where possible, the default behaviour of the bootstrap 4 theme has been followed.
- Additionally the theme should be reasonably accessible for the visually impaired and for screen readers.

### caveats ###

There may be difficulty viewing the site on small or narrow screens.

### new optional settings ###

Your pelican settings file may use the following additional settings:

`SITE_DESCRIPTION = 'description of the website'`, for the description meta tag.

`SHOW_AUTHORS = False`, Determines if the author, and an appropriate link, for each indexed article, is shown in the metadata. This only applies if the article in question has an author.

`SHOW_AUTHORS_SIDEBAR = False`, Show a sidebar card listing links for authors of articles. Note that if all articles only ever have one author, an Author sidebar will never be shown anyway.

`SHOW_CATEGORIES_SIDEBAR = False`, Show a sidebar card listing links for categories.

`SHOW_TAGS_SIDEBAR = False`, Show a sidebar card listing links for tags.

`SHOW_BLOGROLL_SIDEBAR = False`, Show a sidebar card listing links for the blogroll.

`SHOW_AUTHORS_SUBMENU_IN_NAVBAR`, Show menu in top navbar with list of authors.

`SHOW_TAGS_SUBMENU_IN_NAVBAR`, Show menu in top navbar with list of tags.

`SHOW_CATEGORIES_SUBMENU_IN_NAVBAR`, Show menu in top navbar with list of categories.

`SHOW_BLOGROLL_SUBMENU_IN_NAVBAR`, Show menu in top navbar containing the blogroll.

### color / style customisation ###

It is possible to set custom colors or stylesheet settings for your theme.

Add the following setting into your settings file:

`CUSTOM_THEME_COLORS = 'path to custom css file in content directory'`. the path must have no leading slash. It is recommended the path use a subdirectory within your EXTRAS list.

The css file can use the following classes:

- `.top-menu-colors`						top menu in general
- `.navbar-toggle-colors`					navbar toggler
- `.top-menu-link-colors`					any link or link-like item in the top menu
- `.top-dropdown-link-colors`				any link or link-like item in a dropdown in the top menu
- `.content-main-colors`					the main content area in general
- `.bottom-footer-background-colors`		bottom footer in general
- `.bottom-footer-link-colors`				bottom footer links
- `.bottom-footer-text-colors`				bottom footer text
- `.sidebar-card-header-colors`				toggler headings for sidebars
- `.sidebar-card-body-colors`				content sections for sidebars
- `.sidebar-card-link-colors`				individual links within content sections for sidebars
- `.card-metadata-colors`					metadata sections for articles, article index, and for archives, in general
- `.card-metadata-link-colors`				links within metadata sections
- `.page-link-colors`						links within pagination sections
- `.page-item-colors`						individual pagination sections

These classes are mostly intended to override colors. Some classes (such as for links and text) are better used to override foreground colors only. Link classes could also 
be used to change link selector styles.

The css file can also override bootstrap4 classes, but this is not recommended - you do so at your own risk.

## Screenshot ##

![screenshot](screenshot.png)
