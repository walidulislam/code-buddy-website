import { useEffect, useState } from "react";

const useSkill = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch("/skillData.json")
    .then(res => res.json())
      .then((data) => setSkills(data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return { skills, loading, error };
};
export default useSkill;
