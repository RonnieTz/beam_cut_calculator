'use client';
import { useState } from 'react';

const Form = () => {
  const [rafterAngleTop, setRafterAngleTop] = useState(0);
  const [rafterAngleSide, setRafterAngleSide] = useState(0);
  const [rafterWidth, setRafterWidth] = useState(0);
  const [rafterHeight, setRafterHeight] = useState(0);
  return (
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
      <button type="submit">Calculate</button>
    </form>
  );
};
export default Form;
