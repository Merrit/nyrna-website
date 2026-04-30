---
title: Hotkey
sidebar_position: 3
---

import AppSpecificHotkeysScreenshot from './app-specific-hotkeys.png';


# Hotkey

Nyrna can be invoked conveniently with a hotkey.

:::tip
You can use something like [AntiMicroX](https://github.com/AntiMicroX/antimicrox/) 
to trigger this hotkey with your gamepad, allowing you to suspend/resume your 
game with just your controller.
:::


## Wayland

:::info
Wayland does not support global hotkeys, so the other methods described in this
document will not work on Wayland. However, you can still use your desktop
environment's built-in hotkey functionality to trigger the CLI method described
below.
:::

### KDE Plasma

1. Open System Settings and navigate to `Keyboard` > `Shortcuts`.
2. Click the `Add New` button → `Command or Scipt`
3. Set the `Command` field to `nyrna --toggle` (or `flatpak run
   codes.merritt.Nyrna --toggle` if using the Flatpak version).
4. Click `Save` and set the desired hotkey.


## Active Window

### GUI

If Nyrna is running, the keyboard key `Pause` will toggle suspend/resume for the 
active window.

:::tip
The hotkey can be changed in the settings.
:::

### CLI

Nyrna can be invoked from the command line with the `-t` or `--toggle` flag.

```bash title="Linux"
./nyrna --toggle
```

```bash title="Linux Flatpak"
flatpak run codes.merritt.Nyrna --toggle
```

```bash title="Windows"
.\nyrna.exe --toggle
```


## Specific Applications

Separate hotkeys can be set in the settings to toggle suspend/resume for 
specific applications.

<img src={AppSpecificHotkeysScreenshot} alt="App Specific Hotkeys" style={{maxWidth: '70%'}} />

:::info
Only the GUI method is available for specific applications.
:::
