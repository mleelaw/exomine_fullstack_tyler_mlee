//gets all governors
export const getGovernors = async () => {
  const res = await fetch("/api/governors");
  return res.json();
};

//get Governor by Id
export const getGovernorById = async (id) => {
  const res = await fetch(`/api/governors/${id}`);
  return res.json();
};

//get Colony by Id
export const getColonyById = async (id) => {
  const res = await fetch(`/api/colonies/${id}`);
  return res.json();
};

//get all colonyInventories by ColonyId
export const getColonyInventoryByColonyId = async (id) => {
  const res = await fetch(`/api/colonyinventory/${id}`);
  return res.json();
};
