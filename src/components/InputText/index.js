import { useState } from "react";

const InputText = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className="formInput">
      <label className='label'>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        
        }
        className="Input"
        focused={focused.toString()}
      />
      <span className='text'>{errorMessage}</span>
    </div>
  );
};

export default InputText;