// import React, {
//   useState,
//   useEffect,
//   useRef,
//   KeyboardEvent,
//   ChangeEvent,
// } from "react";

// // Types for js-dos
// import type { DosCommandInterface } from "js-dos";
// import { Dos } from "js-dos";

// type CommandHistoryEntry = string;

// const DOSWrapper: React.FC = () => {
//   const [commandHistory, setCommandHistory] = useState<CommandHistoryEntry[]>(
//     []
//   );
//   const [currentCommand, setCurrentCommand] = useState<string>("");
//   const [gameStarted, setGameStarted] = useState<boolean>(false);
//   const [autoLaunchComplete, setAutoLaunchComplete] = useState<boolean>(false);
//   const inputRef = useRef<HTMLInputElement>(null);
//   const emulatorRef = useRef<HTMLDivElement>(null);
//   const dosRef = useRef<DosCommandInterface | null>(null);

//   // Auto-launch sequence
//   useEffect(() => {
//     if (!autoLaunchComplete) {
//       const bootSequence = async () => {
//         await typeCommand("C:\\>PIZZA.BAT");
//         launchGame();
//         setAutoLaunchComplete(true);
//       };

//       bootSequence();
//     }

//     // Cleanup
//     if (dosRef.current) {
//       dosRef.current.exit();
//     }
//   }, []);

//   // Save state management
//   const saveGameState = (stateData: any): void => {
//     try {
//       localStorage.setItem("pizzaTycoonSave", JSON.stringify(stateData));
//       setCommandHistory((prev) => [...prev, "Game state saved successfully."]);
//     } catch (error) {
//       setCommandHistory((prev) => [...prev, "Error saving game state."]);
//     }
//   };

//   const loadGameState = (): any => {
//     try {
//       const savedState = localStorage.getItem("pizzaTycoonSave");
//       if (savedState) {
//         return JSON.parse(savedState);
//       }
//       return null;
//     } catch (error) {
//       setCommandHistory((prev) => [...prev, "Error loading saved game state."]);
//       return null;
//     }
//   };

//   const typeCommand = async (command: string): Promise<void> => {
//     setCurrentCommand("");
//     for (let i = 0; i < command.length; i++) {
//       setCurrentCommand((prev) => prev + command[i]);
//       await new Promise((resolve) => setTimeout(resolve, 50));
//     }
//     setCommandHistory((prev) => [...prev, command]);
//     setCurrentCommand("");
//   };

//   const launchGame = async (): Promise<void> => {
//     setGameStarted(true);
//     setCommandHistory((prev) => [...prev, "Loading Pizza Tycoon..."]);

//     try {
//       // Initialize js-dos
//       const canvas = document.createElement("canvas");
//       if (emulatorRef.current) {
//         emulatorRef.current.appendChild(canvas);
//       }

//       // Load saved state if exists
//       const savedState = loadGameState();

//       const ci = await Dos(canvas, {
//         wdosboxUrl: "/wdosbox.js",
//         cycles: "max",
//         autolock: false,
//       });

//       dosRef.current = ci;

//       // Mount game directory
//       await ci.mount(".", "/games");

//       // Run the batch file
//       await ci.run(["-c", "cd games", "-c", "pizza.bat"]);

//       // Restore saved state if available
//       if (savedState) {
//         try {
//           await ci.loadState(savedState);
//           setCommandHistory((prev) => [...prev, "Saved game state restored."]);
//         } catch (error) {
//           setCommandHistory((prev) => [
//             ...prev,
//             "Error restoring saved game state.",
//           ]);
//         }
//       }

//       // Add save state event listener
//       const handleKeyDown = (e: KeyboardEvent): void => {
//         if (e.key === "F5" && dosRef.current) {
//           const state = dosRef.current.saveState();
//           saveGameState(state);
//         }
//       };

//       document.addEventListener("keydown", handleKeyDown as any);
//       document.addEventListener("keyup", handleKeyDown as any);
//     } catch (error) {
//       setCommandHistory((prev) => [
//         ...prev,
//         "Error launching game. Please ensure all game files are present.",
//       ]);
//       setGameStarted(false);
//     }
//   };

//   const handleCommand = (e: KeyboardEvent<HTMLInputElement>): void => {
//     if (e.key === "Enter") {
//       const newCommand = currentCommand.trim().toLowerCase();
//       setCommandHistory([...commandHistory, `C:\\>${currentCommand}`]);

//       switch (newCommand) {
//         case "help":
//           setCommandHistory((prev) => [
//             ...prev,
//             "Available commands:",
//             "HELP      - Show this help message",
//             "PIZZA     - Launch Pizza Tycoon",
//             "CLS       - Clear screen",
//             "SAVE      - Save game state (Also F5 in-game)",
//             "LOAD      - Load last saved game",
//             "EXIT      - Exit game",
//           ]);
//           break;
//         case "cls":
//           setCommandHistory([]);
//           break;
//         case "pizza":
//         case "pizza.bat":
//           if (!gameStarted) {
//             launchGame();
//           }
//           break;
//         case "exit":
//           if (gameStarted && dosRef.current) {
//             dosRef.current.exit();
//             setGameStarted(false);
//             setCommandHistory((prev) => [...prev, "Exiting game..."]);
//             if (emulatorRef.current) {
//               emulatorRef.current.innerHTML = "";
//             }
//           }
//           break;
//         default:
//           setCommandHistory((prev) => [...prev, "Bad command or file name"]);
//       }
//       setCurrentCommand("");
//     }
//   };

//   const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
//     setCurrentCommand(e.target.value);
//   };

//   return (
//     <div className="w-full h-screen bg-black flex flex-col">
//       {/* DOS Interface */}
//       <div
//         className="p-4 font-mono text-amber-500 overflow-auto flex-grow"
//         onClick={() => inputRef.current?.focus()}
//       >
//         {!gameStarted && (
//           <>
//             <div className="mb-4">
//               <div className="mb-2">MS-DOS Version 6.22</div>
//               <div className="mb-4">(C)Copyright Microsoft Corp 1981-1994.</div>
//             </div>

//             {/* Command history */}
//             <div className="whitespace-pre-wrap">
//               {commandHistory.map((line, index) => (
//                 <div key={index} className="mb-1">
//                   {line}
//                 </div>
//               ))}
//             </div>

//             {/* Command prompt */}
//             <div className="flex items-center">
//               <span className="mr-1">C:\&gt;</span>
//               <input
//                 ref={inputRef}
//                 type="text"
//                 value={currentCommand}
//                 onChange={handleInputChange}
//                 onKeyDown={handleCommand}
//                 className="bg-transparent border-none outline-none flex-1 focus:ring-0"
//                 autoFocus
//               />
//             </div>
//           </>
//         )}
//       </div>

//       {/* Game Container */}
//       <div
//         ref={emulatorRef}
//         className={`flex-grow ${gameStarted ? "block" : "hidden"}`}
//       />
//     </div>
//   );
// };

// export default DOSWrapper;
