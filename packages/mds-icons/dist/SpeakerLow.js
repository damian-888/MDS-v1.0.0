import { jsxs as n, jsx as d } from "react/jsx-runtime";
import { forwardRef as h, useId as m } from "react";
const s = h(({
  size: e = "1em",
  title: r,
  titleId: i,
  ...l
}, a) => {
  const t = m(), o = r ? i ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: a, "aria-labelledby": o, ...l, children: [
    r ? /* @__PURE__ */ d("title", { id: o, children: r }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M14.744 1.99a1.13 1.13 0 0 0-1.185.122L7.114 7.125H3A1.875 1.875 0 0 0 1.125 9v6A1.875 1.875 0 0 0 3 16.875h4.114l6.445 5.013A1.125 1.125 0 0 0 15.375 21V3a1.13 1.13 0 0 0-.63-1.01M3.375 9.374h3v5.25h-3zm9.75 9.324-4.5-3.5V8.8l4.5-3.5zm6.75-6.7a4.13 4.13 0 0 1-1.031 2.73 1.125 1.125 0 0 1-1.688-1.489 1.875 1.875 0 0 0 0-2.479 1.125 1.125 0 0 1 1.688-1.485A4.12 4.12 0 0 1 19.875 12" })
  ] });
});
s.displayName = "SpeakerLow";
export {
  s as SpeakerLow
};
//# sourceMappingURL=SpeakerLow.js.map
