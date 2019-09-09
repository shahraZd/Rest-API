import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getcontacts, updateContact } from "./action";

class updatecontact extends Component {
  state = {
    contact: {}
  };

  componentDidMount = () => {
    this.props.getcontacts();

    const arr = this.props.contact.filter(el => el._id === this.props.id);
    let contact = arr[0];
    this.setState({
      contact
    });
  };

  render() {
    return (
      <div>
        <center>
          Name:
          <input
            style={{ marginBottom: "20px", marginTop: "30px" }}
            placeholder="name"
            value={this.state.contact && this.state.contact.name}
            onChange={e => {
              e.preventDefault();
              this.setState({
                contact: { ...this.state.contact, name: e.target.value }
              });
            }}
          />
          <br />
          Email:{" "}
          <input
            style={{ marginBottom: "20px" }}
            placeholder="email"
            value={this.state.contact && this.state.contact.email}
            onChange={e => {
              e.preventDefault();
              this.setState({
                contact: { ...this.state.contact, email: e.target.value }
              });
            }}
          />
          <br />
          Tel:{" "}
          <input
            style={{ marginBottom: "20px", marginLeft: "18px" }}
            placeholder="tel"
            value={this.state.contact && this.state.contact.tel}
            onChange={e => {
              e.preventDefault();
              this.setState({
                contact: { ...this.state.contact, tel: e.target.value }
              });
            }}
          />
          <br />
          <Link to="/contactlist">
            <button
              onClick={() => {
                this.props.updateContact(this.state.contact._id, {
                  name: this.state.contact.name,
                  email: this.state.contact.email,
                  tel: this.state.contact.tel
                });
              }}
            >
              Update contact
            </button>
          </Link>
        </center>
      </div>
    );
  }
}
export default connect(
  state => {
    return { contact: state.contact };
  },
  { getcontacts, updateContact }
)(updatecontact);
