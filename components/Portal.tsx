import React, { useEffect, useRef } from "react";

interface PortalProps {
  isOpen: boolean;
  onClose: () => void;
  position?: "top" | "bottom";
  children?: React.ReactNode;
}

export function Portal({
  isOpen,
  onClose,
  position = "bottom",
  children,
}: PortalProps) {
  const portalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const portalElement = portalRef.current;

      if (portalElement && !portalElement.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <>
      {isOpen && (
        <div
          className={`portal ${position} ${
            isOpen ? "opacity-100" : "opacity-0"
          } transition-opacity duration-500 ease-in-out`}
          style={{
            top: position === "bottom" ? "100%" : "auto",
            bottom: position === "top" ? "100%" : "auto",
          }}
          ref={portalRef}
        >
          {children}
        </div>
      )}
    </>
  );
}
