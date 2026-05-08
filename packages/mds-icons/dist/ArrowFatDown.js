import { jsxs as n, jsx as d } from "react/jsx-runtime";
import { forwardRef as h, useId as w } from "react";
const s = h(({
  size: o = "1em",
  title: r,
  titleId: l,
  ...e
}, i) => {
  const t = w(), a = r ? l ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: i, "aria-labelledby": a, ...e, children: [
    r ? /* @__PURE__ */ d("title", { id: a, children: r }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M22.04 12.32a1.12 1.12 0 0 0-1.04-.695h-3.375V4.5a1.875 1.875 0 0 0-1.875-1.875h-7.5A1.875 1.875 0 0 0 6.375 4.5v7.125H3a1.125 1.125 0 0 0-.795 1.92l9 9a1.127 1.127 0 0 0 1.594 0l9-9a1.125 1.125 0 0 0 .24-1.225M12 20.156l-6.281-6.281h1.78a1.125 1.125 0 0 0 1.126-1.125V4.875h6.75v7.875a1.125 1.125 0 0 0 1.125 1.125h1.781z" })
  ] });
});
s.displayName = "ArrowFatDown";
export {
  s as ArrowFatDown
};
//# sourceMappingURL=ArrowFatDown.js.map
