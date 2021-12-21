import Profile from "../components/Social-profile/Profile";
import user from "../data/user.json";
import Statistics from "../components/Statistics/Statistics";
import data from "../data/data.json";
import FriendsList from "../components/Friend-list/FriendsList";
import friends from "../data/friends.json";
import TransactionHistory from "../components/Transaction-history/TransactionHistory";
import transaction from "../data/transactions.json";
import {Container} from './App.styled';

export default function App() {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendsList friends={friends} />
      <TransactionHistory transaction={transaction} />
    </Container>
  );
}

// export default App;

//////////////////////////////////////////////////////////////
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
