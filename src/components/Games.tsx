import { useEffect, useState } from "react";
import GameCard from "./GameCard";


interface gameProps {
    id: string;
    name: string;
    type: string;
    version: string;
  }

const Games: React.FC = () => {
   
    const [data, setData] = useState<gameProps[]>([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const reponse = await fetch('http://localhost:5000/admin');
          const result = await reponse.json();
          console.log(result);
  
          setData(result);
        } catch (error) {
          
        }
      }
      fetchData();
    }, []);
  

    return (
        <div className="">
            <div className="">
                {data
                    .filter((item) => item.name)
                    .map((game, index) => (
                        <div key={index} className="">
                            <GameCard
                                id={game.id}
                                name={game.name}
                                type={game.type}
                                version={game.version}
                            />
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default Games;
