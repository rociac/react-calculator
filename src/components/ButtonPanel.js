import React from 'react';
import Button from './Button';
import './ButtonPanel.css';

const buttonPanel = () => (
  <div className="buttonPanel">
    <div className="group-1">
      <Button name="AC" background="#e0e0e0" />
      <Button name="+/-" background="#e0e0e0" />
      <Button name="%" background="#e0e0e0" />
      <Button name="÷" />
    </div>
    <div className="group-2">
      <Button name="7" background="#e0e0e0" />
      <Button name="8" background="#e0e0e0" />
      <Button name="9" background="#e0e0e0" />
      <Button name="X" />
    </div>
    <div className="group-3">
      <Button name="4" background="#e0e0e0" />
      <Button name="5" background="#e0e0e0" />
      <Button name="6" background="#e0e0e0" />
      <Button name="-" />
    </div>
    <div className="group-4">
      <Button name="1" background="#e0e0e0" />
      <Button name="2" background="#e0e0e0" />
      <Button name="3" background="#e0e0e0" />
      <Button name="+" />
    </div>
    <div className="group-5">
      <Button name="0" background="#e0e0e0" wide={true} />
      <Button name="." background="#e0e0e0" />
      <Button name="=" />
    </div>
  </div>
);

export default buttonPanel;
