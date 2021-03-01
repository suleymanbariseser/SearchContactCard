import React from "react";
import SearchContactCard from "./components/SearchContactCard";

function App() {
  return (
    <SearchContactCard
      userId={1234}
      fullName="Gina Snelly"
      profileImageUrl="https://randomuser.me/api/portraits/women/55.jpg"
      trust={75}
    />
  );
}

export default App;
