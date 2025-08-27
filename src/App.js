// // import React, { useState, useRef } from "react";
// // import { motion } from "framer-motion";
// // import "./styles.css";

// // const buttons = [
// //   "7", "8", "9", "/",
// //   "4", "5", "6", "*",
// //   "1", "2", "3", "-",
// //   "0", ".", "=", "+",
// //   "C", "(", ")", "√",
// //   "sin", "cos", "tan", "log",
// //   "copy", "sci", "mic", "convert",
// //   "unit"
// // ];

// // const unitConversions = [
// //   { label: "m → cm", factor: 100 },
// //   { label: "kg → g", factor: 1000 },
// //   { label: "cm → m", factor: 0.01 },
// //   { label: "g → kg", factor: 0.001 },
// // ];

// // export default function CalculatorApp() {
// //   const [expression, setExpression] = useState("");
// //   const [theme, setTheme] = useState("light");
// //   const [history, setHistory] = useState([]);
// //   const [sciNotation, setSciNotation] = useState(false);
// //   const [unitIndex, setUnitIndex] = useState(0);
// //   const inputRef = useRef(null);

// //   const handleClick = (value) => {
// //     if (value === "C") {
// //       setExpression("");
// //     } else if (value === "=") {
// //       try {
// //         const expr = expression
// //           .replace(/\u221a/g, "Math.sqrt")
// //           .replace(/sin/g, "Math.sin")
// //           .replace(/cos/g, "Math.cos")
// //           .replace(/tan/g, "Math.tan")
// //           .replace(/log/g, "Math.log10");
// //         let result = eval(expr);
// //         if (sciNotation) result = result.toExponential();
// //         setExpression(result.toString());
// //         setHistory([`${expression} = ${result}`, ...history]);
// //       } catch {
// //         setExpression("Error");
// //       }
// //     } else if (value === "copy") {
// //       navigator.clipboard.writeText(expression);
// //     } else if (value === "mic") {
// //       const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
// //       recognition.onresult = (event) => {
// //         const voiceInput = event.results[0][0].transcript;
// //         setExpression(expression + voiceInput);
// //       };
// //       recognition.start();
// //     } else if (value === "sci") {
// //       setSciNotation(!sciNotation);
// //     } else if (value === "unit") {
// //       setUnitIndex((unitIndex + 1) % unitConversions.length);
// //     } else if (value === "convert") {
// //       try {
// //         let result = parseFloat(expression);
// //         if (isNaN(result)) throw new Error();
// //         result *= unitConversions[unitIndex].factor;
// //         setExpression(result.toString());
// //         setHistory([`Converted (${unitConversions[unitIndex].label}): ${result}`, ...history]);
// //       } catch {
// //         setExpression("Error");
// //       }
// //     } else {
// //       setExpression(expression + value);
// //     }
// //   };

// //   const toggleTheme = () => {
// //     setTheme(theme === "light" ? "dark" : "light");
// //   };

// //   return (
// //     <div className={`app-container ${theme}`}>
// //       <div className="history-box">
// //         <h3>History</h3>
// //         <ul>
// //           {history.map((item, index) => (
// //             <li key={index}>{item}</li>
// //           ))}
// //         </ul>
// //       </div>
// //       <div className={`calculator ${theme}`}>
// //         <div className="top-bar">
// //           <h2>Advanced Calculator</h2>
// //           <button className="theme-toggle" onClick={toggleTheme}>
// //             {theme === "light" ? "🌙" : "☀️"}
// //           </button>
// //         </div>
// //         <motion.input
// //           className="display"
// //           ref={inputRef}
// //           value={expression}
// //           readOnly
// //           initial={{ opacity: 0 }}
// //           animate={{ opacity: 1 }}
// //         />
// //         <div className="unit-label">
// //           Unit Mode: {unitConversions[unitIndex].label}
// //         </div>
// //         <div className="buttons">
// //           {buttons.map((btn) => (
// //             <button key={btn} onClick={() => handleClick(btn)}>
// //               {btn}
// //             </button>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }
// import React, { useState, useRef } from "react";
// import { motion } from "framer-motion";

