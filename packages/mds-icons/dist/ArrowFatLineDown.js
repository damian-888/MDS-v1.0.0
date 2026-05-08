import { jsxs as h, jsx as e } from "react/jsx-runtime";
import { forwardRef as t, useId as w } from "react";
const s = t(({
  size: o = "1em",
  title: r,
  titleId: i,
  ...d
}, l) => {
  const n = w(), a = r ? i ?? n : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": a, ...d, children: [
    r ? /* @__PURE__ */ e("title", { id: a, children: r }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M22.04 12.32a1.12 1.12 0 0 0-1.04-.695h-3.375V7.5A1.125 1.125 0 0 0 16.5 6.375h-9A1.125 1.125 0 0 0 6.375 7.5v4.125H3a1.125 1.125 0 0 0-.795 1.92l9 9a1.127 1.127 0 0 0 1.594 0l9-9a1.125 1.125 0 0 0 .24-1.225M12 20.156l-6.281-6.281h1.78a1.125 1.125 0 0 0 1.126-1.125V8.625h6.75v4.125a1.125 1.125 0 0 0 1.125 1.125h1.781zM6.375 3.75A1.125 1.125 0 0 1 7.5 2.625h9a1.125 1.125 0 1 1 0 2.25h-9A1.125 1.125 0 0 1 6.375 3.75" })
  ] });
});
s.displayName = "ArrowFatLineDown";
export {
  s as ArrowFatLineDown
};
//# sourceMappingURL=ArrowFatLineDown.js.map
