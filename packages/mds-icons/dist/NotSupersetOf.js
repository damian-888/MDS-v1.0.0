import { jsxs as h, jsx as o } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const f = n(({
  size: e = "1em",
  title: r,
  titleId: a,
  ...d
}, t) => {
  const i = s(), l = r ? a ?? i : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: t, "aria-labelledby": l, ...d, children: [
    r ? /* @__PURE__ */ o("title", { id: l, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M19.5 17.627H8.407l1.364-1.5h4.48a6.375 6.375 0 0 0 4.955-10.38l1.125-1.239a1.125 1.125 0 0 0-1.665-1.513l-1.163 1.278a6.34 6.34 0 0 0-3.253-.896h-9a1.125 1.125 0 1 0 0 2.25h9a4.1 4.1 0 0 1 1.693.364l-7.168 7.886H5.25a1.125 1.125 0 0 0 0 2.25h1.48l-3.062 3.368a1.125 1.125 0 1 0 1.665 1.513l1.031-1.131H19.5a1.125 1.125 0 1 0 0-2.25M17.666 7.442a4.125 4.125 0 0 1-3.416 6.435h-2.437z" })
  ] });
});
f.displayName = "NotSupersetOf";
export {
  f as NotSupersetOf
};
//# sourceMappingURL=NotSupersetOf.js.map
