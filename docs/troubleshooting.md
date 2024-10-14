# Troubleshooting

Manipulating running applications is generally not something they expect, so 
there are a few things that can go wrong. This page lists some common issues 
and how to resolve them.

Efforts are made to fix issues with popular applications, but it is impossible 
to resolve some types of issues. If you encounter an issue that is not listed 
here, please report it on the [GitHub issue tracker](https://github.com/Merrit/nyrna/issues).

:::warning

Nyrna is a tool that interacts with other applications in ways they were not 
designed for. This can cause issues, such as applications crashing or behaving 
unexpectedly. Use at your own risk.

:::

## Games

### Anti-cheat software

If you have an issue suspending a game, check if it uses 
[Easy Anti-Cheat](https://www.pcgamingwiki.com/wiki/Easy_Anti-Cheat) 
or similar software by searching for it at [PCGamingWiki](https://www.pcgamingwiki.com)
and checking if the "Middleware" section lists `Easy Anti-Cheat`.

Nyrna is unlikely to work with games that use anti-cheat software, as these
frameworks are designed specifically to block other software from interacting
with the game.

Sometimes the anti-cheat software can be disabled, such as in 
[Elden Ring](https://www.pcgamingwiki.com/wiki/Elden_Ring#Easy_Anti-Cheat).

## Windows

- Try running Nyrna as administrator

### Shortcuts don't work

**Use the GUI method to toggle suspend/resume.**

Some games grab exclusive control of the mouse and keyboard, which can cause 
Nyrna's shortcuts to not work. This is an unfortunate limitation of the game,
and not something that can be fixed in Nyrna.

It might be worthwhile to contact the game's developers and let them know that
their game grabbing exclusive control of the mouse and keyboard is causing
issues.

### Specific applications

#### Doom 2016

[Shortcuts don't work](#shortcuts-dont-work)

#### Elden Ring

[Disable Easy Anti-Cheat](https://www.pcgamingwiki.com/wiki/Elden_Ring#Easy_Anti-Cheat)

#### Metro Exodus

[Shortcuts don't work](#shortcuts-dont-work)
