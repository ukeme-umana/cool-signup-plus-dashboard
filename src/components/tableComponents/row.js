import React, { Component } from "react";
import EditableCell from "./cell";

class ContentRow extends React.Component {
  onDelEvent() {
    this.props.onDelEvent(this.props.content);
  }
  render() {
    return (
      <tr className="eachRow">
        <EditableCell
          onContentTableUpdate={this.props.onContentTableUpdate}
          cellData={{
            type: "name",
            value: this.props.content.name,
            id: this.props.content.id
          }}
        />
        <EditableCell
          onContentTableUpdate={this.props.onContentTableUpdate}
          cellData={{
            type: "quantity",
            value: this.props.content.quantity,
            id: this.props.content.id
          }}
        />
        <EditableCell
          onContentTableUpdate={this.props.onContentTableUpdate}
          cellData={{
            type: "email",
            value: this.props.content.email,
            id: this.props.content.id
          }}
        />
        <EditableCell
          onContentTableUpdate={this.props.onContentTableUpdate}
          cellData={{
            type: "phone",
            value: this.props.content.phone,
            id: this.props.content.id
          }}
        />
        <td className="del-cell">
          <input
            type="button"
            onClick={this.onDelEvent.bind(this)}
            value="X"
            className="del-btn"
          />
        </td>
      </tr>
    );
  }
}

export default ContentRow;
