import React from "react";
import './BlockComponents.css';
import imagePath from '../../Image/image_14.png';
import logo7 from '../../Image/logo7.png';
import DashboardOutlinedIcon from './buttons';

interface BlockComponentsProps {

}

const BlockComponents: React.FC<BlockComponentsProps> = () => {
  return (
    <div className="block">
      <img src={imagePath} alt=" Description" />
      <div className="line"></div>
      <div className="list">
        <DashboardOutlinedIcon />
      </div>
      <div className="line2"></div>
      <div className="logo">
        <img src={logo7} alt=" Description" />
      </div>
    </div>
  );
};

export default BlockComponents;
