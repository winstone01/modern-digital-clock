# Modern Animated Digital Clock

A responsive real-time digital clock built with HTML, CSS and JavaScript. The project combines live date and time functionality with a neon glassmorphism interface, animated lighting effects and a mobile-friendly layout.

## Features

- Live 12-hour digital clock
- Hours, minutes and seconds updated every second
- Automatic AM/PM indicator
- Current weekday and full date
- Leading zero formatting with `padStart()`
- Glassmorphism clock card with backdrop blur
- Glowing cyan time display
- Animated blinking separators
- Pulsing live-status indicator
- Floating radial-gradient light effects
- Animated background gradient
- Card entrance and hover animations
- Responsive layout for desktop and mobile screens

## Built With

- HTML5
- CSS3
- JavaScript
- Google Fonts: Rajdhani and Source Sans 3

## Project Structure

```text
├── index.html   # Clock structure and displayed information
├── style.css    # Glassmorphism design, responsive layout and animations
└── script.js    # Live time and date functionality
```

## How It Works

JavaScript creates a new `Date` object whenever the clock updates. The current hour is converted from 24-hour time into a 12-hour value, while the appropriate AM or PM label is calculated separately.

The hour, minute and second values are converted to strings and formatted with `padStart()` so each value always contains two digits. Arrays containing weekday and month names are used to create the readable date display.

The clock runs immediately when the page loads and is refreshed every second with `setInterval()`.

```js
updateClock();
setInterval(updateClock, 1000);
```

## Visual Design

The interface uses a translucent clock card placed over an animated background. `backdrop-filter` provides the frosted-glass effect, while layered shadows and text glows create the illuminated digital display.

```css
background: rgba(207, 206, 214, 0.2);
-webkit-backdrop-filter: blur(20px);
backdrop-filter: blur(20px);
```

Radial gradients create coloured light sources, and CSS keyframe animations control the floating background shapes, pulsing live indicator, blinking colons and card entrance.

## Run Locally

No installation or build tools are required.

1. Download or clone the project.
2. Keep `index.html`, `style.css` and `script.js` in the same folder.
3. Open `index.html` in a web browser.

You can also run the project with the VS Code Live Server extension.

## Responsive Design

The time display uses `clamp()` to scale smoothly between screen sizes. A media query adjusts the card spacing, typography and AM/PM badge for screens below 600px wide.

## What I Practised

- Working with JavaScript's `Date` object
- Converting 24-hour time to a 12-hour clock
- Formatting numeric values with `padStart()`
- Updating page content with `textContent`
- Running repeated updates with `setInterval()`
- Building responsive layouts with Flexbox and `clamp()`
- Creating glassmorphism with transparent backgrounds and backdrop blur
- Designing glow effects with radial gradients, shadows and filters
- Creating interface motion with CSS keyframes and transitions

## Possible Future Improvements

- Add a 12-hour/24-hour format switch
- Add selectable colour themes
- Add timezone selection
- Add an alarm or countdown mode
- Save display preferences with `localStorage`
- Respect the user's reduced-motion preference

## Author

**Winstone Anderson**  
UI-focused Front-End Developer  
[GitHub](https://github.com/winstone01) · [Portfolio](https://winstoneanderson.com)
