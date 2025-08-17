import {useState}  from "react";
import { fetchUserData } from "../services/githubService";

function Search() {
    const [searchTerm, setSearchTerm] = useState('');
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const handleInputChange = (e) => {
      setSearchTerm(e.target.value); // Capture user input
    };

    const handleSubmit = (e) => {
      e.preventDefault(); // Prevent form submission
      setLoading("loading...");
      setError(false);
      setUserData(null);

      fetchUserData(searchTerm)
        .then((data) => {
          setUserData(data);
          setLoading(false);
        })
        .catch(() => {
          setError("Looks like we can't find the user ");
          setLoading(false);
        });
    };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>{loading}</p>}
      {error && <p>{error}</p>}
      {userData && (
        <div>
            <h2>{userData.name}</h2>
            <img src={userData.avatar_url} alt={`${userData.name}'s avatar`} />
            <p>{userData.name}</p>
            <a style={{maxWidth: '50%'}} href={userData.login} target="_blank" rel="noopener noreferrer">
              View Profile
            </a>
        </div>
      )}
    </div>
  );
}

export default Search;
