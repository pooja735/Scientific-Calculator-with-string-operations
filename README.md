# 🔢 Advanced Calculator React App

A professional-grade, modern, scientific calculator built with **React.js**. This app supports advanced mathematical operations, string manipulations, unit conversions, voice input, history tracking, theme toggling, and scientific notation formatting. Designed for clarity, functionality, and production-readiness.

---

## ✨ Features

### 🧮 Core Calculator Functions
- **Basic Operations**: Addition, Subtraction, Multiplication, Division
- **Advanced Math**: Decimal handling and parentheses support
- **Square Root**: Support via `√` symbol
- **Trigonometric Functions**: `sin`, `cos`, `tan` (in radians)
- **Logarithmic Function**: `log` (base-10)
- **Scientific Notation**: Toggle via `sci` button
- **Error Handling**: Robust error handling for invalid inputs
- **Backspace**: `⌫` button for character deletion

### 📝 String Operations (NEW!)
- **Concatenation**: `hello,world` → `helloworld` (use comma separator)
- **Length Calculation**: `hello` → `5` 
- **Case Conversion**: 
  - `upper`: `hello` → `HELLO`
  - `lower`: `HELLO` → `hello`
- **String Reversal**: `hello` → `olleh`
- **Substring Extraction**: `hello:1:3` → `el` (format: text:start:end)
- **Alphabet Input**: A-Z keys for variable names and text input

### 🎨 Theming
- **Dual Themes**: Toggle between **Light** and **Dark** modes
- **Theme Button**: 🌙 (Dark) / ☀️ (Light)
- **Professional Colors**: 
  - Light theme: White buttons with black borders and text
  - Dark theme: Gray buttons with black borders and white text
  - Blue accent for equals (=) button in both themes

### 🧠 History Tracking
- **Session Storage**: All calculations stored in session-based history
- **Left Sidebar**: History displayed in dedicated panel
- **Recent First**: Most recent calculations appear at the top
- **Emoji Icons**: Operations marked with relevant emojis
- **Clear History**: Button to clear all history entries

### 🔁 Unit Conversion System
- **Manual Selection**: Choose unit via `unit` button (cycles through options)
- **Convert Button**: Apply conversion with dedicated `convert` button
- **Supported Conversions**:
  - `m → cm` (× 100)
  - `kg → g` (× 1000) 
  - `cm → m` (× 0.01)
  - `g → kg` (× 0.001)
  - `°C → °F` (temperature with offset)
  - `°F → °C` (temperature with offset)

### 🎙️ Voice Input
- **Speech Recognition**: Dictate mathematical expressions via microphone
- **Web Speech API**: Uses browser's built-in `SpeechRecognition`
- **Browser Support**: Accurate recognition in modern browsers
- **Status Feedback**: History shows voice input status

### 📋 Clipboard Integration
- **Copy Function**: Copy current expression/output using `copy` button
- **Clipboard API**: Modern browser clipboard integration
- **Confirmation**: History shows copy confirmation

### 🎯 Compact Layout
- **8×9 Grid**: Numbers, operators, and letters in unified layout
- **A-Z Letters**: Full alphabet support (auto-converts to lowercase)
- **Punctuation**: Comma (`,`) and colon (`:`) for string operations
- **Special Characters**: Square root (`√`), parentheses, operators
- **String Operations Bar**: Dedicated row for string manipulation functions

---

## 📁 Project Structure

```
advanced-calculator-react/
├── public/
│   └── index.html               # Root HTML template
├── src/
│   ├── App.js                   # Main Calculator component
│   ├── index.js                 # ReactDOM entry point
│   ├── components/
│   │   └── AdvancedCalculator.js # Calculator logic & UI
│   └── styles/
│       └── calculator.css       # Component styling
├── .gitignore
├── package.json
└── README.md                    # You're here!
```

---

## 🚀 Getting Started

Follow these instructions to run the project locally.

### 1. Clone the Repository

```bash
git clone https://github.com/BALADURGAG24/react-advanced-calculator.git
cd react-advanced-calculator
```

### 2. Install Dependencies

