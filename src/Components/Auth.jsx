import { useState } from 'react';
import axios from 'axios';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);  // Toggle between login and register
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');      // Only for registration
  const [message, setMessage] = useState('');

  // Register Handler
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/register', {
        email,
        password,
        role,
      });
      setMessage(response.data.message);
      setIsLogin(true);  // Switch to login form after registration
    } catch (error) {
      setMessage(error.response?.data?.message || 'Registration error');
    }
  };

  // Login Handler
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', {
        email,
        password,
      });
      setMessage(response.data.message);  // Show "Welcome to the page"
    } catch (error) {
      setMessage(error.response?.data?.message || 'Login error');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="p-6 bg-white shadow-lg rounded-md w-80">
        <h2 className="text-2xl mb-4">{isLogin ? 'Login' : 'Register'}</h2>

        <form onSubmit={isLogin ? handleLogin : handleRegister}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 mb-3 border rounded"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 mb-3 border rounded"
            required
          />
          {!isLogin && (
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full p-2 mb-3 border rounded"
            >
              <option value="customer">Customer</option>
              <option value="admin">Admin</option>
            </select>
          )}
          <button
            type="submit"
            className="w-full p-2 mb-3 bg-blue-500 text-white rounded"
          >
            {isLogin ? 'Login' : 'Register'}
          </button>
        </form>

        {message && <p className="text-center text-green-600 mb-2">{message}</p>}

        <button
          onClick={() => {
            setIsLogin(!isLogin);
            setMessage('');  // Clear message on form switch
          }}
          className="text-blue-500"
        >
          {isLogin ? 'Create an account' : 'Already have an account? Login'}
        </button>
      </div>
    </div>
  );
};

export default Auth;
