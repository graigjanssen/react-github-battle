var React = require('react');
var PropTypes = React.PropTypes;
var Link = require('react-router').Link;
var styles = require('../styles');

var UserDetails = require('./UserDetails');
var UserDetailsWrapper = require('./UserDetailsWrapper');

function puke(obj) {
  return <pre>{JSON.stringify(obj, null, ' ')}</pre>
}
// Private SFC (Stateless Functional Component) - When you don't expect other files to need it but makes main component more succinct, DRYer

function StartOver() {
  return (
    <div className="col-sm-12" style={styles.space}>
      <Link to="/playerOne">
        <button className="btn btn-danger">Start Over</button>
      </Link>
    </div>
  )
}

function Results(props) {
  // In case of tie
  if (props.scores[0] === props.scores[1]) {
    return (
      <div className="jumbotron col-sm-12 text-center">
        <h1>It's a Trap...I mean Tie!</h1>
        <StartOver />
      </div>
    )
  }

  var winningIndex = props.scores[0] > props.scores[1] ? 0 : 1;
  var losingIndex = winningIndex === 0 ? 1 : 0;
  return (
    <div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
      <h1>Results</h1>
      <div className="col-sm-8 col-sm-offset-2">
        <UserDetailsWrapper header="Winner">
          <UserDetails score={props.scores[winningIndex]} info={props.playersInfo[winningIndex]}/>
        </UserDetailsWrapper>
        <UserDetailsWrapper header="Loser">
          <UserDetails score={props.scores[losingIndex]} info={props.playersInfo[losingIndex]}/>
        </UserDetailsWrapper>
      </div>
      <StartOver />
    </div>
  )
}
Results.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  scores: PropTypes.array.isRequired,
  playersInfo: PropTypes.array.isRequired
}

module.exports = Results;
