import React from "react";

export default function Table(props) {
  return <table {...props} />;
}

Table.TH = function TH(props) {
  return <th {...props} />;
};

Table.TR = function TR(props) {
  return <tr {...props} />;
};

Table.TD = function TD(props) {
  return <td {...props} />;
};
