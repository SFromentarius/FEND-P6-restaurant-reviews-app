# FEND Project 7 
## Restaurant Reviews - Stage 1
For the **Restaurant Reviews** projects, we had to will incrementally convert a static webpage to a mobile-ready web application. In **Stage One**, we took a static design that lacks accessibility and converted the design to be responsive on different sized displays and accessible for screen reader use. We also added a service worker to begin the process of creating a seamless offline experience for our users.

### How to launch the website?

1. Clone the repository, and then, in this folder, start up a simple HTTP server to serve up the site files on your local computer. Python has some simple tools to do this, and you don't even need to know Python. For most people, it's already installed on your computer. 

2. In a terminal, check the version of Python you have: `python -V`. 
- If you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 8000` (or some other port, if port 8000 is already in use.) 
- For Python 3.x, you can use `python3 -m http.server 8000`. 
- If you don't have Python installed, navigate to Python's [website](https://www.python.org/) to download and install the software.

3. With your server running, visit the site: `http://localhost:8000` : here is the website!

### External references:

This repository uses [leafletjs](https://leafletjs.com/) with [Mapbox](https://www.mapbox.com/). 

As external course content, you can take a look at [Paul Kinlan](https://developers.google.com/web/resources/contributors/paulkinlan)'s article about [Adding a Service Worker and Offline into your Web App](https://developers.google.com/web/fundamentals/codelabs/offline/).
