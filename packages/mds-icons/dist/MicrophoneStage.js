import { jsxs as n, jsx as e } from "react/jsx-runtime";
import { forwardRef as c, useId as h } from "react";
const s = c(({
  size: r = "1em",
  title: o,
  titleId: l,
  ...i
}, d) => {
  const t = h(), a = o ? l ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: d, "aria-labelledby": a, ...i, children: [
    o ? /* @__PURE__ */ e("title", { id: a, children: o }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M15.75 1.125a7.116 7.116 0 0 0-7.079 7.906l-6.43 8.767a1.865 1.865 0 0 0 .188 2.438l1.34 1.34a1.865 1.865 0 0 0 2.438.187l8.767-6.43a7.125 7.125 0 1 0 .776-14.208m4.875 7.125c.001.903-.25 1.789-.726 2.557l-6.704-6.705a4.875 4.875 0 0 1 7.43 4.148M5.13 19.754l-.884-.884 5.268-7.184a7.17 7.17 0 0 0 2.8 2.8zM10.875 8.25a4.84 4.84 0 0 1 .727-2.557l6.704 6.705a4.876 4.876 0 0 1-7.43-4.148" })
  ] });
});
s.displayName = "MicrophoneStage";
export {
  s as MicrophoneStage
};
//# sourceMappingURL=MicrophoneStage.js.map
