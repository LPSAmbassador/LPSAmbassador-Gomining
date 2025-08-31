import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import "./App.css";

function App() {
  return (
    <div className="app">
      <motion.div
        className="background"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>
      <div className="content">
        <h1>Start Mining Smarter with GoMining</h1>
        <p>Join GoMining today and earn with powerful NFT miners.</p>
        <a href="https://gomining.com/?ref=eSFSX" target="_blank" rel="noopener noreferrer" className="cta-button">
          Join Now <ArrowRight size={18} />
        </a>
      </div>
      <footer>
        <p>Created by <strong>LPSAmbassador</strong> | 
           <a href="https://x.com/LPSAmbassador" target="_blank" rel="noopener noreferrer"> Follow me on X</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
