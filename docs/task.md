# Flow Circle - Projekt Aufgaben

Dieses Dokument organisiert die Arbeit in spezialisierte "Agenten"-Rollen.

## 🧠 Status Quo (Für Kontext-Handover)
*Stand: 2026-01-20*
*   **App Status**: v0.9 (MVP Live).
*   **Deployment**: [GitHub Pages Link](https://streitmarcel-blip.github.io/flow-circle/).
*   ** Codebase**: React + Vite + Tailwind v4. Clean Architecture.
*   **Features Live**: 
    1.  Circular Timer (procedural audio, neumorphic glow).
    1.  Circular Timer (procedural audio, neumorphic glow).
    2.  Task Input ("Dein Fokus").
    3.  Timeline (Add/List tasks, LocalStorage persistence).
    4.  Theming (Dark/Light Mode toggles via CSS variables).

## 📋 Iteration 2: User Feedback & Refinement (To Do)
**Bugs (High Priority):**
- [ ] **Input-Fokus Fix**: Eingabefeld springt/verliert Fokus in Chrome.
- [x] **Scrolling Fix**: Mobile Ansicht lässt sich nicht scrollen (Overflow Issue).
- [x] **Color Revert & Text Visibility**: Alte Farbpalette wiederherstellen & Light Mode Text-Lesbarkeit flicken.

**Features & Logic:**
- [ ] **Task Editing**: Bestehende Aufgaben bearbeitbar machen.
- [x] Custom Modal for "Add Task" (Start/End Time) <!-- id: 7 -->
- [x] iOS-style Time Picker (Wheel Scroller) <!-- id: 8 -->
- [x] Task Editing (Edit/Update existing blocks) <!-- id: 9 -->
- [x] Task Deletion (Remove blocks) <!-- id: 10 -->
- [x] Display Start & End Time in Timeline Blocks <!-- id: 11 -->
- [x] Implement strict "Task Completion" (Checkbox/Visual State) <!-- id: 12 -->

**UI Polish / Wording:**
- [ ] **Wording**: Timer-Button von "Fließen" -> "Starten".
- [ ] **FC Icon**: Das "FC"-Symbol entfernen (ohne Funktion).
- [ ] **Layout**: "Neuer Block"-Button auf volle Breite zentrieren (Angleichung an Cards).
- [ ] **Timeline Line**: "Countdown"-Feature auf der Verbindungslinie (Zeit bis zum nächsten Block).

## 👨‍💻 Agent 1: Core Development (Entwicklung)
Der Fokus liegt auf der technischen Umsetzung, Code-Qualität und Funktionalität.
- [/] **Projekt-Initialisierung**
    - [x] Technologie-Stack festlegen (Vite/React für PWA-Fähigkeit empfohlen)
    - [x] Grundstruktur erstellen (Manifest, Service Worker für Offline-Support)
- [x] **Kern-Features implementieren**
    - [x] App-Shell Layout (Header, Navigation, Responsivität)
    - [x] Hauptfunktionalität (Circular Timer, Task Input, Basic Flow)
    - [x] Hauptfunktionalität (Circular Timer, Task Input, Basic Flow)
    - [x] Header-Erweiterung (Datum, Kalender-Icon)
    - [x] Light/Dark Mode Toggle
    - [x] Timeline / Tagesplan (Listenansicht der geplanten Blöcke)
    - [ ] Performance-Optimierung

## 🎨 Agent 2: Design & Assets (Grafik)
Fokus auf Ästhetik, User Experience und visuelle Identität.
- [x] **Branding**
    - [x] Farbpalette und Typografie definieren (ADHD-Friendly, Calm, No Neon)
    - [x] App-Icon entwerfen (Pastell/Soft/Beruhigend)
- [ ] **UI Assets**
    - [ ] Splash-Screen erstellen
    - [ ] Favicons und Web-Manifest Icons generieren
    - [ ] Platzhalter-Grafiken durch generierte Assets ersetzen

## 🚀 Agent 3: Store & Marketing (Launch)
**[COMPLETED]** Vorbereitung für die Veröffentlichung (Play Store / Web Deployment).
- [x] **Store Listing**
    - [x] App-Titel und Kurzbschreibung texten
    - [x] Detaillierte App-Beschreibung verfassen (SEO-optimiert)
    - [ ] Feature-Liste ausarbeiten
- [ ] **Visuals**
    - [ ] Screenshots planen und erstellen (Mockups)
    - [ ] Feature-Grafik für den Store-Header

## 📝 Agent 4: Dokumentation & Support
Sicherstellen, dass Nutzer und Entwickler die App verstehen.
- [x] **Benutzerhilfe**
    - [x] Onboarding-Tutorial-Texte schreiben
    - [x] FAQ (Häufig gestellte Fragen) erstellen
- [ ] **Rechtliches**
    - [x] Entwurf der Datenschutzerklärung (Privacy Policy)
    - [x] Impressum-Vorlage
- [x] **Entwickler-Ressourcen** (Neu identifiziert)
    - [x] README.md: Projekt-Kontext & Setup-Anleitung
    - [x] CHANGELOG.md: Versionshistorie starten
    - [x] LICENSE: Lizenzdatei hinzufügen (z.B. MIT)
    - [x] CONTRIBUTING.md: Workflow für Multi-Agenten-Setup

## 🏁 Abschluss & Review
## 🏁 Abschluss & Review
- [x] Finales Testing aller Komponenten
- [x] **Backup**: Code sicher auf GitHub (`flow-circle`)
- [x] **Deployment**: Live auf GitHub Pages (Handy-ready)
