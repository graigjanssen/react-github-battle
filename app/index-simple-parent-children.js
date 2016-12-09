var USER_DATA = {
  username: 'graigjanssen',
  imageURL: 'https://pbs.twimg.com/profile_images/496533241159880704/M3ty9a7N.jpeg',
  likes: ['Candy', 'Cookies', 'Cartoons', 'Other Things that Start With C']
}

var React = require('react');
var ReactDOM = require('react-dom');

// 3 Child Components - Each renders one thing, will be passed data from parent
var ProfilePic = React.createClass({
  render: function(){
    return (
      <img src={this.props.imageURL}/>
    )
  }
})

var ProfileName = React.createClass({
  render: function(){
    return (
      <h3>{this.props.username}</h3>
    )
  }
})

var ProfileList = React.createClass({
  render: function(){
    var listItems = this.props.likes.map(function(like){
      return <li>{like}</li>
    })
    return (
      <ul>
        {listItems}
      </ul>
    )
  }
})
// Parent component - will be passed data when invoked
var ProfileContainer = React.createClass({
  render: function(){
    return (
      <div>
        <ProfilePic imageURL={this.props.user.imageURL}/>
        <ProfileName username={this.props.user.username}/>
        <ProfileList likes={this.props.user.likes}/>
      </div>
    )
  }
})

ReactDOM.render(
  <ProfileContainer user={USER_DATA} />,
  document.getElementById('app')
)
