import { jsxs as s, jsx as e } from "react/jsx-runtime";
import { forwardRef as t, useId as m } from "react";
const h = t(({
  size: o = "1em",
  title: r,
  titleId: l,
  ...i
}, d) => {
  const n = m(), a = r ? l ?? n : void 0;
  return /* @__PURE__ */ s("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: d, "aria-labelledby": a, ...i, children: [
    r ? /* @__PURE__ */ e("title", { id: a, children: r }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M12 8.625a3.375 3.375 0 1 0 0-6.75 3.375 3.375 0 0 0 0 6.75m0-4.5a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25M4.125 9a1.875 1.875 0 1 1 3.75 0 1.875 1.875 0 0 1-3.75 0m17.25 1.65a1.125 1.125 0 0 1-1.83.881s-1.968-1.451-5 .026a20 20 0 0 1-.2 1.688l2.875 2.395a1.12 1.12 0 0 1 .347 1.22l-1.5 4.5a1.126 1.126 0 1 1-2.134-.712l1.255-3.773-1.448-1.206q-.231.683-.536 1.334C11.83 19.91 9.516 21.872 6.32 22.83q-.157.046-.321.045a1.125 1.125 0 0 1-.323-2.203c3.547-1.064 5.697-3.63 6.413-7.635-2.25 1.27-4.042 1.594-5.293 1.594a6.2 6.2 0 0 1-2.016-.352 1.125 1.125 0 0 1 .912-2.056c.04.016 2.383.894 6.421-1.852 5.13-3.486 8.837-.598 8.837-.598a1.13 1.13 0 0 1 .424.877" })
  ] });
});
h.displayName = "PersonSimpleThrow";
export {
  h as PersonSimpleThrow
};
//# sourceMappingURL=PersonSimpleThrow.js.map
