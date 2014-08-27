---
layout: post
title: 回车换行符\r\n1310
---

## 回车换行符\r\n1310

\r = CR (Carriage Return) // Used as a new line character in Classic Mac A carriage return means moving the cursor to the beginning of the line

\n = LF (Line Feed) // Used as a new line character in Mac OS, linux . A line feed means moving one line forward

\r\n = CR + LF // Used as a new line character in Windows

they're \n 10 and  \r 13 respectively;

The separation comes from typewriter times, when you turned the wheel to move the paper to change the line and moved the carriage to restart typing on the beginning of a line. This was two steps.

Windows editors often still use the combination of both in text files. Unix uses mostly only the \n.

in Unix and all Unix-like systems, \n is the code for end-of-line, \r means nothing special

as a consequence, in C and most languages that somehow copy it (even remotely), \n is the standard escape sequence for end of line (translated to/from OS-specific sequences as needed)

in old Mac systems (pre-OS X), \r was the code for end-of-line instead

in Windows (and many old OSs), the code for end of line is 2 characters, `\r\n', in this order
as a (surprising;-) consequence (harking back to OSs much older than Windows)

\r\n is the standard line-termination for text formats on the Internet

for electromechanical teletype-like "terminals", \r commands the carriage to go back leftwards until it hits the leftmost stop (a slow operation), \n commands the roller to roll up one line (a much faster operation) -- that's the reason you always have \r before \n, so that the roller can move while the carriage is still going leftwards!-)

for character-mode terminals (typically emulating even-older printing ones as above), in raw mode, \r and \n act similarly (except both in terms of the cursor, as there is no carriage or roller;-)

In practice, in the modern context of writing to a text file, you should always use \n (the underlying runtime will translate that if you're on a weird OS, e.g., Windows;-). The only reason to use \r is if you're writing to a character terminal (or more likely a "console window" emulating it) and want the next line you write to overwrite the last one you just wrote (sometimes used for goofy "ascii animation" effects of e.g. progress bars) -- this is getting pretty obsolete in a world of GUIs, though;-).

Environment.NewLine = any of the above code based on the operating system
// .Net provides the Environment class which provides many data based on Operating Systems, so if the application is built in Windows, and you use CR + LF ("\n\r" instead of Environment.NewLine) as new line character in your strings, and then MS creates a VM for running .Net applications in Unix, then there will be problem. So, you should always use Environment.NewLine when you want a new line character.
