import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const LOCALSTORAGE_KEY = 'videoplayer-current-time';

const vimeoPlayer = new Player(iframe);

vimeoPlayer.on(
  'timeupdate',
  throttle(event => {
    localStorage.setItem(LOCALSTORAGE_KEY, event.seconds);
  }, 1000)
);

function setTimeFromLocalStorage() {
  const seconds = localStorage.getItem(LOCALSTORAGE_KEY);
  if (seconds) {
    vimeoPlayer.setCurrentTime(localStorage.getItem(LOCALSTORAGE_KEY));
  }
}

setTimeFromLocalStorage();
