import { jsxs as n, jsx as e } from "react/jsx-runtime";
import { forwardRef as t, useId as s } from "react";
const w = t(({
  size: a = "1em",
  title: r,
  titleId: i,
  ...d
}, h) => {
  const l = s(), o = r ? i ?? l : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: h, "aria-labelledby": o, ...d, children: [
    r ? /* @__PURE__ */ e("title", { id: o, children: r }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M22.04 12.32a1.125 1.125 0 0 0-1.04-.695h-3.375v-.375a1.125 1.125 0 0 0-1.125-1.125h-9a1.125 1.125 0 0 0-1.125 1.125v.375H3a1.125 1.125 0 0 0-.796 1.92l9 9a1.125 1.125 0 0 0 1.594 0l9-9a1.12 1.12 0 0 0 .242-1.225M12 20.156l-6.281-6.281h1.78a1.125 1.125 0 0 0 1.126-1.125v-.375h6.75v.375a1.125 1.125 0 0 0 1.125 1.125h1.781zM6.375 3.75A1.125 1.125 0 0 1 7.5 2.625h9a1.125 1.125 0 0 1 0 2.25h-9A1.125 1.125 0 0 1 6.375 3.75m0 3.75A1.125 1.125 0 0 1 7.5 6.375h9a1.125 1.125 0 0 1 0 2.25h-9A1.125 1.125 0 0 1 6.375 7.5" })
  ] });
});
w.displayName = "ArrowFatLinesDown";
export {
  w as ArrowFatLinesDown
};
//# sourceMappingURL=ArrowFatLinesDown.js.map
