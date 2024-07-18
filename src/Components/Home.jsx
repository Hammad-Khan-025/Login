import React, { useContext } from 'react';
import UserContext from './UserContext';

const Home = () => {
  const { user, setUser } = useContext(UserContext);

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <>
      <nav className="bg-purple-500 h-16 flex items-center ps-5">
        <h1 className="text-2xl sm:text-3xl font-thin capitalize text-white">
          Welcome, {user.name}
        </h1>
      </nav>
      <main className="flex flex-col justify-center items-center h-[calc(100vh-64px)] text-lg sm:text-xl">
        <h1 className="text-4xl mb-10">Login Details</h1>
        <div className="flex justify-center w-full sm:w-96 py-10 bg-purple-200 rounded">
          <div className="flex flex-col gap-5 px-3">
            <h1>Name: {user.name}</h1>
            <h1>Email: {user.email}</h1>
            <h1>Password: {user.password}</h1>
            <button
              onClick={handleLogout}
              className="bg-purple-500 hover:bg-purple-400 active:bg-purple-700 text-white font-medium py-2 text-center text-base rounded"
            >
              Log out
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
