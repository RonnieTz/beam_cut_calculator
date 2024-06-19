'use client';
import { useState } from 'react';
import { triangle } from '../utils/trigonometry';
import Result from './Result';

const Form = ({
  r_ref,
  t_ref,
  w_ref,
  h_ref,
}: {
  r_ref: React.RefObject<HTMLInputElement>;
  t_ref: React.RefObject<HTMLInputElement>;
  w_ref: React.RefObject<HTMLInputElement>;
  h_ref: React.RefObject<HTMLInputElement>;
}) => {
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

    const { a: cutOnHorizontal } = triangle({
      a: undefined,
      b: rafterWidth,
      c: undefined,
      A: undefined,
      B: rafterAngleTop,
      C: 90,
    });

    console.log(cutOnHorizontal);

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
                  ref={t_ref}
                  type="number"
                  id="rafterAngleTop"
                  value={rafterAngleTop.toString()}
                  onChange={(e) => {
                    setRafterAngleTop(e.target.valueAsNumber);
                  }}
                />
              </td>
            </tr>
            <tr>
              <td>
                <p>r:</p>
              </td>
              <td>
                <input
                  ref={r_ref}
                  type="number"
                  id="rafterAngleSide"
                  value={rafterAngleSide.toString()}
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
                  ref={w_ref}
                  type="number"
                  id="rafterWidth"
                  value={rafterWidth.toString()}
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
                  ref={h_ref}
                  type="number"
                  id="rafterHeight"
                  value={rafterHeight.toString()}
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
