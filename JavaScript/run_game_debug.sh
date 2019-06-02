#!/bin/sh

../halite --replay-directory replays/ -vvv --width 32 --height 32 --no-timeout "node --inspect-brk=0.0.0.0 MyBot.js" "node MyBot.js"
