import { useRef } from "react";

function HorizontallyScroll({ className = "", children }) {
  const scrollRef = useRef();

  const handleMouseDown = (evt) => {
    const oldX = evt.pageX;
    const scrollLeft = scrollRef.current.scrollLeft;

    const handleMouseMove = (evt) => {
      const newX = evt.pageX;
      const offSet = newX - oldX;

      scrollRef.current.scrollLeft = scrollLeft - offSet;
    };

    const handleMouseUp = () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  const handleTouchStart = (evt) => {
    const touch = evt.touches[0];
    const oldX = touch.pageX;
    const scrollLeft = scrollRef.current.scrollLeft;

    const handleTouchMove = (evt) => {
      const touch = evt.touches[0];
      const newX = touch.pageX;
      const offSet = newX - oldX;

      scrollRef.current.scrollLeft = scrollLeft - offSet;
    };

    const handleTouchEnd = () => {
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };

    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleTouchEnd);
  };

  return (
    <div
      className={className}
      ref={scrollRef}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
    >
      {children}
    </div>
  );
}

export default HorizontallyScroll;
