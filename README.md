# compose example

this repo is an example of how to use serverless compose w/ four example repos inside to test deployment

## setup

to set this up, you will need to install node modules for each repo:

    yarn
    cd backend && yarn
    cd backend-without-domain && yarn
    cd backend-with-layers && yarn
    cd backend-with-scripts && yarn

you will also need to setup:

- an aws profile under the title `serverless-profile` (with the adequate iam roles attached to that user)
- the domain you intend to deploy to under the `DOMAIN` environment variable

## running

you can run the deploy by running the following:

    yarn serverless deploy
