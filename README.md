# empty sassify #

Simple middleware and method for Browserify to remove [Sass](http://sass-lang.com) imports from
js files.

## Welcome to the jungle ##

This file strips the contents of any css, sass or scss file that browserify
runs into via an import statement. This is because this is handled by the new
webpack setup BUT we still run our tests through browserify and browserify doesn't
know what to do with imported style files. This repo will be removed and the
tests will be run with webpack and implemented in follow-up ticket.
https://themis.atlassian.net/browse/CLIO-47334

Love,

FEI
