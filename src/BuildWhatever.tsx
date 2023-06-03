import React, { useEffect, useState } from 'react';

const apps = ['a social media app', 'an NFT marketplace', 'your next game', 'a supply chain tracking system', 'a digital identity verification system', 'a peer-to-peer marketplace', 'a voting system', 'a healthcare records system'];
const execLayers = ['the EVM', 'the SVM', 'the OP Stack', 'Move VM', "the ZKVM", "the zkEVM", "WASM", "Rollkit"];
const daLayers = ['Celestia', 'Ethereum', 'Bitcoin', 'EigenLayer', 'Google Drive', 'whatever you want']; 

const BuildWhatever: React.FC = () => {
  const [buildWhatever, setBuildWhatever] = useState('');
  const [typedSelection, setTypedSelection] = useState('');

  const generateRandomBuild = () => {
    const randomApp = apps[Math.floor(Math.random() * apps.length)];
    const randomExecLayer = execLayers[Math.floor(Math.random() * execLayers.length)];
    const randomDaLayer = daLayers[Math.floor(Math.random() * daLayers.length)];

    const newSelection = `build ${randomApp} with ${randomExecLayer} on ${randomDaLayer}`;
    setBuildWhatever(newSelection);
  }

  useEffect(() => {
    generateRandomBuild();
  }, []);

  useEffect(() => {
    if (buildWhatever !== '') {
      let i = -1;
      const typing = setInterval(() => {
        if (i < buildWhatever.length) {
          setTypedSelection((prevTyped) => prevTyped + buildWhatever[i]);
          i++;
        }
        if (i >= buildWhatever.length-1) {
          clearInterval(typing);

          setTimeout(() => {
            setTypedSelection('');
            generateRandomBuild();
          }, 2000); // Wait for 2 seconds before generating a new string
        }
      }, 50);

      return () => clearInterval(typing);
    }
  }, [buildWhatever]);

  return <p className="fixed-height">{typedSelection}</p>;
};

export default BuildWhatever;