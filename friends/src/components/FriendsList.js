import React from 'react';
import Friend from './Friend';
import friends from './friends';
// import './App.css';

class FriendsList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      orderBy: 'name',
      order: 'ascending'
    };
  }

  handleChange( field, event ) {
    this.setState({[field]: event.target.value});
  }

  render() {

    const friendsList = friends
      .filter( friend => friend.name.toLowerCase().indexOf( this.state.searchText.toLowerCase() ) !== -1 )
      .sort( ( a, b ) => a[ this.state.orderBy ] > b[ this.state.orderBy ] )
      .map( friend => (
      <Friend
        currentLocation={ friend.current_location  || {} }
        friendCount={ friend.friend_count || 'No Friends' }
        key={ friend.$$hashKey }
        name={ friend.name }
        pictureUrl={ friend.pic_square }
        status={ friend.status ? friend.status.message : "" }
        />
    ) );

    const displayFriends = this.state.order === "ascending" ? friendsList : friendsList.slice().reverse();

    return (
      <div>
          <form className="form-inline searchForm" role="form">
              <div className="form-group">
                  <input onChange={this.handleChange.bind(this, "searchText")} value={ this.state.searchText } className="form-control" placeholder="Search For Friends" />
                  <select onChange={this.handleChange.bind(this, "orderBy")} value={this.state.orderBy} className="input-medium">
                      <option value="name">Name</option>
                      <option value="friend_count">#Friends</option>
                  </select>
                  <select onChange={this.handleChange.bind(this, "order")} value={this.state.order} className="input-medium">
                      <option value="descending">Descending</option>
                      <option value="ascending">Ascending</option>
                  </select>
              </div>
          </form>

          <ul>
            { friendsList }
          </ul>
      </div>
    );
  }
}

export default FriendsList;
