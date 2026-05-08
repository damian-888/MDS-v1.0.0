import { jsxs as n, jsx as d } from "react/jsx-runtime";
import { forwardRef as s, useId as m } from "react";
const w = s(({
  size: o = "1em",
  title: i,
  titleId: e,
  ...l
}, t) => {
  const a = m(), r = i ? e ?? a : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": i ? void 0 : !0, role: i ? "img" : void 0, ref: t, "aria-labelledby": r, ...l, children: [
    i ? /* @__PURE__ */ d("title", { id: r, children: i }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M13.5 19.126a1.5 1.5 0 1 1-3.001 0 1.5 1.5 0 0 1 3 0m2.911-4.566a7.5 7.5 0 0 0-8.823 0 1.125 1.125 0 0 0 1.324 1.819 5.25 5.25 0 0 1 6.175 0 1.126 1.126 0 0 0 1.324-1.82" })
  ] });
});
w.displayName = "WifiLow";
export {
  w as WifiLow
};
//# sourceMappingURL=WifiLow.js.map
