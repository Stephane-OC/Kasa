let housingData = null;

async function fetchHousingData() {
  if (!housingData) {
    const response = await fetch("/data/logements.json");
    housingData = await response.json();
  }
  return housingData;
}

export async function fetchAllHousings() {
  await fetchHousingData();
  return housingData;
}

export async function fetchHousingById(id) {
  await fetchHousingData();
  return housingData.find((housing) => housing.id === id);
}