import React, { useEffect, useRef } from "react";

import "./Logo.scss";
import LogoS from "../../../assets/images/logo-s.png";

import gsap from "gsap-trial";
// import DrawSVGPlugin from "gsap-trial/DrawSVGPlugin";

function Logo() {
  const bgRef = useRef();
  const outlineLogoRef = useRef();
  const solidLogoRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin);

    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
//       .fromTo(
//         outlineLogoRef.current,
//         3,
//         {
//           drawSVG: "100% 100%",
//         },
//         {
//           drawSVG: true,
//         }
//       );

    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 2,
        duration: 2,
      }
    );
  }, []);

  return (
    <div className="logo-container" ref={bgRef}>
      <img ref={solidLogoRef} className="solid-logo" src={LogoS} alt="S" />

      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="Warstwa_1"
        viewBox="0 0 664.07 848.02"
        version="1.1"
      >
        <g className="svg-container" fill="none">
          <path
            ref={outlineLogoRef}
            d="m 0.5,46.67 h 226.18 l 80.42,415.5 69.81,-415.5 H 612.58 V 847.52 H 455.65 V 397.95 L 364.06,847.52 H 242.88 l -105,-449.57 V 847.52 H 0.5 Z M 275.57,1 226.29,45.67 H 3.09 L 52.37,1 h 223.2 m 2.59,-1 H 51.98 L 0.5,46.67 H 226.68 L 278.16,0 Z M 277.52,1.93 334.21,294.8 307.03,456.54 227.77,47.03 277.52,1.93 M 278.16,0 226.68,46.67 307.1,462.17 335.22,294.79 278.16,0 Z m -139.28,406.63 50.5,216.22 -1.01,177.56 -49.49,44.86 V 406.63 m -1,-8.68 v 449.57 l 51.48,-46.67 1.01,-178.11 -52.5,-224.78 v 0 z m 316.77,9.92 v 196.02 l -40.02,196.43 -48.98,44.4 89,-436.86 m 1,-9.92 -91.59,449.57 51.48,-46.67 40.1,-196.85 v -206.04 0 z M 663.07,2.26 V 800.4 l -49.48,44.86 V 47.11 L 663.07,2.26 m 1,-2.26 -51.48,46.67 v 800.85 l 51.48,-46.67 V 0 Z M 661.48,1 612.2,45.67 H 379.5 L 428.78,1 h 232.7 m 2.59,-1 H 428.4 L 376.92,46.67 H 612.59 L 664.07,0 Z"
          />
        </g>
      </svg>

      {/* <svg
        id="Warstwa_1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 665.07 849.02"
      >
        <g
          className="svg-container"
          transform="translate(0 457) scale(.1 -.1"
          fill="none"
        >
          <path
            ref={outlineLogoRef}
            d="M611.58,47.67V846.52h-154.93V388.03l-1.98,9.72-91.43,448.77h-119.58l-104.81-448.8-1.97-8.45v457.25H1.5V47.67H225.85l80.26,414.69,1.05,5.43,.92-5.46L377.76,47.67h233.83m1-1h-235.67l-69.81,415.5L226.68,46.67H.5V847.52H137.88V397.95l104.99,449.57h121.19l91.59-449.57v449.57h156.93V46.67h0Z"
          />
          <path
            ref={outlineLogoRef}
            d="M661.48,1l-49.28,44.67h-232.7L428.78,1h232.7M664.07,0h-235.67l-51.48,46.67h235.67L664.07,0h0Z"
          />
          <path
            ref={outlineLogoRef}
            d="M663.07,2.26V800.4l-49.48,44.86V47.11L663.07,2.26M664.07,0l-51.48,46.67V847.52l51.48-46.67V0h0Z"
          />
          <path
            ref={outlineLogoRef}
            d="M454.65,407.87v196.02l-40.02,196.43-48.98,44.4,89-436.86m1-9.92l-91.59,449.57,51.48-46.67,40.1-196.85v-206.04h0Z"
          />
          <path
            ref={outlineLogoRef}
            d="M138.88,406.63l50.5,216.22-1.01,177.56-49.49,44.86V406.63m-1-8.68v449.57l51.48-46.67,1.01-178.11-52.5-224.78h0Z"
          />
          <path
            ref={outlineLogoRef}
            d="M277.52,1.93l56.69,292.87-27.18,161.74L227.77,47.03,277.52,1.93M278.16,0l-51.48,46.67,80.42,415.5,28.12-167.38L278.16,0h0Z"
          />
          <path
            ref={outlineLogoRef}
            d="M275.57,1l-49.28,44.67H3.09L52.37,1h223.2M278.16,0H51.98L.5,46.67H226.68L278.16,0h0Z"
          />
        </g>
      </svg> */}
    </div>
  );
}

export default Logo;
