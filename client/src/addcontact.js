import React, { Component } from "react";
import { connect } from "react-redux";
import { addContact } from "./action";
import { Link } from "react-router-dom";

class addcontact extends Component {
  state = {
    name: "",
    email: "",
    tel: null
  };
  render() {
    return (
      <div>
        <center>
          Name:{" "}
          <input
            style={{ marginBottom: "20px", marginTop: "30px" }}
            placeholder="name"
            onChange={e => {
              this.setState({ name: e.target.value });
            }}
          />
          <br />
          Email:{" "}
          <input
            style={{ marginBottom: "20px" }}
            placeholder="email"
            onChange={e => {
              this.setState({ email: e.target.value });
            }}
          />
          <br />
          Tel:{" "}
          <input
            style={{ marginBottom: "20px", marginLeft: "18px" }}
            placeholder="tel"
            onChange={e => {
              this.setState({ tel: e.target.value });
            }}
          />
          <br />
          <Link to="/contactlist">
            <button
              onClick={() => {
                this.props.addContact(this.state);
              }}
            >
              addcontact
            </button>
          </Link>
        </center>
      </div>
    );
  }
}
export default connect(
  null,
  { addContact }
)(addcontact);
