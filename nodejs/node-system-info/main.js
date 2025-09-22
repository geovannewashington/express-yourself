// main.js
import os from 'node:os';

//
// --- Byte conversion utilities ---
//
const UNITS = {
  b: 1, byte: 1, bytes: 1,
  kb: 1024, kilobyte: 1024, kilobytes: 1024,
  mb: 1024 ** 2, megabyte: 1024 ** 2, megabytes: 1024 ** 2,
  gb: 1024 ** 3, gigabyte: 1024 ** 3, gigabytes: 1024 ** 3,
  tb: 1024 ** 4, terabyte: 1024 ** 4, terabytes: 1024 ** 4,
};

/**
 * Convert bytes to a specific unit.
 * @param {number} bytes - Number of bytes.
 * @param {string} to - Target unit (e.g. 'mb', 'gigabytes').
 * @param {object} opts - Options: { decimals = 2, withUnit = true }
 */
const convertBytes = (bytes, to, { decimals = 2, withUnit = true } = {}) => {
  if (typeof bytes !== 'number') throw new TypeError("bytes must be a number");
  if (typeof to !== 'string') throw new TypeError("unit must be a string");

  const unit = to.toLowerCase();
  if (!UNITS[unit]) throw new Error(`Unknown unit: ${to}`);

  const value = bytes / UNITS[unit];
  return withUnit ? `${value.toFixed(decimals)} ${unit.toUpperCase()}` : value;
};

//
// --- System info sections ---
//
const showSystem = () => {
  console.log("=== System Info ===");
  console.log(`OS       : ${os.type()} ${os.release()} (${os.arch()})`);
  console.log(`Platform : ${os.platform()}`);
  console.log(`Hostname : ${os.hostname()}`);
  console.log(`Uptime   : ${(os.uptime() / 60).toFixed(0)} minutes`);
};

const showMemory = () => {
  console.log("=== Memory ===");
  console.log(`Total    : ${convertBytes(os.totalmem(), 'gb', { decimals: 2, withUnit: true})}`);
  console.log(`Free     : ${convertBytes(os.freemem(), 'gb', { decimals: 2, withUnit: true})}`);
};

const showCPU = () => {
  console.log("=== CPU ===");
  const cpus = os.cpus();
  console.log(`Cores    : ${cpus.length}`);
  console.log(`Model    : ${cpus[0].model}`);
  cpus.forEach((cpu, i) => {
    console.log(`Core ${i + 1}: ${cpu.speed} MHz`);
  });
};

const showUser = () => {
  console.log("=== User ===");
  const user = os.userInfo();
  console.log(`Username : ${user.username}`);
  console.log(`Home dir : ${user.homedir}`);
};

//
// --- CLI argument handling ---
//
const args = process.argv.slice(2);

if (args.length === 0 || args.includes("--all")) {
  showSystem();
  console.log();
  showMemory();
  console.log();
  showCPU();
  console.log();
  showUser();
} else {
  if (args.includes("--system")) showSystem();
  if (args.includes("--memory")) showMemory();
  if (args.includes("--cpu")) showCPU();
  if (args.includes("--user")) showUser();
}
