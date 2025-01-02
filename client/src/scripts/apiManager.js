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
  if (!id) return []; // Return empty array if no id
  
  const res = await fetch(`/api/colonyinventory/${id}`);
  if (!res.ok) {
    throw new Error(`Failed to fetch colony inventory: ${res.status}`);
  }
  return res.json();
};

//gets all Facilities
export const getFacilities = async () => {
  const res = await fetch("/api/facilities");
  return res.json();
};

//gets Facility Inventory
export const getFacilityInventory = async () => {
  const res = await fetch("/api/facilityInventories");
  return res.json();
};
//post for adding mineral
export const purchaseMineral = async (facilityId, mineralId, colonyId, quantity) => {
  const res = await fetch("/api/purchase", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      facilityId,
      mineralId,
      colonyId,
      quantity
    }),
  });
  
  if (!res.ok) {
    const error = await res.text();
    throw new Error(error || "Purchase failed");
  }
  
  return res.ok;
};