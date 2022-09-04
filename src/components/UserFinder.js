import React, { Fragment } from "react";

import Users from "./Users";
import styles from "./UserFinder.module.css";
const DUMMY_USERS = [
  { id: "u1", name: "Max" },
  { id: "u2", name: "Manuel" },
  { id: "u3", name: "Julie" },
];
class UserFinder extends React.Component {
  state = {
    filteredUsers: DUMMY_USERS,
    searchTerm: "",
  };

  componentDidUpdate(_, prevState) {
    if (prevState.searchTerm === this.state.searchTerm) return;
    this.setState({
      filteredUsers: DUMMY_USERS.filter((user) =>
        user.name.includes(this.state.searchTerm)
      ),
    });
  }

  searchChangeHandler = (event) => {
    this.setState({ searchTerm: event.target.value });
  };
  render() {
    return (
      <Fragment>
        <div className={styles.finder}>
          <input type="search" onChange={this.searchChangeHandler} />
        </div>
        <Users users={this.state.filteredUsers} />
      </Fragment>
    );
  }
}

export default UserFinder;
