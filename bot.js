require('dotenv').config()

const Discord = require('discord.js')

const client = new Discord.Client()

const player = require('./player')

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on('message', (msg) => {
  if (msg.content.charAt(0) === '!') {
    const args = msg.content.slice(1).content.split(/(?<=^\S+)\s/)
    switch (args[0].toLowerCase()) {
      case 'play':
        player.play(msg, args[1])
        break
      case 'pause':
        player.pause(msg)
        break
      case 'stop':
        player.stop(msg)
        break
      case 'leave':
        player.leave(msg)
        break
      default:
        player.help(msg)
        break
    }
  }
})

client.login(process.env.DISCORD_API_TOKEN)
