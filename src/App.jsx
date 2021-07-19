import React from 'react';
import UserProfile from './UserProfile';
import UserMenu from './UserMenu';

//щоб могти передати данні з компоненти UserProfile в UserMenu, треба ці данні підняти в компоненту, яка являється батьківською для цих двох компонент

class App extends React.Component {
  state = {
    userData: null,
  };

  componentDidMount() {
    this.fetchUserData(this.props.userId);
  }

  fetchUserData = (userId) => {
    fetch(`https://api.github.com/users/${userId}`)
      .then((response) => response.json())
      .then((userData) => {
        this.setState({
          userData,
        });
      });
  };

  render() {
    return (
      <div className="page">
        <header className="header">
          <UserMenu userData={this.state.userData} />
        </header>
        <UserProfile userData={this.state.userData} />
      </div>
    );
  }
}

export default App;
