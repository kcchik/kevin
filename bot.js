const Discord = require('discord.js')

const client = new Discord.Client()

const { prefix, token } = require('./config.json')

const player = require('./player')

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on('message', (msg) => {
  if (msg.content.charAt(0) === prefix) {
    const args = msg.content.split(' ')
    const cmd = args.shift().toLowerCase()
    switch (cmd) {
      case '!play':
        player.play(msg, args)
        break
      case '!pause':
        player.pause(msg)
        break
      case '!stop':
        player.stop(msg)
        break
      case '!leave':
        player.leave(msg)
        break
      default:
        player.help(msg)
        break
    }
  }
})

client.login(token)
