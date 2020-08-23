# Intro

Simple site for nearhear.app.

# Running it in Docker

Build docker image
`docker build . -t nearhear-site`

Run it _(SERVER_HOST and SERVER_PORT are optional. They will default to the values below if not provided.)_:

`docker run -e SERVER_HOST=0.0.0.0 -e SERVER_PORT=8080 -p 8080:8080 nearhear-site`

# Running it locally

Install the https-localhost package:

`npm i -g --only=prod https-localhost`

_(Mac and Linux users might need to install some packages. Check out the https-localhost npm page for more info.)_

Then run the server:

`server .`
