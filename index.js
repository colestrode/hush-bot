'use strict';

require('skellington')({
  slackToken: process.env.SLACK_API_TOKEN,
  plugins: [require('./lib/hush')]
});
