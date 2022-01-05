import React, { Component } from "react";

import ContentTable from "../components/tableComponents/contentTable";
import SearchBar from "../components/tableComponents/searchBar";

class EditableTable extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.filterText = "";
    this.state.contents = [
      {
        id: 1,
        name: "Wasibi Hiroshima",
        quantity: 21,
        email: "wasib@email.com",
        phone: "08138503549"
      },
      {
        id: 2,
        name: "Alibert Hussan",
        quantity: 19,
        email: "bert@email.com",
        phone: "09067588937"
      },
      {
        id: 3,
        name: "Sahid Munir",
        quantity: 16,
        email: "munir@email.com",
        phone: "07039433980"
      },
      {
        id: 4,
        name: "Ali Abubakar",
        quantity: 25,
        email: "abu12@email.com",
        phone: "08023950534"
      },
      {
        id: 5,
        name: "Alice Samir",
        quantity: 19,
        email: "alicesamir@email.com",
        phone: "09067588937"
      },
      {
        id: 6,
        name: "Ruth Bright",
        quantity: 16,
        email: "ruth@email.com",
        phone: "07039433980"
      },
      {
        id: 7,
        name: "Light Sunny",
        quantity: 25,
        email: "sunny@email.com",
        phone: "08023950534"
      }
    ];
  }

  handleUserInput(filterText) {
    this.setState({ filterText: filterText });
  }
  handleRowDel(content) {
    var index = this.state.contents.indexOf(content);
    this.state.contents.splice(index, 1);
    this.setState(this.state.contents);
  }

  handleAddEvent(evt) {
    var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
    var content = {
      id: id,
      name: "",
      quantity: 0,
      email: "",
      phone: ""
    };
    this.state.contents.push(content);
    this.setState(this.state.contents);
  }

  handleContentTable(evt) {
    var item = {
      id: evt.target.id,
      name: evt.target.name
      // value: evt.target.value
    };
    var contents = this.state.contents.slice();
    var newContents = contents.map(function(content) {
      for (var key in content) {
        if (key == item.name && content.id == item.id) {
          content[key] = item.value;
        }
      }
      return content;
    });
    this.setState({ contents: newContents });
    //  console.log(this.state.contents);
  }
  render() {
    return (
      <div className="table-margin">
        <SearchBar
          filterText={this.state.filterText}
          onUserInput={this.handleUserInput.bind(this)}
        />
        <ContentTable
          onContentTableUpdate={this.handleContentTable.bind(this)}
          onRowAdd={this.handleAddEvent.bind(this)}
          onRowDel={this.handleRowDel.bind(this)}
          contents={this.state.contents}
          filterText={this.state.filterText}
        />
      </div>
    );
  }
}

export default EditableTable;