// // Combined layout: numbers, operators, and letters in a compact grid
// const mainButtons = [
//   "C", "(", ")", "/", "A", "B", "C", "D",
//   "7", "8", "9", "*", "E", "F", "G", "H", 
//   "4", "5", "6", "-", "I", "J", "K", "L",
//   "1", "2", "3", "+", "M", "N", "O", "P",
//   "0", ".", ",", ":", "Q", "R", "S", "T",
//   "√", "=", "sin", "cos", "U", "V", "W", "X",
//   "log", "copy", "sci", "mic", "Y", "Z", "unit", "⌫",
//   "convert"
// ];

// // String operation buttons
// const stringButtons = ["concat", "len", "upper", "lower", "reverse", "substr"];

// const unitConversions = [
//   { label: "m → cm", factor: 100 },
//   { label: "kg → g", factor: 1000 },
//   { label: "cm → m", factor: 0.01 },
//   { label: "g → kg", factor: 0.001 },
//   { label: "°C → °F", factor: 1.8, offset: 32 },
//   { label: "°F → °C", factor: 0.556, offset: -32 }
// ];

// export default function CompactCalculator() {
//   const [expression, setExpression] = useState("");
//   const [theme, setTheme] = useState("dark");
//   const [history, setHistory] = useState([]);
//   const [sciNotation, setSciNotation] = useState(false);
//   const [unitIndex, setUnitIndex] = useState(0);
//   const [showInstructions, setShowInstructions] = useState(false);
//   const inputRef = useRef(null);

//   const handleClick = (value) => {
//     if (value === "C" && value.length === 1) {
//       setExpression("");
//     } else if (value === "⌫") {
//       setExpression(expression.slice(0, -1));
//     } else if (value === "=") {
//       try {
//         let expr = expression
//           .replace(/√/g, "Math.sqrt")
//           .replace(/sin/g, "Math.sin")
//           .replace(/cos/g, "Math.cos")
//           .replace(/tan/g, "Math.tan")
//           .replace(/log/g, "Math.log10");

//         let result = eval(expr);
//         if (sciNotation && typeof result === 'number') {
//           result = result.toExponential(3);
//         }
//         setExpression(result.toString());
//         setHistory([`${expression} = ${result}`, ...history.slice(0, 9)]);
//       } catch {
//         setExpression("Error");
//       }
//     } else if (value === "copy") {
//       navigator.clipboard.writeText(expression);
//       setHistory(["Copied to clipboard!", ...history.slice(0, 9)]);
//     } else if (value === "mic") {
//       try {
//         const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
//         recognition.onresult = (event) => {
//           const voiceInput = event.results[0][0].transcript;
//           setExpression(expression + voiceInput);
//         };
//         recognition.start();
//       } catch {
//         setHistory(["Voice not supported", ...history.slice(0, 9)]);
//       }
//     } else if (value === "sci") {
//       setSciNotation(!sciNotation);
//       setHistory([`Scientific notation: ${!sciNotation ? "ON" : "OFF"}`, ...history.slice(0, 9)]);
//     } else if (value === "unit") {
//       setUnitIndex((unitIndex + 1) % unitConversions.length);
//     } else if (value === "convert") {
//       try {
//         let result = parseFloat(expression);
//         if (isNaN(result)) throw new Error();
        
//         const conversion = unitConversions[unitIndex];
//         if (conversion.offset !== undefined) {
//           result = conversion.label.includes("°C → °F") 
//             ? result * conversion.factor + conversion.offset
//             : (result + conversion.offset) * conversion.factor;
//         } else {
//           result *= conversion.factor;
//         }
        
