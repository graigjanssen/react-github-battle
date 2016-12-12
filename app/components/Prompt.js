// Presentation: responsible for rendering UI, while container handles logic.

var React = require('react');
var PropTypes = React.PropTypes;
var transparentBg = require('../styles').transparentBg;

// Refactored from React component.  Since it is just rendering UI, can make it a standard function.  Instead of accessing props with 'this', just use props argument.
function Prompt(props) {
  return (
    <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={transparentBg}>
      <h1>{props.header}</h1>
      <div className="col-sm-12">
        <form onSubmit={props.onSubmitUser}>
          <div className="form-group">
          <input
            className="form-control"
            placeholder="Github username"
            type="text"
            onChange={props.onUpdateUser}
            value={props.username} />
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

// Refactored, was part of Prompt component, now we attach as properties of function
Prompt.propTypes = {
  // PropTypes specify what props are expected to be passed to this component and their type.  Serves as documentation to aid other developers, improves debugging.
  header: PropTypes.string.isRequired,
  onUpdateUser: PropTypes.func.isRequired,
  onSubmitUser: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired
}

module.exports = Prompt;
