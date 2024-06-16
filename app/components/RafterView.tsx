const RafterView = () => {
  return (
    <div className="rafter-view-container">
      <figure>
        <figcaption>
          Choose the rafter&apos;s angle shown in the scope.
        </figcaption>
        <div className="container">
          <div className="label r">r</div>
          <img src="/rafter_scope_side.png" alt="spectator view" />
        </div>
        <div className="container">
          <div className="label t">t</div>
          <img src="/top_view.png" alt="spectator view" />
        </div>
        <div className="container">
          <div className="label w">w</div>
          <img src="/rafter_scope_top.png" alt="spectator view" />
        </div>
        <div className="container">
          <div className="label h">h</div>
          <img src="/rafter_scope_close.png" alt="spectator view" />
        </div>
      </figure>
    </div>
  );
};
export default RafterView;