//         setExpression(result.toString());
//         setHistory([`${conversion.label}: ${result}`, ...history.slice(0, 9)]);
//       } catch {
//         setExpression("Error");
//       }
//     } 
//     // String Operations
//     else if (value === "concat") {
//       const parts = expression.split(",");
//       if (parts.length >= 2) {
//         const result = parts.join("");
//         setExpression(result);
//         setHistory([`Concatenated: ${result}`, ...history.slice(0, 9)]);
//       } else {
//         setExpression("Format: word1,word2");
//       }
//     } else if (value === "len") {
//       const result = expression.length;
//       setExpression(result.toString());
//       setHistory([`Length: ${result}`, ...history.slice(0, 9)]);
//     } else if (value === "upper") {
//       const result = expression.toUpperCase();
//       setExpression(result);
//       setHistory([`Uppercase: ${result}`, ...history.slice(0, 9)]);
//     } else if (value === "lower") {
//       const result = expression.toLowerCase();
//       setExpression(result);
//       setHistory([`Lowercase: ${result}`, ...history.slice(0, 9)]);
//     } else if (value === "reverse") {
//       const result = expression.split("").reverse().join("");
//       setExpression(result);
//       setHistory([`Reversed: ${result}`, ...history.slice(0, 9)]);
//     } else if (value === "substr") {
//       const parts = expression.split(":");
//       if (parts.length === 3) {
//         const str = parts[0];
//         const start = parseInt(parts[1], 10);
//         const end = parseInt(parts[2], 10);
//         const result = str.substring(start, end);
//         setExpression(result);
//         setHistory([`Substring: ${result}`, ...history.slice(0, 9)]);
//       } else {
//         setExpression("Format: text:start:end");
//       }
//     } else {
//       // Handle letter buttons (convert to lowercase)
//       const finalValue = /^[A-Z]$/.test(value) ? value.toLowerCase() : value;
//       setExpression(expression + finalValue);
//     }
//   };

//   const toggleTheme = () => {
//     setTheme(theme === "light" ? "dark" : "light");
//   };

//   return (
//     <div style={{
//       minHeight: '100vh',
//       background: theme === 'dark' 
//         ? 'linear-gradient(135deg, #1a1a2e, #16213e)' 
//         : 'linear-gradient(135deg, #f5f7fa, #c3cfe2)',
//       color: theme === 'dark' ? '#fff' : '#333',
//       fontFamily: 'Arial, sans-serif',
//       padding: '20px'
//     }}>
//       <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', gap: '20px' }}>
        
//         {/* Calculator Main */}
//         <motion.div 
//           style={{
//             background: theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.9)',
//             borderRadius: '20px',
//             padding: '20px',
//             boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
//             backdropFilter: 'blur(10px)',
//             border: '1px solid rgba(255,255,255,0.2)',
//             flex: '1'
//           }}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//         >
//           <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
//             <h2 style={{ margin: 0, fontSize: '1.5rem' }}>Advanced Calculator</h2>
//             <div style={{ display: 'flex', gap: '10px' }}>
//               <button 
//                 onClick={() => setShowInstructions(!showInstructions)}
//                 style={{
//                   background: 'rgba(74, 144, 226, 0.8)',
//                   border: 'none',
//                   borderRadius: '10px',
//                   color: 'white',
//                   padding: '8px 12px',
//                   cursor: 'pointer',
//                   fontSize: '14px'
//                 }}
//               >
//                 {showInstructions ? 'Hide' : 'Help'}
//               </button>
//               <button 
//                 onClick={toggleTheme}
//                 style={{
//                   background: 'rgba(255,255,255,0.2)',
//                   border: 'none',
//                   borderRadius: '10px',
//                   color: theme === 'dark' ? '#fff' : '#333',
//                   padding: '8px 12px',
//                   cursor: 'pointer',
//                   fontSize: '16px'
//                 }}
//               >
//                 {theme === "light" ? "🌙" : "☀️"}
//               </button>
//             </div>
//           </div>

//           <motion.input
//             style={{
//               width: '100%',
//               height: '60px',
//               fontSize: '24px',
//               textAlign: 'right',
//               border: 'none',
//               borderRadius: '15px',
//               background: theme === 'dark' ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.1)',
//               color: theme === 'dark' ? '#fff' : '#333',
//               padding: '0 20px',
//               marginBottom: '15px',
//               outline: 'none'
//             }}
//             ref={inputRef}
//             value={expression}
//             readOnly
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//           />

//           <div style={{
//             textAlign: 'center',
//             marginBottom: '15px',
//             padding: '8px',
//             background: 'rgba(74, 144, 226, 0.2)',
//             borderRadius: '10px',
//             fontSize: '14px'
//           }}>
//             Unit Mode: {unitConversions[unitIndex].label}
//           </div>

