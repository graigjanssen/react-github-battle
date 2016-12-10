var React = require('react');
var transparentBg = require('../styles').transparentBg;
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
  onUpdateUser: function(e) {
    this.setState({
      username: e.target.value
    })
  },
  onSubmitUser: function(e) {
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
      <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={transparentBg}>
        <h1>{this.props.route.header}</h1>
        <div className="col-sm-12">
          <form onSubmit={this.onSubmitUser}>
            <div className="form-group">
            <input
              className="form-control"
              placeholder="Github username"
              type="text"
              onChange={this.onUpdateUser}
              value={this.state.username} />
            </div>
            <div className="form-group col-sm-4 col-sm-offset-4">
              <button
                className="btn btn-block btn-success"
                type="submit">
                  Continue
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
})

module.exports = PromptContainer;
