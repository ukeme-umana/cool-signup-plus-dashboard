import React from "react";
import ContentRow from "./row";

class ContentTable extends React.Component {
  render() {
    var onContentTableUpdate = this.props.onContentTableUpdate;
    var rowDel = this.props.onRowDel;
    // this ensures that filter text is not case sensitive using regex
    var filterText = new RegExp(this.props.filterText, "i");
    
    // this is for the content that is filtered
    var filteredContent =
    // provided our content is not empty 
      this.props.contents.length > 0 &&
      //and filter method is called on this.props.content which has the data
      //and returns the name in the array that matches the regular expression filter text.
      this.props.contents
        .filter(content => {
          return content.name.match(filterText);
        })
        //the filtered array that is returned (note .filter returns an array)
        //that array is then mapped through to return the content row that meets the requirement.
        .map(content => {
          return (
            <ContentRow
              onContentTableUpdate={onContentTableUpdate}
              content={content}
              onDelEvent={rowDel.bind(this)}
              key={content.id}
            />
          );
        });
// 
    var content = this.props.contents.map(content => {
      return (
        <ContentRow
          onContentTableUpdate={onContentTableUpdate}
          content={content}
          onDelEvent={rowDel.bind(this)}
          key={content.id}
        />
      );
    });

    return (
      <div>
        <button
          type="button"
          onClick={this.props.onRowAdd}
          className="btn btn-success pull-right add-btn"
        >
          Add
        </button>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Quantity</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {filteredContent.length > 0 ? filteredContent : content}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ContentTable;
