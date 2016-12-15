var React = require('react');
var PropTypes = React.PropTypes;

function Results(props) {
  return (
    <div></div>
  )
}
Results.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  scores: PropTypes.array.isRequired
}

module.exports = Results;
