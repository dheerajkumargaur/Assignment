import { useState, useEffect } from 'react';

function useCustomHook() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data or any other side effect
    setData(/* ... */);
  }, []);

  return { data };
}

export default useCustomHook;