# Password Generator

#### Video Demo: <[URL HERE](https://youtu.be/lxWNMwWP1d4)>

#### Description:
My project is a secure password generator application built with HTML, CSS, and JavaScript. This project was created as part of CS50's final project.

## Features:
- Generate secure passwords with a length of 15 characters.
- Automatically formats passwords with dashes every five characters.
- Copy generated passwords to the clipboard with a single click.
- Minimalistic, Windows XP-inspired design.

## Installation:
1. Clone the repository:
   ```bash
   git clone https://github.com/lucasDebugDude/project.git
2. Open popup.html in your browser

## Usage:
1. Click the "Generate Password" button to create a new password.
2. Copy the password to your clipboard using the "Copy to Clipboard" button.
3. Close the popup window using the [X] button.

## Technologies Used:
- HTML: Structure of the application.
- CSS: Styling for the Windows XP-inspired design.
- JavaScript: Logic for password generation and clipboard functionality.

## File Overview

### manifest.json
The manifest.json file defines the configuration and metadata for the Chrome extension Password Generator. It specifies manifest_version: 3, the latest standard for Chrome Extensions, ensuring compatibility with the most recent APIs and security features. The extension is named "Password Generator" and described as a utility for generating strong passwords with a one-click copy feature. The action key defines the behavior of the extension's toolbar button, associating it with a popup interface (popup.html) and providing icons in multiple resolutions for better rendering across different UI contexts. The "permissions" field includes clipboardWrite, granting the extension the ability to programmatically copy generated passwords to the clipboard, enhancing user convenience and workflow efficiency.

### popup.html
The popup.html file defines the frontend interface of the Password Generator Chrome extension. It implements a minimal yet functional layout using standard HTML5 elements to provide a user-friendly experience directly accessible from the browser's toolbar. The design features a mock "window" interface with a title bar and close button, enhancing visual clarity and organization. The main interactive elements include a read-only input field to display the generated password, a button to generate new passwords, and a button to copy the current password to the clipboard. All visual styling is handled via styles.css, and dynamic interactivity is powered by popup.js. Additionally, the code adheres to best practices by separating concerns: structure (HTML), behavior (JavaScript), and style (CSS), allowing for easier maintenance and scalability.

### styles.css
The styles.css file defines the stylistic framework for the Password Generator extension, focusing on clarity, usability, and responsiveness. The .window class constrains the popup’s width to a compact 260px, applies a solid black border, and includes a subtle shadow (box-shadow) to create depth—mimicking traditional desktop GUI windows. UI elements such as input fields and buttons are sized for clarity and full-width responsiveness, employing inset and outset borders to emulate tactile, pressable surfaces. Font selections prioritize legibility using system-based monospaced fonts, maintaining consistency across platforms while reinforcing the tool's technical character.

A deliberate design choice in this stylesheet is the emulation of Windows XP-era visual motifs, appealing to computer science enthusiasts through nostalgia and recognizable interface patterns. The title bar's deep blue background (#0a246a), white text, and monospace font closely mirror XP's classic window chrome. Interactive elements, like the close button and the pressed-button effect (button:active { border-style: inset; }), are reminiscent of native UI affordances from that era. The color palette, beveled edges, and component layout reflect a retrocomputing charm that aligns well with the hacker/programmer aesthetic, adding a playful yet intentional layer of stylistic personality to the project.

### popup.js
The popup.js script contains the logic behind the Password Generator’s core functionality. At its center is the createSecurePassword function, which constructs a randomized string of 15 alphanumeric characters by default. To enhance readability, the function inserts hyphens every five characters in the resulting password—useful for both human usability and improved visual parsing. The implementation uses Math.random() to select characters securely within the allowed character set, striking a balance between simplicity and functional strength for general-purpose password generation.

Beyond generation, this script handles essential user interactions. Event listeners are attached to the “Generate Password” and “Copy to Clipboard” buttons. When triggered, the generator populates the password display input, and the copy function leverages document.execCommand('copy') to write the password directly to the clipboard—a method that remains widely supported across browsers for quick integration. Additionally, a basic event handler is linked to the window’s decorative close button, allowing the user to hide the extension interface without impacting browser behavior. This lightweight approach ensures responsiveness while maintaining minimal overhead.

### icon.png
The icon.png serves as the visual identifier for the extension within the Chrome UI, appearing in the toolbar and extension manager at various resolutions. Designed as an 8-bit pixel art illustration of a cat, the icon draws inspiration from both retro computing aesthetics and internet culture, where cats have long been symbolic mascots of the web—ranging from memes to GitHub's Octocat. Its blocky, limited-palette style pays homage to early graphical environments and the broader pixel art subculture, reinforcing the nostalgic Windows XP theming present throughout the extension. This deliberate visual choice not only enhances memorability but also aligns the project with the expressive, low-fidelity ethos embraced by developers and internet communities alike.

## License
This project is licensed under the [MIT License](LICENSE). See the LICENSE file for details.

## Author
Created by Lucas Lopes for CS50's final project.