ShowOff presentation for kernel reductions
==========================================

This is a slideshow presentation for the work on kernel reductions among
equivalence relations which can be found at
https://github.com/jfinkels/equivalence.

Copyright
---------

Except where otherwise noted, both the Markdown markup and the content of the
presentation are made available under the terms of the Creative Commons
Attribution-ShareAlike 3.0 license,
http://creativecommons.org/licenses/by-sa/3.0/.

Installing ShowOff
------------------

This is a [ShowOff][1] presentation. To run the presentation, you must first
install ShowOff.

1. Install [Ruby][2] and [RubyGems][3]:

        sudo apt-get install ruby rubygems

2. Install the dependencies for ShowOff (including `libxml2-dev` and
   `libxslt-dev`, which are transitive dependencies of Nokogiri):

        sudo apt-get install libxml2-dev libxslt-dev
        sudo gem install sinatra bluecloth nokogiri json gli parslet

3. Clone my version of ShowOff which supports [MathJax][4]:

        git clone git://github.com/jfinkels/showoff.git
        cd showoff/

4. Build the gem for this modified version of ShowOff:

        gem build showoff.gemspec

5. Install this gem:

        sudo gem install showoff-0.5.1

[1]: https://github.com/schacon/showoff
[2]: http://ruby-lang.org
[3]: http://rubygems.org
[4]: http://mathjax.org

Starting the presentation
-------------------------

After installing ShowOff, run the command

    showoff serve

from this directory. Navigate to http://localhost:9090 in a web browser to
begin the presentation.

Contact
-------

Jeffrey Finkelstein <jeffrey.finkelstein@gmail.com>
