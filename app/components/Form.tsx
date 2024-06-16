'use client';
import { useState, MouseEvent } from 'react';

const Form = () => {
  const [rafterAngleTop, setRafterAngleTop] = useState(0);
  const [rafterAngleSide, setRafterAngleSide] = useState(0);
  const [rafterWidth, setRafterWidth] = useState(0);
  const [rafterHeight, setRafterHeight] = useState(0);
  const [cutAngleTop, setCutAngleTop] = useState(0);
  const [cutAngleSide, setCutAngleSide] = useState(0);

  const onSubmit = () => {
    setCutAngleTop(20);
    setCutAngleSide(30);
  };
  return (
    <>
      <form>
        <label htmlFor="rafterAngleTop">
          t:
          <input
            type="number"
            id="rafterAngleTop"
            value={rafterAngleTop}
            onChange={(e) => setRafterAngleTop(e.target.valueAsNumber)}
          />
        </label>
        <label htmlFor="rafterAngleSide">
          r:
          <input
            type="number"
            id="rafterAngleSide"
            value={rafterAngleSide}
            onChange={(e) => setRafterAngleSide(e.target.valueAsNumber)}
          />
        </label>
        <label htmlFor="rafterWidth">
          w:
          <input
            type="number"
            id="rafterWidth"
            value={rafterWidth}
            onChange={(e) => setRafterWidth(e.target.valueAsNumber)}
          />
        </label>
        <label htmlFor="rafterHeight">
          h:
          <input
            type="number"
            id="rafterHeight"
            value={rafterHeight}
            onChange={(e) => setRafterHeight(e.target.valueAsNumber)}
          />
        </label>
        <button onClick={onSubmit} type="button">
          Calculate
        </button>
      </form>
      {cutAngleTop > 0 && cutAngleSide > 0 && (
        <div className="result-container">
          <div className="container">
            <div className="label A">A</div>
            <img src="/rafter_scope_top_result.png" alt="spectator view" />
          </div>
          <div className="container">
            <div className="label B">B</div>
            <img src="/rafter_scope_close_result.png" alt="spectator view" />
          </div>
          <p className="p">{`Cut A: ${cutAngleTop}`}</p>
          <p className="p">{`Cut B: ${cutAngleSide}`}</p>
        </div>
      )}
    </>
  );
};
export default Form;
