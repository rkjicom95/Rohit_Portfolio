import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    let heightToHidden = 20;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <>
      {isVisible && (
        <div
          className="fixed bottom-6 lg:bottom-16 right-5 lg:right-20 z-50 flex justify-center items-center lg:w-12 lg:h-12 w-10 h-10 bg-black text-white rounded-full cursor-pointer shadow-custom-shadow "
          onClick={goToBtn}
        >
          <FaArrowUp className="text-lg animate-gototop" />
        </div>
      )}
    </>
  );
};

export default GoToTop;
