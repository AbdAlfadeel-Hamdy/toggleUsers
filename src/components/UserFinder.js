import React, { Fragment } from "react";

import Users from "./Users";
import styles from "./UserFinder.module.css";
import UsersContext from "../store/users-context";

class UserFinder extends React.Component {
  static contextType = UsersContext;
  state = {
    filteredUsers: this.context.users,
    searchTerm: "",
  };

  componentDidUpdate(_, prevState) {
    if (prevState.searchTerm === this.state.searchTerm) return;
    this.setState({
      filteredUsers: this.context.users.filter((user) =>
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
