import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Navbar = ({ user, setUser }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await axios.post('/api/auth/logout');
    setUser(null);
    navigate('/');
  };

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto p-4 flex justify-between items-center">
        <Link to="/" className="font-bold">
          PERN Auth
        </Link>
        <div>
          {user ? (
            <div className="flex items-center gap-x-4">
              <p>Welcome, {user.name}</p>
              <button
                onClick={handleLogout}
                className="bg-red-500 px-3 py-1 rounded cursor-pointer"
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <Link to="/login" className="mx-2">
                Login
              </Link>
              <Link
                to="/register"
                className="mx-2 bg-blue-600 text-white mt-8 rounded-md hover:bg-blue-700 p-2"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
