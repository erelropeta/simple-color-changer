import './input.css';

const Input = () => {
  return (
    <form className="form">
      <label htmlFor=""></label>
      <input
        className="form__color-input"
        id="colorInput"
        type="text"
        placeholder="Add color name"
      />
    </form>
  );
};

export default Input;