//           {/* Main Button Grid */}
//           <div style={{
//             display: 'grid',
//             gridTemplateColumns: 'repeat(8, 1fr)',
//             gap: '8px',
//             marginBottom: '20px'
//           }}>
//             {mainButtons.slice(0, -1).map((btn, index) => (
//               <motion.button
//                 key={`${btn}-${index}`}
//                 onClick={() => handleClick(btn)}
//                 style={{
//                   height: '50px',
//                   border: 'none',
//                   borderRadius: '12px',
//                   background: btn === '=' 
//                     ? 'linear-gradient(45deg, #00aaffff, #00aaffff)'
//                     : /^[A-Z]$/.test(btn)
//                     ? 'linear-gradient(45deg, #34495e, #2c3e50)'
//                     : /^\d$/.test(btn)
//                     ? 'linear-gradient(45deg, #34495e, #2c3e50)'
//                     : btn === ',' || btn === ':'
//                     ? 'linear-gradient(45deg, #27ae60, #229954)'
//                     : 'linear-gradient(45deg, #ff6200ff, #bd5535ff)',
//                   color: 'white',
//                   fontSize: /^[A-Z]$/.test(btn) ? '16px' : '14px',
//                   fontWeight: 'bold',
//                   cursor: 'pointer',
//                   transition: 'all 0.2s ease',
//                   boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
//                 }}
//                 whileHover={{ scale: 1.05, boxShadow: '0 6px 12px rgba(0,0,0,0.3)' }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 {btn}
//               </motion.button>
//             ))}
//             {/* Convert button spanning 2 columns */}
//             <motion.button
//               onClick={() => handleClick("convert")}
//               style={{
//                 height: '50px',
//                 border: 'none',
//                 borderRadius: '12px',
//                 background: 'linear-gradient(45deg, #f39c12, #e67e22)',
//                 color: 'white',
//                 fontSize: '14px',
//                 fontWeight: 'bold',
//                 cursor: 'pointer',
//                 transition: 'all 0.2s ease',
//                 boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
//                 gridColumn: 'span 1'
//               }}
//               whileHover={{ scale: 1.05, boxShadow: '0 6px 12px rgba(0,0,0,0.3)' }}
//               whileTap={{ scale: 0.95 }}
//             >
//               convert
//             </motion.button>
//           </div>

//           {/* String Operations */}
//           <h4 style={{ marginBottom: '10px' }}>String Operations</h4>
//           <div style={{
//             display: 'grid',
//             gridTemplateColumns: 'repeat(6, 1fr)',
//             gap: '8px'
//           }}>
//             {stringButtons.map((btn) => (
//               <motion.button
//                 key={btn}
//                 onClick={() => handleClick(btn)}
//                 style={{
//                   height: '40px',
//                   border: 'none',
//                   borderRadius: '10px',
//                   background: 'linear-gradient(45deg, #f39c12, #e67e22)',
//                   color: 'white',
//                   fontSize: '12px',
//                   fontWeight: 'bold',
//                   cursor: 'pointer',
//                   boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
//                 }}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 {btn}
//               </motion.button>
//             ))}
//           </div>
//         </motion.div>

//         {/* Instructions Panel */}
//         {showInstructions && (
//           <motion.div 
//             style={{
//               width: '350px',
//               background: theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.9)',
//               borderRadius: '20px',
//               padding: '20px',
//               boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
//               backdropFilter: 'blur(10px)',
//               border: '1px solid rgba(255,255,255,0.2)',
//               fontSize: '14px',
//               lineHeight: '1.6',
//               maxHeight: '600px',
//               overflowY: 'auto'
//             }}
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//           >
//             <h3 style={{ marginTop: 0, color: '#4a90e2' }}>How to Use</h3>
            
//             <div style={{ marginBottom: '15px' }}>
//               <strong>📊 Basic Math:</strong>
//               <br />• Numbers: 0-9, decimal point (.)
//               <br />• Operators: +, -, *, /
//               <br />• Example: 15 + 25 * 2 = 65
//             </div>

