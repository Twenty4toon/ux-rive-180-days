import { useRive } from "@rive-app/react-canvas";
import { useEffect, useRef, useState } from "react";

const MagicCat = () => {
  const containerRef = useRef(null);
  const [loading, setLoading] = useState(true);
  
  const { rive, RiveComponent } = useRive({
    src: import.meta.env.BASE_URL + "24549-45842-magic-cat.riv",
    stateMachines: "BLACK CATW",
    autoplay: true,
    onLoad: () => {
      setLoading(false);
    },
  });

  useEffect(() => {
    if (!rive || !containerRef.current) return;

    const riv = rive;

    const updatePosition = (clientX, clientY) => {
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((clientX - rect.left) / rect.width) * 100;
      const y = ((clientY - rect.top) / rect.height) * 100;

      const inputX = riv.getNumberInput("EYES X");
      const inputY = riv.getNumberInput("EYES Y");
      
      if (inputX) inputX.value = x;
      if (inputY) inputY.value = y;
    };

    const resetPosition = () => {
      const inputX = riv.getNumberInput("EYES X");
      const inputY = riv.getNumberInput("EYES Y");
      if (inputX) inputX.value = 50;
      if (inputY) inputY.value = 50;
    };

    const triggerBlink = () => {
      const blinkInput = riv.getBooleanInput("BLINK EYE");
      if (blinkInput) {
        blinkInput.value = true;
        setTimeout(() => {
          blinkInput.value = false;
        }, 150);
      }
    };

    const handleMouseMove = (e) => updatePosition(e.clientX, e.clientY);
    const handleMouseLeave = resetPosition;
    const handleClick = triggerBlink;

    const container = containerRef.current;
    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);
    container.addEventListener("click", handleClick);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
      container.removeEventListener("click", handleClick);
    };
  }, [rive]);

  return (
    <div ref={containerRef} style={{ cursor: "none", touchAction: "none", position: "relative", width: 300, height: 300 }}>
      {loading && (
        <div style={{ 
          position: "absolute", 
          top: "50%", 
          left: "50%", 
          transform: "translate(-50%, -50%)", 
          color: "#666", 
          fontFamily: "'Space Mono', monospace", 
          fontSize: "0.7rem",
          zIndex: 10,
          background: "rgba(0,0,0,0.8)",
          padding: "8px 16px",
          borderRadius: "8px"
        }}>
          Loading animation...
        </div>
      )}
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
