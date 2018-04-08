import React from 'react';
import UserList from '../containers/user-list'
// import'./style/hangman'


const App = () => (
  <div>
    <h2> HangMan Game</h2>
    <UserList />
    <hr/>
    <form>
      <label>
      Enter letter:
      <input type="text" name="letter" />
      </label>

    </form>
  </div>
);

export default App
