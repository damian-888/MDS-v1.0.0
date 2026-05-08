import { jsxs as n, jsx as l } from "react/jsx-runtime";
import { forwardRef as h, useId as v } from "react";
const s = h(({
  size: r = "1em",
  title: a,
  titleId: i,
  ...o
}, e) => {
  const t = v(), d = a ? i ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: e, "aria-labelledby": d, ...o, children: [
    a ? /* @__PURE__ */ l("title", { id: d, children: a }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "M22.125 18.623V22.5a1.125 1.125 0 1 1-2.25 0v-3.877a6.62 6.62 0 0 0-1.5-4.186v4.526a1.125 1.125 0 0 1-2.062.616l-1-1.528-.035-.055a.75.75 0 1 0-1.312.729l2.062 3.155a1.125 1.125 0 1 1-1.882 1.232l-2.087-3.187-.033-.055a3 3 0 0 1 4.099-4.092V6.375h-.75a1.125 1.125 0 0 1 0-2.25H16.5A1.875 1.875 0 0 1 18.375 6v5.393a8.9 8.9 0 0 1 3.75 7.23M8.25 5.25a1.125 1.125 0 0 0-1.125-1.125H6A1.875 1.875 0 0 0 4.125 6v12.75a1.125 1.125 0 0 0 2.25 0V6.375h.75A1.125 1.125 0 0 0 8.25 5.25m6.42 5.67a1.127 1.127 0 1 0-1.593-1.594l-.702.705V1.5a1.125 1.125 0 1 0-2.25 0v8.531l-.704-.705a1.127 1.127 0 0 0-1.594 1.594l2.625 2.625a1.125 1.125 0 0 0 1.594 0z" })
  ] });
});
s.displayName = "HandWithdraw";
export {
  s as HandWithdraw
};
//# sourceMappingURL=HandWithdraw.js.map
