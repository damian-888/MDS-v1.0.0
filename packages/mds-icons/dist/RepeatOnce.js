import { jsxs as n, jsx as r } from "react/jsx-runtime";
import { forwardRef as h, useId as s } from "react";
const c = h(({
  size: l = "1em",
  title: a,
  titleId: o,
  ...d
}, i) => {
  const t = s(), e = a ? o ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: i, "aria-labelledby": e, ...d, children: [
    a ? /* @__PURE__ */ r("title", { id: e, children: a }) : null,
    /* @__PURE__ */ r("path", { fill: "currentColor", d: "M1.875 11.999A7.13 7.13 0 0 1 9 4.874h9.281l-.33-.33a1.126 1.126 0 0 1 1.228-1.837q.207.087.366.244l2.25 2.25a1.125 1.125 0 0 1 0 1.594l-2.25 2.25A1.127 1.127 0 1 1 17.95 7.45l.33-.327H9a4.88 4.88 0 0 0-4.875 4.875 1.125 1.125 0 0 1-2.25 0M21 10.874a1.125 1.125 0 0 0-1.125 1.125A4.88 4.88 0 0 1 15 16.874H5.719l.33-.33a1.127 1.127 0 1 0-1.594-1.593l-2.25 2.25a1.125 1.125 0 0 0 0 1.594l2.25 2.25a1.126 1.126 0 0 0 1.838-1.228 1.1 1.1 0 0 0-.244-.366l-.33-.327h9.28a7.133 7.133 0 0 0 7.126-7.125A1.125 1.125 0 0 0 21 10.874m-8.25 4.5a1.125 1.125 0 0 0 1.125-1.125v-4.5a1.125 1.125 0 0 0-1.628-1.007l-1.5.75a1.125 1.125 0 0 0 .878 2.063v2.694a1.125 1.125 0 0 0 1.125 1.125" })
  ] });
});
c.displayName = "RepeatOnce";
export {
  c as RepeatOnce
};
//# sourceMappingURL=RepeatOnce.js.map
