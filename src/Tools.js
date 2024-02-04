import React, { useState } from 'react';
import './Tools.css';

/* Grab inputs for name and description
    Named files 'logo(name of company).png' to make it easy to parse
    Handle click changes button's colors
*/
function ToolItem({ name, description }) {
    const [isConnected, setIsConnected] = useState(false);
  
    const handleClick = () => {
      setIsConnected(!isConnected);
    };
  
    return (
      <li>
        <div>
          <img src={`logo${name.toLowerCase()}.png`} alt={name} />
          <span className="tool-text">
            <h4>{name}</h4>
            <p>{description}</p>
            <button
              className={`tool-button ${isConnected ? 'button-connected' : ''}`}
              onClick={handleClick}
            >
              {isConnected ? 'Connected' : 'Connect'}
            </button>
          </span>
        </div>
      </li>
    );
  }
  
/* Inputs for all 8 companies */
function Tools() {
  return (
    <div className="tools-list">
      <ul>
        <ToolItem name="Figma" description="Stay up to date with your team's latest designs." />
        <ToolItem name="GoogleDrive" description="Access all of your documents and information." />
        <ToolItem name="Slack" description="Communicate seamlessly with your teammates." />
        <ToolItem name="Notion" description="Sync all of your notes, team docs, and other important information." />
        <ToolItem name="Miro" description="Unlock the power of collaboration to distill insights from data." />
        <ToolItem name="Airtable" description="Keep your data organized in a spreadsheet-database format." />
        <ToolItem name="Confluence" description="Create content, collaborate on work, and organize and share information" />
        <ToolItem name="Dovetail" description="Organize and tag your research in a collaborative platform." />
      </ul>
    </div>
  );
}

export default Tools;

