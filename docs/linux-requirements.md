---
title: Linux Requirements
sidebar_position: 2
---

A couple of packages are required for Nyrna to run on Linux, even if you are
using the Flatpak version. The following packages are required:

- `wmctrl`
- `xdotool`

You can install these packages by running the command for your 
distribution in a terminal:

```bash title="Fedora"
sudo dnf install wmctrl xdotool
```

```bash title="Debian/Ubuntu"
sudo apt install wmctrl xdotool
```

```bash title="Arch"
sudo pacman -S wmctrl xdotool
```

```bash title="OpenSUSE"
sudo zypper install wmctrl xdotool
```

After installing these packages, restart Nyrna if it is already running.
