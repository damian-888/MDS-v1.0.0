import { jsxs as m, jsx as d } from "react/jsx-runtime";
import { forwardRef as t, useId as v } from "react";
const n = t(({
  size: e = "1em",
  title: r,
  titleId: h,
  ...i
}, l) => {
  const a = v(), o = r ? h ?? a : void 0;
  return /* @__PURE__ */ m("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": o, ...i, children: [
    r ? /* @__PURE__ */ d("title", { id: o, children: r }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M21 4.125H3A1.125 1.125 0 0 0 1.875 5.25V18a1.875 1.875 0 0 0 1.875 1.875h16.5A1.875 1.875 0 0 0 22.125 18V5.25A1.125 1.125 0 0 0 21 4.125m-16.875 6.75h3v2.25h-3zm5.25 0h10.5v2.25h-10.5zm10.5-4.5v2.25H4.125v-2.25zm-15.75 9h3v2.25h-3zm5.25 2.25v-2.25h10.5v2.25z" })
  ] });
});
n.displayName = "Table";
export {
  n as Table
};
//# sourceMappingURL=Table.js.map
