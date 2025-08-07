import './App.css';
import ProfilePage from './components/ProfilePage';
import { UserContext } from './components/UserContext';

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <>
      <UserContext.Provider value={userData}>
        <ProfilePage />
      </UserContext.Provider>
      <footer>
        <p>© 2023 My React App</p>
      </footer>
    </>
  );
}

export default App;