import { useEffect, useState } from "react";
import api from "./axios";

// Simple reusable data-fetching hook used across all sections.
// Falls back to `fallback` data if the API is unreachable so the
// portfolio still renders nicely during development/demo.
export default function useFetch(endpoint, fallback = []) {
  const [data, setData] = useState(fallback);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    api
      .get(endpoint)
      .then((res) => {
        if (mounted) setData(res.data);
      })
      .catch((err) => {
        if (mounted) {
          setError(err);
          setData(fallback);
        }
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });
    return () => {
      mounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [endpoint]);

  return { data, loading, error };
}
