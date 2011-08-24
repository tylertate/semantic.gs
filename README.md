#About
The Semantic Grid System is a modern approach to the CSS grid. It allows you to set column and gutter widths, choose the number of columns, and switch between pixels and percentages, and achieve responsive layouts, all without any ugly .grid_x classes in your markup. It is powered by [LESS.js](http://lesscss.org/) or [Stylus](http://learnboost.github.com/stylus)

It lives on the web at [Semantic.gs](http://semantic.gs/).

#Structure
Stylus / less  versions are available at <less|stylus>/css/grid.<less|styl>
You just need to import the grid via a
```
@import 'path/to/grid.less';
```
or for the Stylus version
```
@import 'path/to/grid.styl'
```

Check the examples out. For the Stylus version there is a script that compiles the *.styl into css for each example. Run via
```
./compile.sh
```
Make sure you have Stylus installed globally
```
npm -g stylus
```

#Issues
If you spot any issues or have ideas for improvement, feel free to [file a ticket](https://github.com/twigkit/semantic.gs/issues) or fork on [GitHub](https://github.com/twigkit/semantic.gs) and issue a pull request.

#License
Licensed under Apache 2.0. See [LICENSE](https://github.com/twigkit/semantic.gs/blob/master/LICENSE.txt)

#Created by
The Semantic Grid System was built by [Tyler Tate](http://twitter.com/tylertate/) at [TwigKit](http://twigkit.com/). Stylus port added by [Dharmesh Malam](http://twitter.com/dmmalam/)