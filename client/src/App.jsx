import axios from "axios";
import { useState } from "react";
import Routes from "./Routes";

import { UserContextProvider } from "./UserContext";
function App() {
  const [count, setCount] = useState(0);
  axios.defaults.baseURL='http://localhost:4040';
  axios.defaults.withCredentials=true;

  return (
<UserContextProvider>
  <Routes/>
</UserContextProvider>

     
    
  );
}

export default App;
