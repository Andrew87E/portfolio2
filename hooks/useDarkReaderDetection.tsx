import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export function DarkReaderDetector() {
  const [hasDarkReader, setHasDarkReader] = useState(false);
  const [hasShownToast, setHasShownToast] = useState(false);

  useEffect(() => {
    const detectDarkReader = () => {
      const isDarkReaderEnabled =
        document.querySelector('meta[name="darkreader"]') !== null ||
        window
          .getComputedStyle(document.documentElement)
          .getPropertyValue("--darkreader-inline-bgcolor") !== "" ||
        document.documentElement.classList.contains("darkreader") ||
        document.querySelectorAll('style[class^="darkreader"]').length > 0 ||
        document.querySelector("style[data-darkreader-mode]") !== null;

      if (isDarkReaderEnabled && !hasShownToast) {
        toast.error(
          "Dark Reader Detected, This site includes its own dark mode. For the best experience, consider disabling Dark Reader.",
          {
            duration: 5000,
            position: "bottom-center",
            style: {
              background: "red",
              color: "#fff",
            },
          }
        );
        setHasShownToast(true);
      }

      setHasDarkReader(isDarkReaderEnabled);
    };

    // Only run detection in browser
    if (typeof window !== "undefined") {
      if (!hasShownToast) {
        detectDarkReader();
      }

      const observer = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
          if (
            mutation.type === "childList" ||
            mutation.type === "attributes" ||
            mutation.attributeName === "class" ||
            mutation.attributeName === "style"
          ) {
            detectDarkReader();
            break;
          }
        }
      });

      observer.observe(document.documentElement, {
        attributes: true,
        childList: true,
        subtree: true,
      });

      return () => observer.disconnect();
    }
  }, [hasShownToast]);

  return null; // This component doesn't render anything
}
