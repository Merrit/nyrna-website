---
title: Hotkey
sidebar_position: 1
---

import AppSpecificHotkeysScreenshot from './app-specific-hotkeys.png';


# Hotkey

Nyrna can be invoked conveniently with a hotkey.

:::tip
You can use something like [AntiMicroX](https://github.com/AntiMicroX/antimicrox/) 
to trigger this hotkey with your gamepad, allowing you to suspend/resume your 
game with just your controller.
:::


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
