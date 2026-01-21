# Flow Circle (Ionized Zodiac)

**Deep Calm Focus for ADHD Minds.**

Flow Circle is a Progressive Web App (PWA) designed to help users with ADHD or sensory processing sensitivity manage their time without stress. It replaces ticking clocks and harsh alarms with gentle, organic circular visualizations and procedural audio cues.

> **Philosophy**: Visual silence. No neon. No hard edges. Just flow.

## 🌟 Core Features

*   **Circular Focus Timer**: A visual "orbit" that fills up instead of counting down.
*   **Deep Space Calm Design**: A specifically curated dark mode palette (`#0F172A` Slate) to reduce eye strain and cognitive load.
*   **Procedural Audio**: Gentle gong sounds for session completion (no jarring alarms).
*   **Daily Timeline**: Vertical timeline for planning "blocks" of focus (Persistence via LocalStorage).
*   **PWA Ready**: Works offline and can be installed on home screens.

## 🛠️ Tech Stack

*   **Frontend**: React 19 (via Vite)
*   **Styling**: Tailwind CSS v4
*   **State**: React Hooks + LocalStorage
*   **Deployment**: GitHub Pages (via `gh-pages`)

## 🚀 Getting Started

### Prerequisites

*   Node.js (v18+)
*   npm

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/streitmarcel-blip/ionized-zodiac.git
    cd ionized-zodiac
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Start the development server:
    ```bash
    npm run dev
    ```

4.  Open `http://localhost:5173` in your browser.

## 📂 Project Structure

```
/src
  /assets        # Icons and static media
  /components    # React components (CircularTimer, Layout, etc.)
  /hooks         # Custom hooks (useAudio, useTimer)
  App.jsx        # Main Application Switch
  index.css      # Tailwind v4 Configuration & Global Styles
/docs            # Project Documentation & Marketing Assets
```

## 🤝 Contributing

This project is built using a **Multi-Agent Workflow**.
Please refer to [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on how to act as a specific Agent role.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
