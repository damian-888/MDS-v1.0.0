import { jsxs as l, jsx as d } from "react/jsx-runtime";
import { forwardRef as h, useId as s } from "react";
const c = h(({
  size: i = "1em",
  title: a,
  titleId: o,
  ...e
}, n) => {
  const t = s(), r = a ? o ?? t : void 0;
  return /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: i, height: i, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: n, "aria-labelledby": r, ...e, children: [
    a ? /* @__PURE__ */ d("title", { id: r, children: a }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M16.125 6.375h-2.25A1.125 1.125 0 0 0 12.75 7.5v9a1.125 1.125 0 0 0 1.125 1.125h2.25a5.625 5.625 0 1 0 0-11.25m0 9H15v-6.75h1.125a3.375 3.375 0 0 1 0 6.75M1.875 4.125A1.125 1.125 0 0 1 3 3h18a1.125 1.125 0 0 1 0 2.25H3a1.125 1.125 0 0 1-1.125-1.125m20.25 15.75A1.125 1.125 0 0 1 21 21H3a1.125 1.125 0 1 1 0-2.25h18a1.125 1.125 0 0 1 1.125 1.125M9 14.25c0-.597-.59-.874-2.25-1.352-1.513-.436-3.584-1.031-3.584-3.148 0-1.924 1.701-3.375 3.958-3.375 1.616 0 3.006.763 3.627 1.991a1.125 1.125 0 1 1-2.007 1.017c-.232-.46-.869-.758-1.619-.758-.958 0-1.708.494-1.708 1.125 0 .102 0 .207.307.39.392.233 1.032.418 1.65.596.82.236 1.67.481 2.38.925 1.236.771 1.5 1.833 1.5 2.589 0 1.893-1.812 3.375-4.125 3.375s-4.125-1.482-4.125-3.375a1.125 1.125 0 0 1 2.25 0c0 .644.99 1.125 1.875 1.125S9 14.895 9 14.25" })
  ] });
});
c.displayName = "StandardDefinition";
export {
  c as StandardDefinition
};
//# sourceMappingURL=StandardDefinition.js.map
