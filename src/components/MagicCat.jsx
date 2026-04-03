import { useRive } from "@rive-app/react-canvas";
import { useEffect, useRef } from "react";

const MagicCat = () => {
  const containerRef = useRef(null);
  
  const { RiveComponent, rive } = useRive({
    src: import.meta.env.BASE_URL + "/24549-45842-magic-cat.riv",
    artboard: "WCT 01",
    stateMachines: "BLACK CATW",
    autoplay: true,
  });

  useEffect(() => {
    if (!rive || !containerRef.current) return;

    const updatePosition = (clientX, clientY) => {
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((clientX - rect.left) / rect.width) * 100;
      const y = ((clientY - rect.top) / rect.height) * 100;

      const inputX = rive.getNumberInput("EYES X");
      const inputY = rive.getNumberInput("EYES Y");
      
      if (inputX) inputX.value = x;
      if (inputY) inputY.value = y;
    };

    const resetPosition = () => {
      const inputX = rive.getNumberInput("EYES X");
      const inputY = rive.getNumberInput("EYES Y");
      
      if (inputX) inputX.value = 50;
      if (inputY) inputY.value = 50;
    };

    const triggerBlink = () => {
      const blinkInput = rive.getBooleanInput("BLINK EYE");
      if (blinkInput) {
        blinkInput.value = true;
        setTimeout(() => {
          blinkInput.value = false;
        }, 150);
      }
    };

    // Mouse events
    const handleMouseMove = (e) => {
      updatePosition(e.clientX, e.clientY);
    };

    const handleMouseLeave = () => {
      resetPosition();
    };

    const handleClick = () => {
      triggerBlink();
    };

    // Touch events for mobile
    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        e.preventDefault();
        updatePosition(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    const handleTouchEnd = () => {
      resetPosition();
    };

    const handleTouchStart = (e) => {
      if (e.touches.length > 0) {
        updatePosition(e.touches[0].clientX, e.touches[0].clientY);
      }
      triggerBlink();
    };

    const container = containerRef.current;
    
    // Mouse listeners
    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);
    container.addEventListener("click", handleClick);
    
    // Touch listeners
    container.addEventListener("touchmove", handleTouchMove, { passive: false });
    container.addEventListener("touchend", handleTouchEnd);
    container.addEventListener("touchstart", handleTouchStart);
    
    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
      container.removeEventListener("click", handleClick);
      container.removeEventListener("touchmove", handleTouchMove);
      container.removeEventListener("touchend", handleTouchEnd);
      container.removeEventListener("touchstart", handleTouchStart);
    };
  }, [rive]);

  return (
    <div ref={containerRef} style={{ cursor: "none", touchAction: "none" }}>
      <RiveComponent
        style={{
          width: 300,
          height: 300,
          pointerEvents: "auto",
        }}
      />
    </div>
  );
};

export default MagicCat;
