import { jsxs as n, jsx as a } from "react/jsx-runtime";
import { forwardRef as h, useId as m } from "react";
const s = h(({
  size: e = "1em",
  title: r,
  titleId: o,
  ...d
}, i) => {
  const t = m(), l = r ? o ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: i, "aria-labelledby": l, ...d, children: [
    r ? /* @__PURE__ */ a("title", { id: l, children: r }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "M14.744 1.99a1.13 1.13 0 0 0-1.185.122L7.114 7.125H3A1.875 1.875 0 0 0 1.125 9v6A1.875 1.875 0 0 0 3 16.875h4.114l6.445 5.013A1.125 1.125 0 0 0 15.375 21V3a1.13 1.13 0 0 0-.63-1.01M3.375 9.374h3v5.25h-3zm9.75 9.325-4.5-3.501V8.8l4.5-3.5zm10.17-5.245a1.126 1.126 0 1 1-1.593 1.594l-1.452-1.455-1.454 1.455a1.127 1.127 0 1 1-1.594-1.594L18.656 12l-1.455-1.454a1.127 1.127 0 1 1 1.594-1.594l1.455 1.454 1.454-1.454a1.127 1.127 0 1 1 1.594 1.594L21.844 12z" })
  ] });
});
s.displayName = "SpeakerX";
export {
  s as SpeakerX
};
//# sourceMappingURL=SpeakerX.js.map
