import { jsxs as m, jsx as o } from "react/jsx-runtime";
import { forwardRef as n, useId as h } from "react";
const s = n(({
  size: e = "1em",
  title: r,
  titleId: d,
  ...l
}, a) => {
  const t = h(), i = r ? d ?? t : void 0;
  return /* @__PURE__ */ m("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: a, "aria-labelledby": i, ...l, children: [
    r ? /* @__PURE__ */ o("title", { id: i, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "m23.438 11.376-4.28-6.416a1.88 1.88 0 0 0-1.56-.835H3.75A1.875 1.875 0 0 0 1.875 6v12a1.875 1.875 0 0 0 1.875 1.875h13.849a1.88 1.88 0 0 0 1.56-.835l4.279-6.416a1.13 1.13 0 0 0 0-1.248m-6.04 6.249H4.125V6.375h13.273L21.148 12z" })
  ] });
});
s.displayName = "TagSimple";
export {
  s as TagSimple
};
//# sourceMappingURL=TagSimple.js.map
