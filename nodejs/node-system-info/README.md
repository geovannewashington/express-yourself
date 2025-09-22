# Node.js System Info CLI

## Usage

By default, running the script with no arguments prints all system info:

```bash
node main.js
```

## Available Flags

You can pass one or more flags to print specific sections:

- --all → Show everything (default behavior if no flags are given)
- --system → Show OS and platform information
- --memory → Show total and free memory
- --cpu → Show CPU cores and speed
- --user → Show current user information

## Examples

Show everything (default):

```bash
node main.js
```

Show _only system info_:

```bash
node main.js --system
```

Show _memory and CPU info_ togueter

```bash
node main.js --memory --cpu
```

Show _user info_ only:

```bash
node main.js --user
```

## Example Output:

```text
=== System Info ===
OS       : Linux 6.8.0-41-generic (x64)
Platform : linux
Hostname : mymachine
Uptime   : 183 minutes

=== Memory ===
Total    : 7.77 GB
Free     : 1.52 GB

=== CPU ===
Cores    : 4
Model    : Intel(R) Core(TM) i5-8250U CPU @ 1.60GHz
Core 1: 1800 MHz
Core 2: 1800 MHz
Core 3: 1800 MHz
Core 4: 1800 MHz

=== User ===
Username : geovanne
Home dir : /home/geovanne
```
