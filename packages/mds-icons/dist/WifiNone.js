import { jsxs as a, jsx as e } from "react/jsx-runtime";
import { forwardRef as s, useId as f } from "react";
const h = s(({
  size: o = "1em",
  title: i,
  titleId: d,
  ...l
}, n) => {
  const t = f(), r = i ? d ?? t : void 0;
  return /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": i ? void 0 : !0, role: i ? "img" : void 0, ref: n, "aria-labelledby": r, ...l, children: [
    i ? /* @__PURE__ */ e("title", { id: r, children: i }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M13.5 19.125a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" })
  ] });
});
h.displayName = "WifiNone";
export {
  h as WifiNone
};
//# sourceMappingURL=WifiNone.js.map
