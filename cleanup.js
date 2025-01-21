// cleanup.js
const fs = require("fs");
const { execSync } = require("child_process");

try {
  // Read the depcheck.json file
  console.log("Reading depcheck results...");
  const depcheckResults = JSON.parse(fs.readFileSync("depcheck.json", "utf8"));

  // Get unused dependencies from the results
  const unusedPackages = depcheckResults.dependencies || [];

  if (unusedPackages.length === 0) {
    console.log("No unused dependencies found!");
    process.exit(0);
  }

  console.log("\nUnused dependencies found:");
  console.log(unusedPackages.join("\n"));

  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  readline.question(
    "\nWould you like to remove these packages? (yes/no): ",
    (answer) => {
      if (answer.toLowerCase() === "yes") {
        console.log("\nRemoving packages...");
        try {
          execSync(`npm uninstall ${unusedPackages.join(" ")}`, {
            stdio: "inherit",
          });
          console.log("Successfully removed unused dependencies!");
        } catch (error) {
          console.error("Error removing packages:", error.message);
        }
      } else {
        console.log("Operation cancelled");
      }
      readline.close();
    }
  );
} catch (error) {
  if (error.code === "ENOENT") {
    console.error(
      'Error: depcheck.json file not found. Please run "npx depcheck --json > depcheck.json" first'
    );
  } else {
    console.error("Error reading depcheck results:", error.message);
  }
}
