import { useState } from 'react';

const useLogic = () => {
  const [value, setValue] = useState(1);

  // Your logic here

  return value;
}

export default useLogic;