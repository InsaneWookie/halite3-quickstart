#!/bin/sh

npm run tslint && ../halite --replay-directory replays/ -vvv --width 32 --height 32 "node --require ts-node/register MyBot.ts" "node --require ts-node/register MyBot.ts"
