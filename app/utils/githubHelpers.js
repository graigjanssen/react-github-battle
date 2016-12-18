var axios = require('axios'); // npm module installed

// var id = 'my client id';
// var sec = 'my secret id',
// var param = '?client_id=' + id + '&client_secret=' + sec;
// returns a promise
function getUserInfo(username){
  return axios.get('https://api.github.com/users/' + username);
}

function getRepos (username) {
  // fetch usernames repos from github api
  return axios.get('https://api.github.com/users/' + username + '/repos');
}

function getTotalStars(repos) {
  // get all stars user has based on repos we fetched
  // looping through repos, totaling stargazers_count property from each, starting with 0
  return repos.data.reduce(function(prev, curr){
    return prev + curr.stargazers_count;
  }, 0)
}

// Combine two functions above, return results in an object

// Site of tricky bug - missing 'return' before getRepos, so result of this function was undefined
function getPlayerData(player) {
  return getRepos(player.login)
  .then(getTotalStars)
  .then(function(totalStars){
    return {
      followers: player.followers,
      totalStars: totalStars
    }
  })
}
function calculateScores(players) {
  // return array after algorithm to determine winner
  return [
    players[0].followers * 3 + players[0].totalStars,
    players[1].followers * 3 + players[1].totalStars
  ]
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
  },
  battle: function (players) {
    var playerOneData = getPlayerData(players[0]);
    var playerTwoData = getPlayerData(players[1]);
    console.log('p1Data: ', playerOneData);

    return axios.all([playerOneData, playerTwoData])
    .then(calculateScores)
    .catch(function(err){
      console.warn('Error in battle!: ', err);
    })
  }
};

module.exports = helpers;