//             <div style={{ marginBottom: '15px' }}>
//               <strong>🔬 Scientific:</strong>
//               <br />• √: Square root (√16 = 4)
//               <br />• sin, cos, tan: Trig functions
//               <br />• log: Base-10 logarithm
//               <br />• sci: Toggle scientific notation
//             </div>

//             <div style={{ marginBottom: '15px' }}>
//               <strong>📐 Unit Conversion:</strong>
//               <br />• Click "unit" to cycle conversions
//               <br />• Enter number, click "convert"
//               <br />• Examples: 5 → convert (m to cm = 500)
//             </div>

//             <div style={{ marginBottom: '15px' }}>
//               <strong>📝 String Operations:</strong>
//               <br />• <strong>concat:</strong> hello,world → helloworld
//               <br />• <strong>len:</strong> hello → 5
//               <br />• <strong>upper:</strong> hello → HELLO
//               <br />• <strong>lower:</strong> HELLO → hello
//               <br />• <strong>reverse:</strong> hello → olleh
//               <br />• <strong>substr:</strong> hello:1:3 → el
//             </div>

//             <div style={{ marginBottom: '15px' }}>
//               <strong>🎯 Special Features:</strong>
//               <br />• A-Z: Type letters (auto lowercase)
//               <br />• copy: Copy result to clipboard
//               <br />• mic: Voice input (if supported)
//               <br />• C: Clear display
//               <br />• ⌫: Backspace
//             </div>

//             <div style={{
//               background: 'rgba(74, 144, 226, 0.1)',
//               padding: '10px',
//               borderRadius: '8px',
//               fontSize: '12px'
//             }}>
//               <strong>💡 Pro Tips:</strong>
//               <br />• Use parentheses for complex expressions
//               <br />• Mix numbers and letters for variables
//               <br />• Check history for previous calculations
//               <br />• Switch themes for comfort
//             </div>
//           </motion.div>
//         )}

//         {/* History Panel */}
//         <motion.div 
//           style={{
//             width: '300px',
//             background: theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.9)',
//             borderRadius: '20px',
//             padding: '20px',
//             boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
//             backdropFilter: 'blur(10px)',
//             border: '1px solid rgba(255,255,255,0.2)'
//           }}
//           initial={{ opacity: 0, x: -20 }}
//           animate={{ opacity: 1, x: 0 }}
//         >
//           <h3 style={{ marginTop: 0, color: '#4a90e2' }}>History</h3>
//           <div style={{ maxHeight: '500px', overflowY: 'auto' }}>
//             {history.length === 0 ? (
//               <p style={{ opacity: 0.6, fontStyle: 'italic' }}>No calculations yet...</p>
//             ) : (
//               history.map((item, index) => (
//                 <motion.div
//                   key={index}
//                   style={{
//                     padding: '8px 12px',
//                     margin: '5px 0',
//                     background: 'rgba(74, 144, 226, 0.1)',
//                     borderRadius: '8px',
//                     fontSize: '12px',
//                     wordBreak: 'break-word'
//                   }}
//                   initial={{ opacity: 0, y: -10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: index * 0.1 }}
//                 >
//                   {item}
//                 </motion.div>
//               ))
//             )}
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// }
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import "./styles.css";

// Combined layout: numbers, operators, and letters in a compact grid
const mainButtons = [
  "C", "(", ")", "/", "A", "B", "C", "D",
  "7", "8", "9", "*", "E", "F", "G", "H", 
  "4", "5", "6", "-", "I", "J", "K", "L",
  "1", "2", "3", "+", "M", "N", "O", "P",
  "0", ".", ",", ":", "Q", "R", "S", "T",
  "√", "=", "sin", "cos", "U", "V", "W", "X",
  "log", "copy", "sci", "mic", "Y", "Z", "unit", "⌫",
  "convert"
];

// String operation buttons
const stringButtons = ["concat", "len", "upper", "lower", "reverse", "substr"];

