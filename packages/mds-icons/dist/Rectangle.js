import { jsxs as n, jsx as d } from "react/jsx-runtime";
import { forwardRef as h, useId as s } from "react";
const c = h(({
  size: r = "1em",
  title: e,
  titleId: i,
  ...l
}, a) => {
  const t = s(), o = e ? i ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": e ? void 0 : !0, role: e ? "img" : void 0, ref: a, "aria-labelledby": o, ...l, children: [
    e ? /* @__PURE__ */ d("title", { id: o, children: e }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M20.25 3.375H3.75A1.875 1.875 0 0 0 1.875 5.25v13.5a1.875 1.875 0 0 0 1.875 1.875h16.5a1.875 1.875 0 0 0 1.875-1.875V5.25a1.875 1.875 0 0 0-1.875-1.875m-.375 15H4.125V5.625h15.75z" })
  ] });
});
c.displayName = "Rectangle";
export {
  c as Rectangle
};
//# sourceMappingURL=Rectangle.js.map
