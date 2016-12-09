var React = require('react');

// {this.props.children} renders whatever is inside the <Main /> component.  Router will choose which child route to render based on url.
var Main = React.createClass({
  render: function(){
    return (
      <div>
        Hello from Main.
        {this.props.children}
      </div>
    )
  }
})

module.exports = Main;
