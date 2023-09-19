import './input.css';

const Input = ({ handleChangeInput }) => {
  return (
    <form className="form">
      <label htmlFor=""></label>
      <input
        className="form__color-input"
        id="colorInput"
        type="text"
        placeholder="Add color name"
        onChange={(e) => handleChangeInput(e.target.value)}
        autoFocus
      />
    </form>
  );
};

export default Input;
