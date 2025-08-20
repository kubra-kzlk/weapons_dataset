import { GetStaticProps } from 'next';
import { useMemo, useState } from 'react';
import Link from 'next/link';
import { Weapon } from '@/types';


export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('https://raw.githubusercontent.com/kubra-kzlk/weapons_dataset/main/dataset.json');
  const weapons = await response.json();

  return {
    props: {
      weapons
    },
  };
};

export default function WeaponListPage({ weapons }: { weapons: Weapon[] }) {
  const [q, setSearch] = useState('');
  // Filter list on the client; same HTML is rendered on server
    const filtered = useMemo(
    () => weapons.filter(w => w.name.toLowerCase().includes(q.toLowerCase())),
    [q, weapons]
  );

  return (
    <main  >
      <h1>All Weapons </h1>
      < input
        type="text"
        placeholder="Search weapon"
        value={q}
        onChange={(e) => setSearch(e.target.value)}
      />
      {filtered.length === 0 ? (
        <p>No weapon found.</p>
      ) : (
        <ul>
          {filtered.map(d => (
            <li key={d.id}>
              <Link href={`/weapon/${d.id}`}>{d.name}</Link> — <em>{d.type}</em>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}