var React = require('react');
var PropTypes = React.PropTypes;
var Link = require('react-router').Link;
var styles = require('../styles');

var UserDetails = require('./UserDetails');
var UserDetailsWrapper = require('./UserDetailsWrapper');
var MainContainer = require('./MainContainer');
var Loading = require('./Loading');

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
  // Show loading
  if (props.isLoading === true){
    return (
      <Loading text="Prepare to Battle" speed={100}/>
    )
  }

  // In case of tie
  if (props.scores[0] === props.scores[1]) {
    return (
      <MainContainer>
        <h1>It's a Trap...I mean Tie!</h1>
        <StartOver />
      </MainContainer>
    )
  }

  var winningIndex = props.scores[0] > props.scores[1] ? 0 : 1;
  var losingIndex = winningIndex === 0 ? 1 : 0;
  return (
    <MainContainer>
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
    </MainContainer>
  )
}
Results.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  scores: PropTypes.array.isRequired,
  playersInfo: PropTypes.array.isRequired
}

module.exports = Results;
