import React, { useState, useEffect, useRef } from "react";

const DOSWrapper = () => {
  const [commandHistory, setCommandHistory] = useState([]);
  const [currentCommand, setCurrentCommand] = useState("");
  const [gameStarted, setGameStarted] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  const [autoLaunchComplete, setAutoLaunchComplete] = useState(false);
  const inputRef = useRef(null);
  const emulatorRef = useRef(null);

  // Check if game is installed
  useEffect(() => {
    const installStatus = localStorage.getItem("pizzaTycoonInstalled");
    setIsInstalled(installStatus === "true");
  }, []);

  // Auto-launch sequence
  useEffect(() => {
    if (!autoLaunchComplete) {
      const bootSequence = async () => {
        if (!isInstalled) {
          await typeCommand("C:\\>INSTALL.EXE");
          await runInstaller();
        } else {
          await typeCommand("C:\\>PIZZA.BAT");
          launchGame();
        }
        setAutoLaunchComplete(true);
      };

      bootSequence();
    }
  }, [isInstalled]);

  const runInstaller = async () => {
    setCommandHistory((prev) => [...prev, "Running Pizza Tycoon installer..."]);

    try {
      // Initialize js-dos for installer
      const dos = await import("js-dos");
      const canvas = document.createElement("canvas");
      emulatorRef.current.appendChild(canvas);

      const ci = await dos.Dos(canvas, {
        wdosboxUrl: "/wdosbox.js",
        cycles: "max",
        autolock: false,
      });

      // Mount directory containing install files
      await ci.mount(".", "/games");

      // Run installer
      await ci.run(["-c", "cd games", "-c", "install.exe"]);

      // Listen for installation completion
      // This is a simplified version - you might need to adjust based on
      // how the actual installer signals completion
      ci.onEvent("exit", () => {
        localStorage.setItem("pizzaTycoonInstalled", "true");
        setIsInstalled(true);
        setCommandHistory((prev) => [
          ...prev,
          "Installation complete. Starting game...",
        ]);
        launchGame();
      });
    } catch (error) {
      setCommandHistory((prev) => [
        ...prev,
        "Error during installation. Please ensure all installation files are present.",
      ]);
    }
  };

  const launchGame = async () => {
    setGameStarted(true);
    setCommandHistory((prev) => [...prev, "Loading Pizza Tycoon..."]);

    try {
      // Initialize js-dos
      const dos = await import("js-dos");
      const canvas = document.createElement("canvas");
      emulatorRef.current.appendChild(canvas);

      // Load saved state if exists
      const savedState = loadGameState();

      const ci = await dos.Dos(canvas, {
        wdosboxUrl: "/wdosbox.js",
        cycles: "max",
        autolock: false,
      });

      // Mount game directory
      await ci.mount(".", "/games");

      // Run the batch file
      await ci.run(["-c", "cd games", "-c", "pizza.bat"]);

      // Restore saved state if available
      if (savedState) {
        try {
          await ci.loadState(savedState);
          setCommandHistory((prev) => [...prev, "Saved game state restored."]);
        } catch (error) {
          setCommandHistory((prev) => [
            ...prev,
            "Error restoring saved game state.",
          ]);
        }
      }

      // Add save state event listener
      document.addEventListener("keydown", (e) => {
        if (e.key === "F5") {
          const state = ci.saveState();
          saveGameState(state);
        }
      });
    } catch (error) {
      setCommandHistory((prev) => [
        ...prev,
        "Error launching game. Please ensure all game files are present.",
      ]);
      setGameStarted(false);
    }
  };

  // Save state management
  const saveGameState = (stateData) => {
    try {
      localStorage.setItem("pizzaTycoonSave", JSON.stringify(stateData));
      setCommandHistory((prev) => [...prev, "Game state saved successfully."]);
    } catch (error) {
      setCommandHistory((prev) => [...prev, "Error saving game state."]);
    }
  };

  const loadGameState = () => {
    try {
      const savedState = localStorage.getItem("pizzaTycoonSave");
      if (savedState) {
        return JSON.parse(savedState);
      }
      return null;
    } catch (error) {
      setCommandHistory((prev) => [...prev, "Error loading saved game state."]);
      return null;
    }
  };

  // Simulated typing effect for commands
  const typeCommand = async (command) => {
    setCurrentCommand("");
    for (let i = 0; i < command.length; i++) {
      setCurrentCommand((prev) => prev + command[i]);
      await new Promise((resolve) => setTimeout(resolve, 50));
    }
    setCommandHistory((prev) => [...prev, command]);
    setCurrentCommand("");
  };

  const handleCommand = (e) => {
    if (e.key === "Enter") {
      const newCommand = currentCommand.trim().toLowerCase();
      setCommandHistory([...commandHistory, `C:\\>${currentCommand}`]);

      switch (newCommand) {
        case "help":
          setCommandHistory((prev) => [
            ...prev,
            "Available commands:",
            "HELP        - Show this help message",
            "INSTALL     - Run Pizza Tycoon installer",
            "PIZZA       - Launch Pizza Tycoon",
            "CLS         - Clear screen",
            "SAVE        - Save game state (Also F5 in-game)",
            "LOAD        - Load last saved game",
            "EXIT        - Exit game",
            "UNINSTALL   - Remove Pizza Tycoon installation",
          ]);
          break;
        case "cls":
          setCommandHistory([]);
          break;
        case "install":
        case "install.exe":
          if (!isInstalled && !gameStarted) {
            runInstaller();
          } else {
            setCommandHistory((prev) => [
              ...prev,
              "Game is already installed.",
            ]);
          }
          break;
        case "pizza":
        case "pizza.bat":
          if (!gameStarted) {
            if (isInstalled) {
              launchGame();
            } else {
              setCommandHistory((prev) => [
                ...prev,
                "Please run INSTALL.EXE first.",
              ]);
            }
          }
          break;
        case "uninstall":
          localStorage.removeItem("pizzaTycoonInstalled");
          localStorage.removeItem("pizzaTycoonSave");
          setIsInstalled(false);
          setCommandHistory((prev) => [
            ...prev,
            "Pizza Tycoon has been uninstalled.",
          ]);
          break;
        case "exit":
          if (gameStarted) {
            setGameStarted(false);
            setCommandHistory((prev) => [...prev, "Exiting game..."]);
            if (emulatorRef.current) {
              emulatorRef.current.innerHTML = "";
            }
          }
          break;
        default:
          setCommandHistory((prev) => [...prev, "Bad command or file name"]);
      }
      setCurrentCommand("");
    }
  };

  return (
    <div className="w-full h-screen bg-black flex flex-col">
      {/* DOS Interface */}
      <div
        className="p-4 font-mono text-amber-500 overflow-auto flex-grow"
        onClick={() => inputRef.current?.focus()}
      >
        {!gameStarted && (
          <>
            <div className="mb-4">
              <div className="mb-2">MS-DOS Version 6.22</div>
              <div className="mb-4">(C)Copyright Microsoft Corp 1981-1994.</div>
            </div>

            {/* Command history */}
            <div className="whitespace-pre-wrap">
              {commandHistory.map((line, index) => (
                <div key={index} className="mb-1">
                  {line}
                </div>
              ))}
            </div>

            {/* Command prompt */}
            <div className="flex items-center">
              <span className="mr-1">C:\&gt;</span>
              <input
                ref={inputRef}
                type="text"
                value={currentCommand}
                onChange={(e) => setCurrentCommand(e.target.value)}
                onKeyDown={handleCommand}
                className="bg-transparent border-none outline-none flex-1 focus:ring-0"
                autoFocus
              />
            </div>
          </>
        )}
      </div>

      {/* Game Container */}
      <div
        ref={emulatorRef}
        className={`flex-grow ${gameStarted ? "block" : "hidden"}`}
      >
        {/* js-dos will inject the canvas here */}
      </div>
    </div>
  );
};

export default DOSWrapper;
