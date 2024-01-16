import React from 'react';
import './index.css';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Game from './components/Game';
 // Assurez-vous d'utiliser le chemin correct vers votre fichier Sidebar.tsx

function App() {
  const gameProps = {
    id: 'test',
    name: 'test',
    type: 'test',
    version: '1.2',
  };

  return (
    <div>
      <Navbar />
      <Sidebar />
      <Game id={gameProps.id} name={gameProps.name} type={gameProps.type} version={gameProps.version} />

    </div>
  );
}

export default App;
