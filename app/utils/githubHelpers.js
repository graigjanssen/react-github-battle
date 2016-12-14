var axios = require('axios'); // npm module installed

// var id = 'my client id';
// var sec = 'my secret id',
// var param = '?client_id=' + id + '&client_secret=' + sec;
// returns a promise
function getUserInfo(username){
  return axios.get('https://api.github.com/users/' + username);
}
var helpers = {
  // map returns array of promises
  getPlayersInfo: function(players) { // takes array of two players
    return axios.all(players.map(function(username) {
      return getUserInfo(username);
    })).then(function(info){
      return info.map(function(user){
        return user.data;
      })
    }).catch(function(err){ // Good practice to add catches at end of 'promise chain'
      console.warn('Error in getPlayersInfo', err);
    })
  }
};

module.exports = helpers;
