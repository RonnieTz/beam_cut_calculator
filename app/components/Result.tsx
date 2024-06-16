'use client';

import { useEffect, useRef } from 'react';

const Result = ({
  cutAngleSide,
  cutAngleTop,
}: {
  cutAngleTop: number;
  cutAngleSide: number;
}) => {
  const ref = useRef(null);

  useEffect(() => {
    // @ts-ignore
    ref.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'end',
    });
  }, []);
  return (
    <div className="result-container">
      <div className="container">
        <div className="label A">A</div>
        <img src="/rafter_scope_top_result.png" alt="spectator view" />
      </div>
      <div className="container">
        <div className="label B">B</div>
        <img src="/rafter_scope_close_result.png" alt="spectator view" />
      </div>

      <table style={{ width: '100%' }}>
        <tbody>
          <tr>
            <td
              style={{
                fontSize: '1.2rem',
                fontWeight: 'bold',
              }}
            >
              Cut A:
            </td>
            <td>
              <p>{+cutAngleTop.toFixed(2)}</p>
            </td>
          </tr>
          <tr>
            <td style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Cut B:</td>
            <td>
              <p>{+cutAngleSide.toFixed(2)}</p>
            </td>
          </tr>
        </tbody>
      </table>
      <div style={{ height: '80vh' }} ref={ref}></div>
    </div>
  );
};
export default Result;
