import { useEffect, useState } from 'react';                                                                                                                                                                                               
import { Weapon } from '../types';

export default function WeaponsPage() {
  const [weapons, setWeapons] = useState<Weapon[] | null>(null);

  useEffect( () =>{
    fetch('/api/weapons') // Fetch from our own API endpoint
      .then( res => res.json()) // Parse the JSON response
      .then(data =>{setWeapons(data);// Set the regions state with the fetched data
      }) 
  }, []);

  // While loading
  if (weapons === null) {
    return <p>Loading...</p>;
  }

  // When loaded successfully
  return (
    <div>
      <h1>WEAPONS</h1>
      <ul>
        {weapons.map(weapon =>( 
            <li key={weapon.id} >
              <p>{weapon.name}</p>
                <p>Type: {weapon.type}</p>
            </li>
         ))}
      </ul>
    </div>
  );
}