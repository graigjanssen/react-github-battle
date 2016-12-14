var React = require('react');

// Stateless functional component - passed props, renders UI
function ConfirmBattle(props){
  return props.isLoading === true
  ? <p> LOADING! </p>
  : <p> CONFIRM BATTLE! </p>
}

module.exports = ConfirmBattle;
