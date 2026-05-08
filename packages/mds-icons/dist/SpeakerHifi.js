import { jsxs as n, jsx as o } from "react/jsx-runtime";
import { forwardRef as m, useId as h } from "react";
const s = m(({
  size: e = "1em",
  title: r,
  titleId: d,
  ...a
}, l) => {
  const t = h(), i = r ? d ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": i, ...a, children: [
    r ? /* @__PURE__ */ o("title", { id: i, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M18 1.875H6A1.875 1.875 0 0 0 4.125 3.75v16.5A1.875 1.875 0 0 0 6 22.125h12a1.875 1.875 0 0 0 1.875-1.875V3.75A1.875 1.875 0 0 0 18 1.875m-.375 18H6.375V4.125h11.25zM10.5 7.125a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0m1.5 11.25a4.125 4.125 0 1 0 0-8.25 4.125 4.125 0 0 0 0 8.25m0-6a1.875 1.875 0 1 1 0 3.75 1.875 1.875 0 0 1 0-3.75" })
  ] });
});
s.displayName = "SpeakerHifi";
export {
  s as SpeakerHifi
};
//# sourceMappingURL=SpeakerHifi.js.map
