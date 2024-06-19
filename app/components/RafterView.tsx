const RafterView = ({
  r_ref,
  t_ref,
  w_ref,
  h_ref,
}: {
  r_ref: React.RefObject<HTMLDivElement>;
  t_ref: React.RefObject<HTMLDivElement>;
  w_ref: React.RefObject<HTMLDivElement>;
  h_ref: React.RefObject<HTMLDivElement>;
}) => {
  return (
    <div className="rafter-view-container">
      <figure>
        <figcaption>
          Choose the rafter&apos;s angles and dimensions shown in the scope.
        </figcaption>
        <div className="container">
          <div
            onClick={() => r_ref.current?.focus()}
            className="label r"
            tabIndex={0}
          >
            r
          </div>
          <img src="/rafter_scope_side.png" alt="spectator view" />
        </div>
        <div className="container">
          <div
            onClick={() => t_ref.current?.focus()}
            className="label t"
            tabIndex={0}
          >
            t
          </div>
          <img src="/top_view.png" alt="spectator view" />
        </div>
        <div className="container">
          <div
            onClick={() => w_ref.current?.focus()}
            className="label w"
            tabIndex={0}
          >
            w
          </div>
          <img src="/rafter_scope_top.png" alt="spectator view" />
        </div>
        <div className="container">
          <div
            onClick={() => h_ref.current?.focus()}
            className="label h"
            tabIndex={0}
          >
            h
          </div>
          <img src="/rafter_scope_close.png" alt="spectator view" />
        </div>
      </figure>
    </div>
  );
};
export default RafterView;
