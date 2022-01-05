import React from "react";

class SearchBar extends React.Component {
  handleChange() {
    this.props.onUserInput(this.refs.filterTextInput.value);
  }
  render() {
    return (
      <div>
        <input
          type="text"
          className="table-searchbar"
          placeholder="Search..."
          value={this.props.filterTextInput}
          ref="filterTextInput"
          onChange={this.handleChange.bind(this)}
        />
      </div>
    );
  }
}

export default SearchBar;
