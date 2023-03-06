//Adding lodash throttle from library
import { throttle } from 'lodash';

//Initializing pre-existing player
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const iframePlayer = new Vimeo.Player(iframe);

// Adding key to storage
const STORAGE_KEY = 'videoplayer-current-time';

//Saving timeupdate in storage with key and tracking timeupdate with on() metod
const onPlay = function (timeupdate) {
  const playedTime = JSON.stringify(timeupdate);
  localStorage.setItem(STORAGE_KEY, playedTime);
};
//Using lodash.throttle to update storage once for one secound
player.on('timeupdate', throttle(onPlay, 1000));
//Using setCurrentTime() metod to reload page and play video from saved time
function afterReload() {}
