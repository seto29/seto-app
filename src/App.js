// App.js
import React from 'react';
import ProfilePage from './pages/Home/Home';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <Layout>
      <div className="App">
      <ProfilePage />
      </div>
    </Layout>
  );
}

export default App;
