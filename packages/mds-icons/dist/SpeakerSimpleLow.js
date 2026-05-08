import { jsxs as n, jsx as a } from "react/jsx-runtime";
import { forwardRef as m, useId as p } from "react";
const s = m(({
  size: r = "1em",
  title: e,
  titleId: i,
  ...l
}, d) => {
  const t = p(), o = e ? i ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": e ? void 0 : !0, role: e ? "img" : void 0, ref: d, "aria-labelledby": o, ...l, children: [
    e ? /* @__PURE__ */ a("title", { id: o, children: e }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "M15.494 1.99a1.13 1.13 0 0 0-1.185.122L7.864 7.125H3.75A1.875 1.875 0 0 0 1.875 9v6a1.875 1.875 0 0 0 1.875 1.875h4.114l6.445 5.013A1.125 1.125 0 0 0 16.125 21V3a1.13 1.13 0 0 0-.63-1.01M13.875 18.7l-4.934-3.838a1.13 1.13 0 0 0-.691-.237H4.125v-5.25H8.25c.25 0 .493-.084.69-.237L13.876 5.3zm6-8.95v4.5a1.125 1.125 0 1 1-2.25 0v-4.5a1.125 1.125 0 1 1 2.25 0" })
  ] });
});
s.displayName = "SpeakerSimpleLow";
export {
  s as SpeakerSimpleLow
};
//# sourceMappingURL=SpeakerSimpleLow.js.map
