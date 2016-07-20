'use strict';

module.exports = {
  init: (controller) => {
    controller.hears('<!channel|<!group|<!here|<!everyone', 'ambient', (bot, message) => {
      let match = message.match[0].replace('<!', '@');

      bot.api.reactions.add({name: 'crying_cat_face', channel: message.channel, timestamp: message.ts});

      bot.startPrivateConversation({user: message.user}, function(err, privateConvo) {
        if (!err) {
          privateConvo.say(
            `Howdy! I noticed you used \`${match}\` in the channel. That can wake people up, disturb them, or can be a bit annoying.
Please refrain from \`@channel\`, \`@here\`, \`@everyone\`, or \`@group\`. Thanks!`
          );
        }
      });
    });
  },

  help: {
    command: 'hush',
    text: 'I will listen in on any channel you invite me to, if anyone uses `(at)here`, `(at)channel`, `(at)group`, or `(at)everyone` ' +
      'I will politely DM them to let them know that\'s not the best idea.'
  }
};
