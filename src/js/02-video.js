import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);


player.on('timeupdate', throttle(playTrack, 1000));
// player.on('timeupdate', function(e) {
//   console.log('timeupdate',e)
// })

// function playTrack(www) {
function playTrack({ seconds }) {
  localStorage.setItem('videoplayer-current-time', seconds);
}

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
