const ytdl = require('ytdl-core')
const player = {}

exports.play = (msg, args) => {
  if (!msg.member.voiceChannel) {
    msg.channel.send('You must be in a voice channel.')
  } else if (player.dispatcher && player.dispatcher.paused) {
    player.dispatcher.resume()
  } else {
    if (args.length === 0) {
      msg.channel.send('Nothing is playing. Try `!play <video name>`')
    } else {
      msg.member.voiceChannel.join().then(connection =>
        player.dispatcher = connection.playStream(ytdl(args[0], { filter: 'audioonly' }))
      )
    }
  }
}

exports.pause = msg => {
  if (!msg.member.voiceChannel) {
    msg.channel.send('You must be in a voice channel.')
  } else {
    player.dispatcher.pause()
  }
}

exports.stop = msg => {
  if (!msg.member.voiceChannel) {
    msg.channel.send('You must be in a voice channel.')
  } else {
    player.dispatcher.end()
  }
}

exports.leave = msg => {
  if (!msg.member.voiceChannel) {
    msg.channel.send('You must be in a voice channel.')
  } else {
    msg.member.voiceChannel.connection.disconnect()
  }
}