var React = require('react');

var AddItem = React.createClass({
  handleSubmit: function(e){
    if(e.keyCode === 13){
      var newItem = this.refs.newItem.getDOMNode().value;
      this.refs.newItem.getDOMNode().value = '';
      this.props.add(newItem);
    }
  },
  render: function(){
    return (
      <div>
        <input type="text" ref="newItem" className="form-control" placeholder="New Item" onKeyDown={this.handleSubmit}  />
      </div>
    )
  }
});

module.exports = AddItem;