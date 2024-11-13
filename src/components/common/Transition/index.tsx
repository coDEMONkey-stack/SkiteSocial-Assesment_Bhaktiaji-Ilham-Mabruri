import { useState, useEffect } from "react";
import styles from "./Transition.module.css";

interface TransitionProps {
  children: React.ReactNode;
}

function Transition({ children }: TransitionProps) {
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setIsTransitioning(true);
    const timeout = setTimeout(() => setIsTransitioning(false), 1000);

    return () => clearTimeout(timeout);
  }, [children]);

  return (
    <div className={`${styles.container} ${isTransitioning ? styles.fadeOut : styles.fadeIn}`}>
      {children}
    </div>
  );
}

export default Transition;