const unitConversions = [
  { label: "m → cm", factor: 100 },
  { label: "kg → g", factor: 1000 },
  { label: "cm → m", factor: 0.01 },
  { label: "g → kg", factor: 0.001 },
  { label: "°C → °F", factor: 1.8, offset: 32 },
  { label: "°F → °C", factor: 0.556, offset: -32 }
];

export default function CompactCalculator() {
  const [expression, setExpression] = useState("");
  const [theme, setTheme] = useState("dark");
  const [history, setHistory] = useState([]);
  const [sciNotation, setSciNotation] = useState(false);
  const [unitIndex, setUnitIndex] = useState(0);
  const [showInstructions, setShowInstructions] = useState(false);
  const inputRef = useRef(null);

  const handleClick = (value) => {
    if (value === "C" && value.length === 1) {
      setExpression("");
    } else if (value === "⌫") {
      setExpression(expression.slice(0, -1));
    } else if (value === "=") {
      try {
        let expr = expression
          .replace(/√/g, "Math.sqrt")
          .replace(/sin/g, "Math.sin")
          .replace(/cos/g, "Math.cos")
          .replace(/tan/g, "Math.tan")
          .replace(/log/g, "Math.log10");

        let result = eval(expr);
        if (sciNotation && typeof result === 'number') {
          result = result.toExponential(3);
        }
        setExpression(result.toString());
        setHistory([`${expression} = ${result}`, ...history.slice(0, 9)]);
      } catch {
        setExpression("Error");
      }
    } else if (value === "copy") {
      navigator.clipboard.writeText(expression);
      setHistory(["Copied to clipboard!", ...history.slice(0, 9)]);
    } else if (value === "mic") {
      try {
        const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
        recognition.onresult = (event) => {
          const voiceInput = event.results[0][0].transcript;
          setExpression(expression + voiceInput);
        };
        recognition.start();
      } catch {
        setHistory(["Voice not supported", ...history.slice(0, 9)]);
      }
    } else if (value === "sci") {
      setSciNotation(!sciNotation);
      setHistory([`Scientific notation: ${!sciNotation ? "ON" : "OFF"}`, ...history.slice(0, 9)]);
    } else if (value === "unit") {
      setUnitIndex((unitIndex + 1) % unitConversions.length);
    } else if (value === "convert") {
      try {
        let result = parseFloat(expression);
        if (isNaN(result)) throw new Error();
        
        const conversion = unitConversions[unitIndex];
        if (conversion.offset !== undefined) {
          result = conversion.label.includes("°C → °F") 
            ? result * conversion.factor + conversion.offset
            : (result + conversion.offset) * conversion.factor;
        } else {
          result *= conversion.factor;
        }
        
        setExpression(result.toString());
        setHistory([`${conversion.label}: ${result}`, ...history.slice(0, 9)]);
      } catch {
        setExpression("Error");
      }
    } 
    // String Operations
    else if (value === "concat") {
      const parts = expression.split(",");
      if (parts.length >= 2) {
        const result = parts.join("");
        setExpression(result);
        setHistory([`Concatenated: ${result}`, ...history.slice(0, 9)]);
      } else {
        setExpression("Format: word1,word2");
      }
    } else if (value === "len") {
      const result = expression.length;
      setExpression(result.toString());
      setHistory([`Length: ${result}`, ...history.slice(0, 9)]);
    } else if (value === "upper") {
      const result = expression.toUpperCase();
      setExpression(result);
      setHistory([`Uppercase: ${result}`, ...history.slice(0, 9)]);
    } else if (value === "lower") {
      const result = expression.toLowerCase();
      setExpression(result);
      setHistory([`Lowercase: ${result}`, ...history.slice(0, 9)]);
    } else if (value === "reverse") {
      const result = expression.split("").reverse().join("");
      setExpression(result);
      setHistory([`Reversed: ${result}`, ...history.slice(0, 9)]);
    } else if (value === "substr") {
      const parts = expression.split(":");
      if (parts.length === 3) {
        const str = parts[0];
        const start = parseInt(parts[1], 10);
        const end = parseInt(parts[2], 10);
        const result = str.substring(start, end);
        setExpression(result);
        setHistory([`Substring: ${result}`, ...history.slice(0, 9)]);
      } else {
        setExpression("Format: text:start:end");
      }
    } else {
      // Handle letter buttons (convert to lowercase)
      const finalValue = /^[A-Z]$/.test(value) ? value.toLowerCase() : value;
      setExpression(expression + finalValue);
    }
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={`shell ${theme}`}>
      <div className="shell-inner">
        <motion.div className="panel calc" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="calc__header">
            <h2 className="calc__title">Advanced Calculator</h2>
            <div className="header__actions">
              <button className="btn btn-help" onClick={() => setShowInstructions(!showInstructions)}>
                {showInstructions ? 'Hide' : 'Help'}
              </button>
              <button className="btn btn-theme" onClick={toggleTheme}>
                {theme === "light" ? "🌙" : "☀️"}
              </button>
            </div>
          </div>

          <motion.input
            className="display"
            ref={inputRef}
            value={expression}
            readOnly
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          />

          <div className="unit-badge">Unit Mode: {unitConversions[unitIndex].label}</div>

          <div className="grid grid-8">
            {mainButtons.slice(0, -1).map((btn, index) => {
              const variant =
                btn === '=' ? 'btn-equals' :
                /^\d$/.test(btn) ? 'btn-number' :
                /^[A-Z]$/.test(btn) ? 'btn-letter' :
                (btn === ',' || btn === ':') ? 'btn-punct' : 'btn-operator';
              return (
                <motion.button
                  key={`${btn}-${index}`}
                  onClick={() => handleClick(btn)}
                  className={`btn ${variant}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {btn}
                </motion.button>
              );
            })}
            <motion.button
              onClick={() => handleClick("convert")}
              className="btn btn-convert"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              convert
            </motion.button>
          </div>

          <h4 className="section-title">String Operations</h4>
          <div className="grid grid-6">
            {stringButtons.map((btn) => (
              <motion.button
                key={btn}
                onClick={() => handleClick(btn)}
                className="btn btn-accent"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {btn}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {showInstructions && (
          <motion.div className="panel help" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
            <h3 className="panel__title">How to Use</h3>
            <div className="help__group">
              <strong>📊 Basic Math:</strong>
              <br />• Numbers: 0-9, decimal point (.)
              <br />• Operators: +, -, *, /
              <br />• Example: 15 + 25 * 2 = 65
            </div>
            <div className="help__group">
              <strong>🔬 Scientific:</strong>
              <br />• √: Square root (√16 = 4)
              <br />• sin, cos, tan: Trig functions
              <br />• log: Base-10 logarithm
              <br />• sci: Toggle scientific notation
            </div>
            <div className="help__group">
              <strong>📐 Unit Conversion:</strong>
              <br />• Click "unit" to cycle conversions
              <br />• Enter number, click "convert"
              <br />• Examples: 5 → convert (m to cm = 500)
            </div>
            <div className="help__group">
              <strong>📝 String Operations:</strong>
              <br />• <strong>concat:</strong> hello,world → helloworld
              <br />• <strong>len:</strong> hello → 5
              <br />• <strong>upper:</strong> hello → HELLO
              <br />• <strong>lower:</strong> HELLO → hello
              <br />• <strong>reverse:</strong> hello → olleh
              <br />• <strong>substr:</strong> hello:1:3 → el
            </div>
            <div className="help__group">
              <strong>🎯 Special Features:</strong>
              <br />• A-Z: Type letters (auto lowercase)
              <br />• copy: Copy result to clipboard
              <br />• mic: Voice input (if supported)
              <br />• C: Clear display
              <br />• ⌫: Backspace
            </div>
            <div className="help__tips">
              <strong>💡 Pro Tips:</strong>
              <br />• Use parentheses for complex expressions
              <br />• Mix numbers and letters for variables
              <br />• Check history for previous calculations
              <br />• Switch themes for comfort
            </div>
          </motion.div>
        )}

        <motion.div className="panel side" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          <h3 className="panel__title">History</h3>
          <div className="history__list">
            {history.length === 0 ? (
              <p className="history__empty">No calculations yet...</p>
            ) : (
              history.map((item, index) => (
                <motion.div
                  key={index}
                  className="history__item"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item}
                </motion.div>
              ))
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}