import React from "react";

interface gameProps {
  id: string;
  name: string;
  type: string;
  version: string;
}

const Game: React.FC<gameProps> = ({ id, name, type, version }) => {
  return (
    <div>
      <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
        <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="max-w-xs mx-auto p-4">
              <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
                <div className="flex items-center justify-center h-28 bg-gray-50 dark:bg-gray-800 rounded-t-lg">
                  <h2 className="text-2xl text-gray-400 dark:text-gray-500">
                    {name}
                  </h2>
                </div>
                <div className="p-4">
                  <p className="text-gray-700 dark:text-gray-300">ID: {id}</p>
                  <p className="text-gray-700 dark:text-gray-300">
                    Type: {type}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    Version: {version}
                  </p>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
