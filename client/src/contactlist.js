import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getcontacts, deleteContact } from "./action";

class contactlist extends Component {
  componentWillMount() {
    this.props.getcontacts();
  }
  render() {
    return (
      <div className="card">
        {this.props.contact.map((el, i) => (
          <div
            key={i}
            style={{
              border: "2px solid black",
              width: "300px",
              margin: "20px",
              textAlign: "center"
            }}
          >
            <h1>Name: {el.name}</h1>
            <h2>Email: {el.email} </h2>
            <h3>Tel: {el.tel}</h3>

            <Link to={`/updatecontact/${el._id}`}>
              <button>Update</button>
            </Link>
            <button
              onClick={() => {
                this.props.deleteContact(el._id);
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    );
  }
}
export default connect(
  state => {
    return { contact: state.contact };
  },
  { getcontacts, deleteContact }
)(contactlist);