```bash
npm install
```

**Required Dependencies:**
```json
{
  "react": "^18.0.0",
  "react-dom": "^18.0.0",
  "framer-motion": "^10.0.0"
}
```

### 3. Run the Development Server

```bash
npm start
```

This will open the app in your default browser at `http://localhost:3000`.

---

## 📦 Production Build

To build the project for production use:

```bash
npm run build
```

The optimized build will be created in the `build/` folder.

---

## 🎮 Usage Examples

### Basic Math
```
15 + 25 * 2 = 65
√16 = 4
sin(1.57) ≈ 1
```

### String Operations
```
hello,world → concat → helloworld
programming → len → 11
HELLO → lower → hello
world → reverse → dlrow
programming:0:4 → substr → prog
```

### Unit Conversions
```
5 → (select m→cm) → convert → 500
100 → (select °C→°F) → convert → 212
```

### Voice Commands
- Click `mic` button
- Say: "five plus three times two"
- Result appears in display

---

## 🧪 Technical Notes

- **Trigonometric Functions**: Use `Math` API in radians (π/2 ≈ 1.57 for 90°)
- **String Format**: 
  - Concatenation: `word1,word2,word3` (comma-separated)
  - Substring: `text:startIndex:endIndex` (colon-separated)
- **Speech Recognition**: Accuracy varies by microphone quality and browser
- **Scientific Notation**: Outputs values like `1.23e+4` for large numbers
- **Order of Operations**: Use parentheses for complex expressions: `sin(30 + 45)`
- **Error Handling**: Invalid inputs display "Error" with history logging

---

## 🧰 Technologies Used

- **React 18+** – Component-based UI framework
- **Framer Motion** – Smooth animation transitions and hover effects
- **Web Speech API** – Browser-native voice input recognition
- **Clipboard API** – Modern copy-to-clipboard functionality
- **CSS3** – Responsive design, gradients, and theme switching
- **JavaScript ES6+** – Modern syntax with arrow functions and destructuring

---

## 🎨 Design Philosophy

- **Professional Aesthetics**: Clean, modern interface suitable for business use
- **Accessibility**: High contrast themes, readable fonts, proper button sizing
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Performance**: Optimized rendering with React hooks and efficient state management
- **User Experience**: Intuitive button layout, visual feedback, and error handling

---

## 🛠️ Future Improvements

- [ ] **Degree/Radian Toggle** for trigonometric functions
- [ ] **LocalStorage Persistence** for history across sessions
- [ ] **Enhanced Parser** using math.js for complex expressions
- [ ] **Unit Dropdown** instead of cycle-through selection
- [ ] **Keyboard Shortcuts** for power users
- [ ] **Export History** to CSV/JSON formats
- [ ] **Custom Functions** and variable storage
- [ ] **Graph Plotting** for mathematical functions
- [ ] **Multi-line Expressions** for complex calculations

---

## 🐛 Known Issues

- Voice recognition requires HTTPS in production environments
- Some mobile browsers may not support all Web APIs
- Complex mathematical expressions may need parentheses for proper evaluation

---

## 📱 Browser Support

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | 80+ | ✅ Full Support |
| Firefox | 75+ | ✅ Full Support |
| Safari | 13+ | ⚠️ Limited Voice |
| Edge | 80+ | ✅ Full Support |

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

Licensed under the [MIT License](LICENSE).

```
MIT License

Copyright (c) 2024 BALADURGAG24

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction...
```

---

## 🙋‍♂️ Author

**Developed by [BALADURGAG24]**

- 📧 Email: [your-email@example.com]
- 🐙 GitHub: [@BALADURGAG24](https://github.com/BALADURGAG24)
- 🌐 Portfolio: [your-website.com]

Feel free to open issues, submit PRs, or request new features!

---

## ⭐ Show Your Support

If this project helped you, please consider giving it a ⭐ star on GitHub!

---

## 🎉 Acknowledgments

- React community for excellent documentation
- Framer Motion for smooth animations
- Web API contributors for browser functionality
- Open source community for inspiration and feedback

---

Last updated: 24-08-2025 