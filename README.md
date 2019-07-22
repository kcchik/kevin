# Leman

Leman is a tiny Discord bot that plays YouTube audio.

### Requirements
* Node.js
* Yarn
* Discord

### Installing
Create a bot
1. Go to https://discordapp.com/developers/applications/ and click `New Application`
2. Give the bot a name and click `Create`
3. Go to the Bot tab on the left panel and click `Add Bot`
4. A token should have been generated, save this somewhere
5. Go to the General Information tab on the left panel and copy the `CLIENT ID`
6. To add to a server, replace `CLIENT_ID` with the id you just copied to https://discordapp.com/oauth2/authorize?&client_id=CLIENT_ID&scope=bot&permissions=8


Create and populate the `.env` file
```sh
cp .env.template .env
```

Install dependencies and start
```sh
yarn

yarn start
```
