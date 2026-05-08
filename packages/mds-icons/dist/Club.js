import { jsxs as n, jsx as d } from "react/jsx-runtime";
import { forwardRef as h, useId as s } from "react";
const m = h(({
  size: r = "1em",
  title: l,
  titleId: e,
  ...i
}, a) => {
  const t = s(), o = l ? e ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: a, "aria-labelledby": o, ...i, children: [
    l ? /* @__PURE__ */ d("title", { id: o, children: l }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M17.512 7.88a5.625 5.625 0 1 0-11.023 0 5.625 5.625 0 1 0 1.78 11.037l-.374 1.862A1.125 1.125 0 0 0 9 22.124h6a1.127 1.127 0 0 0 1.104-1.345l-.375-1.862a5.624 5.624 0 1 0 1.78-11.037zm-.262 8.994a3.36 3.36 0 0 1-2.323-.926 1.125 1.125 0 0 0-1.875 1.037l.576 2.89h-3.255l.577-2.89a1.125 1.125 0 0 0-1.875-1.037 3.375 3.375 0 1 1-1.186-5.625 1.125 1.125 0 0 0 1.313-1.688 3.375 3.375 0 1 1 5.6-.004 1.124 1.124 0 0 0 1.312 1.688 3.373 3.373 0 0 1 4.389 4.06 3.376 3.376 0 0 1-3.253 2.495" })
  ] });
});
m.displayName = "Club";
export {
  m as Club
};
//# sourceMappingURL=Club.js.map
