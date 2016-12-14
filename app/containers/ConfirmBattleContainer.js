var React = require('react');
var githubHelpers = require('../utils/githubHelpers');
var ConfirmBattle = require('../components/ConfirmBattle');

var ConfirmBattleContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function(){
    return {
      isLoading: true,
      playersInfo: []
    }
  },
  componentDidMount: function(){
    // Earlier we put usernames into url
    var query = this.props.location.query;
    // Fetch info from Github using usernames from url, attach to state
    githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
    .then(function(players){
      this.setState({
        isLoading: false,
        playersInfo: [players[0], players[1]]
      })
    }.bind(this)); // resolves issue of inner 'this' not referring to component context
  },
  render: function() {
    return (
      <ConfirmBattle
        isLoading={this.state.isLoading}
        playersInfo={this.state.playersInfo}/>
    )
  }
});

module.exports = ConfirmBattleContainer;
