var React = require('react');
var Prompt = require('../components/Prompt');

var PromptContainer = React.createClass({
  // Special way of passing data to component to get route info.  Better alternative to passing routes in as props.  Allows us to access through this.context.router //
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  // Component should track state of 'username', start as empty string
  getInitialState: function() {
    return {
      username: ''
    }
  },
  // Tied to input field, every time value changes, so will state.
  handleUpdateUser: function(e) {
    this.setState({
      username: e.target.value
    })
  },
  handleSubmitUser: function(e) {
    e.preventDefault();
    var username = this.state.username; // grab whatever username was on submit
    // Reset input field
    this.setState({
      username: ''
    })
    // Conditions to determine routing
      // If we're on player one page, the url will have :playerOne, will make below true
    if (this.props.routeParams.playerOne){
      this.context.router.push({
        pathname: '/battle',
        query: {
          playerOne: this.props.routeParams.playerOne,
          playerTwo: this.state.username
        }
      })
    } else {
      // go to player two
      // router.push can be passed object as above, or just string.
      // this will make routeParams equal to value of input field.
      this.context.router.push('/playerTwo/' + this.state.username);
    }
  },
  render: function() {
    return (
      <Prompt
        onSubmitUser={this.handleSubmitUser}
        onUpdateUser={this.handleUpdateUser}
        header={this.props.route.header}
        username={this.state.username}/>
    )
  }
})

module.exports = PromptContainer;
