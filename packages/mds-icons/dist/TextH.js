import { jsxs as n, jsx as d } from "react/jsx-runtime";
import { forwardRef as s, useId as v } from "react";
const h = s(({
  size: e = "1em",
  title: r,
  titleId: i,
  ...t
}, a) => {
  const l = v(), o = r ? i ?? l : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: a, "aria-labelledby": o, ...t, children: [
    r ? /* @__PURE__ */ d("title", { id: o, children: r }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M19.875 5.25v13.5a1.125 1.125 0 1 1-2.25 0v-5.625H6.375v5.625a1.125 1.125 0 0 1-2.25 0V5.25a1.125 1.125 0 0 1 2.25 0v5.625h11.25V5.25a1.125 1.125 0 1 1 2.25 0" })
  ] });
});
h.displayName = "TextH";
export {
  h as TextH
};
//# sourceMappingURL=TextH.js.map
