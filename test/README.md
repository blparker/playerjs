
## Running the test

It's best to run the test page using a local web server as opposed to running from the file system directly. If you have a local web server already in place,
feel free use that. Otherwise, you can use a simple utility, [node-static](https://github.com/cloudhead/node-static), to serve the assets (which is what I used). You can install the utility using npm.

    npm install node-static

And start up the static server by navigating to the test directory and running:

    static

This will spin up a simple static server and you can load the test by going to the root URL provided by the output of the above command (e.g., http://localhost:8080).
