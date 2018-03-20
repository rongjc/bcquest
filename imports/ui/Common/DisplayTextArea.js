import React from 'react';

export const DisplayTextArea = props => {
  return (
    <div key={props.key ? props.key : ''} className="item">
      <div>
        <div className="display-container">
          <p className="label">{props.label}</p>
        </div>
        <div className="copy-area-container">
          <button className="copy" data-clipboard-action="copy" data-clipboard-text={props.value} />
        </div>
      </div>
      <pre>{props.value}</pre>
      <p className="description">{props.description}</p>
    </div>
  );
};
