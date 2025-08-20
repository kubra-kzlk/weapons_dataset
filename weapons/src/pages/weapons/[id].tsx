
import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import { Weapon } from '../../types';

export const getStaticPaths: GetStaticPaths = async () => {
 const response = await fetch('https://raw.githubusercontent.com/kubra-kzlk/weapons_dataset/main/dataset.json');
  const jsonData = await response.json();
const weapons: Weapon[] = await jsonData.json();
  return {
    paths: weapons.map(w => ({ params: { id: String(w.id) } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
   const response = await fetch('https://raw.githubusercontent.com/kubra-kzlk/weapons_dataset/main/dataset.json');
  const weapon: Weapon[] = await response.json();
  return { props: { weapon } };
};

export default function WeaponDetailPage({ weapon }: { weapon: Weapon }) {

  return (
    <main>
      <h1>{weapon.name}</h1>

      <h2>Description</h2>
      <p>{weapon.description}</p>

      <h2>Type</h2>
      <p>{weapon.type}</p>
        <Image
            src={weapon.image}
            alt={weapon.name}
            width={500}
            height={500}
            style={{ maxWidth: '100%', height: 'auto' }}
        />

    </main>
  );
}