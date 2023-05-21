import { useState } from "react";

export default function usePreparing() {
  const [isPreparing, setIsPreparing] = useState(false);

  const showPopup = () => {
    setIsPreparing(true);
    setTimeout(() => {
      setIsPreparing(false);
    }, 1200);
  };

  return { isPreparing, showPopup };
}