import { jsxs as n, jsx as o } from "react/jsx-runtime";
import { forwardRef as s, useId as m } from "react";
const h = s(({
  size: a = "1em",
  title: l,
  titleId: d,
  ...e
}, i) => {
  const t = m(), r = l ? d ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: i, "aria-labelledby": r, ...e, children: [
    l ? /* @__PURE__ */ o("title", { id: r, children: l }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M22.546 5.953a1.125 1.125 0 0 0-1.594 0L18 8.905 15.094 6l2.955-2.954a1.127 1.127 0 0 0-1.594-1.594L13.5 4.405l-2.204-2.202a1.128 1.128 0 0 0-1.594 1.594l.33.327-4.699 4.7a4.125 4.125 0 0 0 0 5.835l1.208 1.207-4.337 4.337a1.127 1.127 0 0 0 1.594 1.594l4.337-4.337 1.207 1.207a4.126 4.126 0 0 0 5.834 0l4.699-4.7.33.33a1.125 1.125 0 0 0 1.923-.796 1.13 1.13 0 0 0-.33-.797l-2.204-2.205 2.955-2.954a1.124 1.124 0 0 0-.003-1.592m-8.962 11.122a1.876 1.876 0 0 1-2.653 0l-4.007-4.007a1.874 1.874 0 0 1 0-2.652l4.701-4.698 6.656 6.656z" })
  ] });
});
h.displayName = "Plug";
export {
  h as Plug
};
//# sourceMappingURL=Plug.js.map
