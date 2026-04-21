const BASE_URL = "https://t4e-testserver.onrender.com/api";

export const fetchActivities = async () => {
  const res = await fetch(`${BASE_URL}/fitness-activities`, {
    headers: {
      Authorization: "Bearer 485497",
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();
  console.log("API RESPONSE:", data);

  return data;
};