import './square.css';

const Square = ({ colorValue }) => {
  return (
    <section className="square" style={{ backgroundColor: colorValue }}>
      {colorValue ? colorValue : 'Empty Value'}
    </section>
  );
};

export default Square;
