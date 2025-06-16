import { useEffect } from "react";

const ScrollToTop = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollToTopButton = document.getElementById("scroll-to-top");
      if (scrollToTopButton) {
        scrollToTopButton.style.display = window.scrollY > 100 ? "block" : "none";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      id="scroll-to-top"
      onClick={scrollToTop}
      className="fixed bottom-4 right-4 p-2 bg-primary text-white rounded-full shadow-lg"
      style={{ display: "none" }}
    >
      ↑
    </button>
  );
};

export default ScrollToTop;
