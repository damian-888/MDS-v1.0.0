import { jsxs as m, jsx as o } from "react/jsx-runtime";
import { forwardRef as a, useId as t } from "react";
const n = a(({
  size: h = "1em",
  title: r,
  titleId: v,
  ...d
}, e) => {
  const i = t(), l = r ? v ?? i : void 0;
  return /* @__PURE__ */ m("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: h, height: h, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: e, "aria-labelledby": l, ...d, children: [
    r ? /* @__PURE__ */ o("title", { id: l, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M21 4.125H3A1.125 1.125 0 0 0 1.875 5.25v13.5A1.125 1.125 0 0 0 3 19.875h18a1.125 1.125 0 0 0 1.125-1.125V5.25A1.125 1.125 0 0 0 21 4.125m-12.375 9v-2.25h6.75v2.25zm-4.5 0v-2.25h2.25v2.25zm13.5-2.25h2.25v2.25h-2.25zm2.25-2.25h-6.75v-2.25h6.75zm-9-2.25v2.25h-6.75v-2.25zm-6.75 9h6.75v2.25h-6.75zm9 2.25v-2.25h6.75v2.25z" })
  ] });
});
n.displayName = "Wall";
export {
  n as Wall
};
//# sourceMappingURL=Wall.js.map
