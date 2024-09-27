import bigfootsData from '@/data/bigfoots.json';

export const processBigfootData = () => {
  const bigfoots = Object.entries(bigfootsData.Bigfoots).map(([name, data]) => ({
    id: name.toLowerCase(),
    name,
    type: data.Type,
    location: data.Location,
    habitat: Array.isArray(data.Habitat) ? data.Habitat : [data.Habitat],
    description: data.Description,
    image: `/assets/images/characters/${name.toLowerCase()}.png`,
  }));
  console.log('Processed bigfoots:', bigfoots);
  return bigfoots;
};
