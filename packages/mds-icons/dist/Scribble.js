import { jsxs as n, jsx as e } from "react/jsx-runtime";
import { forwardRef as s, useId as c } from "react";
const h = s(({
  size: r = "1em",
  title: l,
  titleId: i,
  ...o
}, d) => {
  const t = c(), a = l ? i ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: d, "aria-labelledby": a, ...o, children: [
    l ? /* @__PURE__ */ e("title", { id: a, children: l }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M19.547 18.046a.99.99 0 0 0 0 1.406 1.127 1.127 0 0 1-1.594 1.594 3.245 3.245 0 0 1 0-4.594l.878-.879a.996.996 0 0 0-1.406-1.406l-6.259 6.258a3.248 3.248 0 1 1-4.594-4.594l9.26-9.258a.996.996 0 0 0-1.407-1.406l-6.259 6.257A3.248 3.248 0 0 1 3.572 6.83l3.882-3.876a1.127 1.127 0 0 1 1.593 1.593L5.165 8.424A.997.997 0 0 0 6.572 9.83l6.258-6.258a3.248 3.248 0 0 1 4.594 4.594l-9.258 9.258a.996.996 0 0 0 1.406 1.406l6.258-6.257a3.248 3.248 0 1 1 4.594 4.593z" })
  ] });
});
h.displayName = "Scribble";
export {
  h as Scribble
};
//# sourceMappingURL=Scribble.js.map
