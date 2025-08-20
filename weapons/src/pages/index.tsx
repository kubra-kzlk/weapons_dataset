import { GetServerSideProps } from 'next';
import { Weapon } from '../types';
import Link from 'next/link';

// Props for each page
export interface HomePageProps {
  weapons: Weapon[];
}

export const getServerSideProps: GetServerSideProps<HomePageProps> = async () => {
  const response = await fetch('https://raw.githubusercontent.com/kubra-kzlk/weapons_dataset/main/dataset.json');
  const weapons: Weapon[] = await response.json();
  return { props: { weapons } };
};

export default function HomePage(props: HomePageProps) {
  const weapons = props.weapons;

  return (
   <main>
      <h1>WEAPONS (SSR)</h1>
      <ul>
        {weapons.map((weapon) => (
          <li key={weapon.id}>
            <Link href={`/weapons/${weapon.id}`}>
              {weapon.name} — <em>{weapon.type}</em>
            </Link>
            <p>{weapon.description}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}