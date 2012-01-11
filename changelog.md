#Release 1.2 — January 11, 2012

* Fixed a bug with nested columns in the SCSS version by implementing @daffydowden's gridsystem-width() function
* Switched from the `.offset()` mixin to `.push()` and `.pull()` mixins instead, in response to Issue #20
* Added a fix to the sub-pixel rounding bug occurring in fluid layouts in IE6 & 7. See http://tylertate.com/blog/2012/01/05/subpixel-rounding.html
* Applied @dwbm and @designerbrent's fixes to `.offset()` so that it works correctly in both pixel and percentage modes
* Renamed `_gridsystem-width` to `gridsystem-width` on @adamstac's recommendation
* Changed rows from `inline-block` to `block` on @levito's recommendation
* Added .SCSS stylesheets to the examples


#Release 1.1 — October 12, 2011

* Added `.offset()` mixin to indent columns
* Switched from `overflow: hidden;` clearing to the micro clearfix
* Removed clearing from *inside* columns
* Updated `html` and `meta` tags so that examples pass validation without warnings
* Added support for [SCSS](http://sass-lang.com/) with the help of @jpmckinney, @bobbymarko, and @hlidotbe
* Added support for [Stylus](http://learnboost.github.com/stylus/) thanks to @dmmalam