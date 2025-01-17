import React from 'react';
import { useNavigate } from 'react-router-dom';

const SplashScreen = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="splash-screen relative">
        <div className="p-2 rounded-3xl max-w-fit flex flex-row space-x-1 m-52">
          <button
            type="button"
            onClick={() => (navigate('/signup'))}
            className="p-2 border rounded-tl-3xl rounded-bl-3xl text-xl"
          >
            Signup
          </button>
          <button
            type="button"
            onClick={() => (navigate('/login')
            )}
            className="p-2 border rounded-tr-3xl rounded-br-3xl text-xl"
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default SplashScreen;
