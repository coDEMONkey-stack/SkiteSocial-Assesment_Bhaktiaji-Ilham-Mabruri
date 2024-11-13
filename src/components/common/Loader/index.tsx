import React from "react";
import Lottie from "lottie-react";
import animationData from "../../../../public/assets/lottie-loading.json";

const Loader = () => {

  return (
    <div className="Loader flex h-screen items-center justify-center bg-white dark:bg-black">
      <Lottie
        animationData={animationData}
        loop={true}
        autoplay={true}
        rendererSettings={{
          preserveAspectRatio: "xMidYMid slice",
        }}
        height={500}
        width={500}
      />    
    </div>  
  );
};

export default Loader;
