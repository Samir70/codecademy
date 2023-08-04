import React from "react";
import { fetchUserData, cancelFetch } from "./dataFetcher";
import { Userlist } from "./Userlist";

export class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userData: null };
  }
  loadUserData() {
    this.setState({ userData: null });
    this.fetchID = fetchUserData(this.props.username, (userData) => {
      this.setState({ userData });
    });
    // console.log("loadUD:", {data: this.state.userData})
  }
  componentDidMount() {
    this.loadUserData();
  }
  componentWillUnmount() {
    cancelFetch(this.fetchID)
  }
  componentDidUpdate(prevProps) {
    if (this.props.username !== prevProps.username) {
      cancelFetch(this.fetchID)
      this.loadUserData()
    }
  }
  render() {
    const isLoading = this.state.userData === null;

    let className = "Profile";
    if (isLoading) {
      className += " loading";
    }
    console.log({ isLoading, data: this.state.userData })
    let name = isLoading ? "Loading..." : this.state.userData.name;
    let bio = isLoading ? "Loading bio..." : this.state.userData.bio;
    let friends = isLoading ? [] : this.state.userData.friends;
    return (
      <div className={className}>
        <div className="profile-picture">
          {!isLoading && <img src={this.state.userData.profilePictureUrl} alt="" />
          }
        </div>
        <div className="profile-body">
          <h2>{name}</h2>
          <h3>@{this.props.username}</h3>
          <p>{bio}</p>
          <h3>My friends</h3>
          <Userlist usernames={friends} onChoose={this.props.onChoose} />
        </div>
      </div>
    );
  }
}
