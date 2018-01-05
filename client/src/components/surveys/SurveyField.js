// SurveyField contains logic to render a single label and text input
import React for 'react';

export default ({input, label}) => {
  return (
    <div>
      <label>{label}</label>
      <input { ...input }/>
    </div>
  );
}
