import { useState, useEffect } from "react";

export const FetchUser = () => {
  const [users, setUsers] = useState([]);
  // const [filteredUsers, setFilteredUsers] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
        );

        if (!response.ok) {
          throw new Error("error throws - no data available");
        }

        const data = await response.json();
        setUsers(data);
      } catch (err) {
        throw new Error(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchUserData();
  }, []);

  // useEffect(() => {
  //   const filterData = users.filter((user) =>
  //     user.name.toLowerCase().includes(searchQuery),
  //   );
  //   setFilteredUsers(filterData);
  // }, [searchQuery, users]);

  const filterData = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery),
  );

  const handleSearch = (e) => {
    console.log(e.target.value);
    e.preventDefault();
    setSearchQuery(e.target.value);
  };

  if (isLoading) {
    return <>...Loading</>;
  }

  return (
    <>
      <input type="text" onChange={handleSearch} value={searchQuery}></input>
      {filterData.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </>
  );
};
