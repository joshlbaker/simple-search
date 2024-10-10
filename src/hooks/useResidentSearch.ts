import { useEffect, useState } from "react";
import { Resident } from "../../types";

export default function useResidentSearch() {
  const [residents, setResidents] = useState<Resident[]>([]);

  useEffect(() => {
    const lastQuery = localStorage.getItem('lastQuery');

    if (lastQuery) search(lastQuery);
  }, []);

  const search = async (q: string | undefined) => {
    if (!q?.trim().length) return;

    const response = await fetch(
      'http://localhost:8080?' + new URLSearchParams({ q })
    );
    const data = await response.json();
    setResidents(data);

    localStorage.setItem('lastQuery', q);
  };

  return { search, residents };
}
