import { jsxs as n, jsx as o } from "react/jsx-runtime";
import { forwardRef as s, useId as m } from "react";
const h = s(({
  size: r = "1em",
  title: l,
  titleId: a,
  ...d
}, i) => {
  const t = m(), e = l ? a ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: i, "aria-labelledby": e, ...d, children: [
    l ? /* @__PURE__ */ o("title", { id: e, children: l }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "m22.327 6.613-4.94-4.939a1.874 1.874 0 0 0-2.652 0L1.673 14.734a1.875 1.875 0 0 0 0 2.653l4.94 4.939a1.874 1.874 0 0 0 2.652 0l13.062-13.06a1.873 1.873 0 0 0 0-2.653M7.939 20.47l-4.406-4.406L6 13.593 8.205 15.8a1.127 1.127 0 1 0 1.594-1.594L7.594 12 9 10.594l2.204 2.205a1.127 1.127 0 1 0 1.594-1.594L10.594 9 12 7.594l2.205 2.205a1.127 1.127 0 0 0 1.594-1.594L13.594 6l2.47-2.47 4.406 4.407z" })
  ] });
});
h.displayName = "Ruler";
export {
  h as Ruler
};
//# sourceMappingURL=Ruler.js.map
