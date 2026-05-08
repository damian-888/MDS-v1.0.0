import { jsxs as n, jsx as d } from "react/jsx-runtime";
import { forwardRef as c, useId as s } from "react";
const h = c(({
  size: o = "1em",
  title: r,
  titleId: e,
  ...i
}, l) => {
  const t = s(), a = r ? e ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": a, ...i, children: [
    r ? /* @__PURE__ */ d("title", { id: a, children: r }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M3.763 4.395a1.13 1.13 0 0 0-.388.855V21a1.125 1.125 0 1 0 2.25 0v-3.964c2.141-1.605 3.947-.855 6.626.468 1.522.75 3.257 1.613 5.138 1.613 1.38 0 2.839-.463 4.348-1.77a1.13 1.13 0 0 0 .388-.848V5.25a1.125 1.125 0 0 0-1.862-.85c-2.316 2.007-4.175 1.248-7.014-.157-2.637-1.31-5.92-2.936-9.486.153M19.875 15.96c-2.141 1.606-3.947.854-6.626-.468-2.171-1.078-4.78-2.369-7.624-1.068V5.783c2.141-1.605 3.947-.855 6.626.469 1.522.75 3.257 1.612 5.138 1.612a5.9 5.9 0 0 0 2.486-.544z" })
  ] });
});
h.displayName = "Flag";
export {
  h as Flag
};
//# sourceMappingURL=Flag.js.map
