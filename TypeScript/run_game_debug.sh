#!/bin/sh

npm run tslint && ../halite --replay-directory replays/ -vvv --width 32 --height 32 --no-timeout "node --require ts-node/register --inspect-brk=0.0.0.0 MyBot.ts"
