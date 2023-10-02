# Exercitia Latina

This repository contains the source code for the Exercitia Latina website. (without the actual data)


Although this was originally made for LLPSI, this is basically a "fill in the blanks" website, so it can be used for any such use case with practically no code changes.

## Development

For development, you will need to use the dummy-backend. (A simple express server that serves the dummy data)

And create a `.env` file (based on `.env.example`)

## Deployment

This project uses next.js static export, so you can deploy it anywhere that supports static sites.

You will also need to host the chapters data somewhere. and it needs to be accessible at build time. (at API_URL in `.env`)