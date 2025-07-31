# Coil Cravings: A Frontend Learning Project for Modern Snake Game

This is a comprehensive practice project I completed during my frontend development journey. Built with vanilla HTML, CSS, and JavaScript, it's a fully functional snake game that, while primarily a learning exercise, includes many practical features and detailed designs—hopefully serving as a reference for other frontend beginners.

<img width="291" height="238" alt="image" src="https://github.com/user-attachments/assets/ba8e4cd4-66a8-48dc-9dd5-5e2bb3392437" />
&nbsp;&nbsp;&nbsp;
<img width="370" height="341" alt="image" src="https://github.com/user-attachments/assets/14f0a2e4-79d4-4936-a2b6-3c99954140b8" />

## Project Background

I developed this project to reinforce foundational frontend skills like DOM manipulation, Canvas drawing, and local storage. By recreating the classic snake game with my own creative additions, I practiced the full development workflow from interface design to logic implementation. Along the way, I faced challenges (such as snake movement logic and multi-language adaptation) and resolved most through research and debugging—making this a solid test of my recent learning progress.

## Important Note

User accounts, registration data, and game progress are **stored locally** using the browser's localStorage. This means:
- All user data remains on your current device
- Data won't sync across different browsers or devices
- Clearing browser data may delete your saved progress
- No server or internet connection is required to play

## Performance Calculation Logic

The game uses a unique formula to calculate performance, rewarding both high scores and operational precision:

**Performance = (Score³) / (Total Key Presses)**

This formula is derived from:  
(Score²) × (Score / Total Key Presses) = Score³ / Total Key Presses  

### Breakdown of the Design Logic:
- **Score³**: The cubed weight amplifies the value of high scores
- **Score/Total Key Presses**: Essentially represents **effective operation ratio** (key presses needed per point), which can be understood as "operational precision"—a higher value means more efficient play (fewer unnecessary key presses)
- The overall formula ensures: High-scoring players have an advantage, while precise players get additional rewards, with score carrying greater weight

## Game Features

- 🐍 **Core Gameplay**: Classic snake mechanics—control movement, eat food to grow, and avoid wall/self-collision to continue
- 👤 **User System**: Supports registration/login (via local storage) and guest mode; registered users can save progress
- 📊 **Stats Tracking**: Records Key Presses, Total Score, Score/Key Ratio (precision), Survival Time, and calculates Performance
- 🌍 **Multi-language Support**: Built-in 8 languages (English, Chinese, Japanese, Korean, French, German, Spanish, Russian) with real-time switching
- ⚙️ **Speed Control**: Adjustable initial speed (20%-500%) to match different skill levels
- 📜 **History Records**: Saves last 20 game sessions, sortable by Performance or Date
- 🎨 **Visual Effects**: Particle background animations, level-up effects, and smooth transitions

## How to Play

1. **Controls**:
   - Arrow keys or WASD: Control snake direction (up/down/left/right)
   - R key: Restart the game at any time

2. **Objective**:
   - Eat food to increase Total Score and grow longer
   - Avoid hitting walls or your own tail
   - Minimize unnecessary key presses to improve your Score/Key Ratio (precision)
   - Note: Current Speed increases by 2% with each food eaten (capped at 500%)

## Technical Implementation

As a learning project, I focused on practicing these frontend technologies:

- HTML5 Canvas: Renders game graphics (snake, food, grid lines)
- Vanilla JavaScript: Handles game logic (collision detection, movement algorithms, data calculation)
- CSS: Implements responsive layout, animations, and dark theme design
- LocalStorage: Stores user data, game history, and progress
- Event Handling: Manages keyboard input and mouse interactions (e.g., speed slider)
- Multi-language Architecture: Uses translation objects and DOM replacement for real-time language switching

## Installation & Running

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/coil-cravings.git
   ```
2. No dependencies required—simply open `snake.html` in a browser to play

## Areas for Improvement

As a learning project, there are limitations:

- No online leaderboards (requires backend integration, which I'm currently learning)
- Basic mobile adaptation—touch controls not yet implemented
- Code structure could be more modular (some logic has high coupling)
- Missing sound effects and more diverse visual themes

## License

MIT License © 2025 alphaAXIS

---

If you find bugs or have improvement suggestions, feel free to open issues or submit PRs! As a frontend novice, I'd greatly appreciate guidance and feedback from the community~
