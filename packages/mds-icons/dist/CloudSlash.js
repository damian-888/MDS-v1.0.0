import { jsxs as n, jsx as r } from "react/jsx-runtime";
import { forwardRef as s, useId as h } from "react";
const c = s(({
  size: l = "1em",
  title: a,
  titleId: d,
  ...e
}, i) => {
  const t = h(), o = a ? d ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: i, "aria-labelledby": o, ...e, children: [
    a ? /* @__PURE__ */ r("title", { id: o, children: a }) : null,
    /* @__PURE__ */ r("path", { fill: "currentColor", d: "M5.333 2.994a1.125 1.125 0 1 0-1.665 1.513L6.73 7.875a6.375 6.375 0 1 0 .02 12.75H15a8.6 8.6 0 0 0 2.875-.491l.793.873a1.125 1.125 0 0 0 1.665-1.513zM15 18.375H6.75a4.125 4.125 0 0 1-.169-8.245A8.6 8.6 0 0 0 6.375 12a1.125 1.125 0 1 0 2.25 0c0-.597.084-1.192.25-1.766l7.3 8.031a6.4 6.4 0 0 1-1.175.11M23.625 12a8.56 8.56 0 0 1-1.643 5.063 1.124 1.124 0 1 1-1.82-1.323 6.375 6.375 0 0 0-8.397-9.237 1.125 1.125 0 0 1-1.144-1.937A8.625 8.625 0 0 1 23.625 12" })
  ] });
});
c.displayName = "CloudSlash";
export {
  c as CloudSlash
};
//# sourceMappingURL=CloudSlash.js.map
