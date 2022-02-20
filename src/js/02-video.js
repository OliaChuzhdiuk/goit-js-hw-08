import Player from '@vimeo/player';
import throttle from 'lodash.throttle'

const iframe = document.querySelector('iframe');

const player = new Player(iframe);
const STORAGE_KEY = 'videoplayer-current-time';

const previousVideo = localStorage.getItem(STORAGE_KEY);

if (previousVideo) {
    player.setCurrentTime(Number(previousVideo));
}

player.on('play', function(event) {
    console.log(event);
});

player.on('timeupdate', throttle(onTimeUpdate, 1000));

function onTimeUpdate(event) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(event.seconds));
}