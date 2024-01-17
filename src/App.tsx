import React from 'react';
import './index.css';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Games from './components/Games';
 // Assurez-vous d'utiliser le chemin correct vers votre fichier Sidebar.tsx

function App() {

  return (
    <div>
      <Navbar />
      <Sidebar />
      <Games />

    </div>
  );
}

export default App;
