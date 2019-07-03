const ytdl = require('ytdl-core')

const player = {}

const validate = (msg, callback) => {
  if (!msg.member.voiceChannel) {
    msg.channel.send('You must be in a voice channel.')
  } else {
    callback()
  }
}

exports.play = (msg, url) => {
  validate(msg, () => {
    if (player.dispatcher && player.dispatcher.paused) {
      player.dispatcher.resume()
    } else if (url.trim().length === 0) {
      msg.channel.send('Try `!play <youtube url>`')
    } else if (player.dispatcher) {
      msg.member.voiceChannel.join().then((connection) => {
        player.dispatcher = connection.playStream(ytdl(url, { filter: 'audioonly' }))
      })
    }
  })
}

exports.pause = (msg) => {
  validate(msg, () => player.dispatcher.pause())
}

exports.stop = (msg) => {
  validate(msg, () => player.dispatcher.end())
}

exports.leave = (msg) => {
  validate(msg, () => msg.member.voiceChannel.connection.disconnect())
}

exports.help = (msg) => {
  msg.channel.send('I don\'t understand')
}
