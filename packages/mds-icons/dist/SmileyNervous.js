import { jsxs as m, jsx as i } from "react/jsx-runtime";
import { forwardRef as t, useId as n } from "react";
const c = t(({
  size: e = "1em",
  title: r,
  titleId: d,
  ...a
}, l) => {
  const s = n(), o = r ? d ?? s : void 0;
  return /* @__PURE__ */ m("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": o, ...a, children: [
    r ? /* @__PURE__ */ i("title", { id: o, children: r }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M12 1.875A10.125 10.125 0 1 0 22.125 12 10.137 10.137 0 0 0 12 1.875m0 18A7.875 7.875 0 1 1 19.875 12 7.883 7.883 0 0 1 12 19.875m-4.875-9.75a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0m6.75 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0m2.899 6.088a1.125 1.125 0 0 1-1.573.236 3.6 3.6 0 0 1-.726-.774 3 3 0 0 0-.225-.281q-.12.134-.225.281c-.338.45-.9 1.2-2.025 1.2s-1.687-.75-2.025-1.2a3 3 0 0 0-.225-.281q-.12.134-.225.281a3.6 3.6 0 0 1-.726.774 1.126 1.126 0 0 1-1.337-1.809q.146-.145.263-.315c.338-.45.9-1.2 2.025-1.2s1.688.75 2.025 1.2q.105.147.225.281.12-.134.225-.281c.338-.45.9-1.2 2.025-1.2s1.688.75 2.025 1.2q.117.17.263.315a1.125 1.125 0 0 1 .236 1.573" })
  ] });
});
c.displayName = "SmileyNervous";
export {
  c as SmileyNervous
};
//# sourceMappingURL=SmileyNervous.js.map
