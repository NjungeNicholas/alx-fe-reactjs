// Create a UserContext:
// Create a new file UserContext.js.
// Initialize a Context using React.createContext() and export it.
// Provide Context in App:
// In App.jsx, import UserContext and wrap the ProfilePage component inside UserContext.Provider. Pass userData as the value to the provider.
// Consume Context in UserDetails:
// Modify UserDetails.jsx to consume UserContext using the useContext hook instead of receiving userData as a prop.
// Remove Unused Props:
// Remove the userData props passed through ProfilePage and UserInfo, as these will no longer be necessary.
import React from 'react';

const UserContext = React.createContext();
export { UserContext };

