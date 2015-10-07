Number.prototype.timeInSecondsToNice = function () {
  var timeInSeconds = this;
  if ( ! timeInSeconds || ! parseInt(timeInSeconds) ) return '--:--';
  var hours = Math.floor(timeInSeconds / 3600);
  var leftTimeInSeconds = timeInSeconds - hours * 3600;
  var minutes = Math.floor(leftTimeInSeconds / 60);
  var seconds = leftTimeInSeconds - (minutes * 60);
  minutes = ( minutes > 9 ) ? minutes : '0' + minutes;
  seconds = ( seconds > 9 ) ? seconds : '0' + seconds;
  return (hours > 0 ) ? hours + ':' + minutes + ':' + seconds : minutes + ':' + seconds;
};

String.prototype.timeInSecondsToNice = function () {
  return parseInt(this).timeInSecondsToNice();
};
