'use client';
import { useState } from 'react';
import { triangle } from '../utils/trigonometry';
import Result from './Result';

const Form = () => {
  const [rafterAngleTop, setRafterAngleTop] = useState(0);
  const [rafterAngleSide, setRafterAngleSide] = useState(0);
  const [rafterWidth, setRafterWidth] = useState(0);
  const [rafterHeight, setRafterHeight] = useState(0);
  const [cutAngleTop, setCutAngleTop] = useState(0);
  const [cutAngleSide, setCutAngleSide] = useState(0);

  const onSubmit = () => {
    if (
      rafterAngleSide <= 0 ||
      rafterAngleSide <= 0 ||
      rafterAngleTop <= 0 ||
      rafterAngleTop <= 0
    )
      return;

    const { c: cutOnHorizontal } = triangle({
      a: rafterWidth,
      b: undefined,
      c: undefined,
      A: undefined,
      B: rafterAngleTop,
      C: 90,
    });

    const { c: topCut } = triangle({
      a: cutOnHorizontal,
      b: undefined,
      c: undefined,
      A: undefined,
      B: rafterAngleSide,
      C: 90,
    });

    const { b: sideCut } = triangle({
      a: rafterHeight,
      b: undefined,
      c: undefined,
      A: undefined,
      B: rafterAngleSide,
      C: 90,
    });

    setCutAngleTop(topCut);
    setCutAngleSide(sideCut);
  };
  return (
    <>
      <form>
        <table>
          <tbody>
            <tr>
              <td>
                <p>t:</p>
              </td>
              <td>
                <input
                  type="number"
                  id="rafterAngleTop"
                  value={rafterAngleTop}
                  onChange={(e) => setRafterAngleTop(e.target.valueAsNumber)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <p>r:</p>
              </td>
              <td>
                <input
                  type="number"
                  id="rafterAngleSide"
                  value={rafterAngleSide}
                  onChange={(e) => setRafterAngleSide(e.target.valueAsNumber)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <p>w:</p>
              </td>
              <td>
                <input
                  type="number"
                  id="rafterWidth"
                  value={rafterWidth}
                  onChange={(e) => setRafterWidth(e.target.valueAsNumber)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <p>h:</p>
              </td>
              <td>
                <input
                  type="number"
                  id="rafterHeight"
                  value={rafterHeight}
                  onChange={(e) => setRafterHeight(e.target.valueAsNumber)}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <button onClick={onSubmit} type="button">
          Calculate
        </button>
      </form>
      {cutAngleTop > 0 && cutAngleSide > 0 && (
        <Result cutAngleTop={cutAngleTop} cutAngleSide={cutAngleSide} />
      )}
    </>
  );
};
export default Form;
