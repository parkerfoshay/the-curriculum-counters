# Count to One Million

A slackbot built for MongoDB's Skunkworks 2021 Hackathon.

## Overview

Count to one million, one number at a time.

This slack bot encourages users to collectively count to one million. It sits silently in the background until the `/count` command is issued or a user says a number in a given channel.

Users count upwards from zero to one million, one number at a time. If user makes a mistake, the bot will give them a fun fact about the number they were supposed to count from.

## Purpose and Motivation

The bot is designed to encourage slack members to collaborate on a very simple, yet noble task. In the event that someone makes a mistake, the bot will provide the user with a fun fact about the number they were supposed to count from.

## Usage

```
/count [number] # Count to the given number. Provides the current count if no number is given.
/fact [number] # Provides a fun fact about the given number.
```

## Technical Stack

Slackbot built using Node.js and the [Slack API](https://api.slack.com/). Additionally the bot uses the following packages:

- [Bolt](https://slack.dev/bolt-js/concepts)
- [dotenv](https://github.com/motdotla/dotenv)
- [Axios](https://github.com/axios/axios)
- [Numbers API](https://numbersapi.com/)
- [Redis](https://github.com/redis/node-redis) (for caching the count and allowing the count persist across restarts)
- [Digital Ocean Droplet](https://www.digitalocean.com/) (deployment)
