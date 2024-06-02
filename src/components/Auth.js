import React, { useState } from 'react';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleSwitch = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="container-fluid p-0" style={{ minHeight: '100vh' }}>
      {/* Jumbotron */}
      <div
        className="container-fluid p-0"
        style={{
          backgroundImage: `url(${'https://c4.wallpaperflare.com/wallpaper/172/921/248/nature-water-sea-travel-wallpaper-preview.jpg'})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '50vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          color: 'white',
        }}
      ></div>
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title text-center">{isLogin ? 'Login' : 'Sign Up'}</h3>
              <form>
                <div className="form-group">
                  <label>Email address</label>
                  <input type="email" className="form-control" />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input type="password" className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary btn-block">{isLogin ? 'Login' : 'Sign Up'}</button>
              </form>
              <p className="text-center mt-3">
                {isLogin ? "Don't have an account?" : 'Already have an account?'}
                <span className="text-primary" onClick={handleSwitch} style={{ cursor: 'pointer' }}>
                  {isLogin ? ' Sign Up' : ' Login'}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Auth;
