import { jsxs as n, jsx as l } from "react/jsx-runtime";
import { forwardRef as s, useId as h } from "react";
const c = s(({
  size: e = "1em",
  title: r,
  titleId: o,
  ...d
}, a) => {
  const t = h(), i = r ? o ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: a, "aria-labelledby": i, ...d, children: [
    r ? /* @__PURE__ */ l("title", { id: i, children: r }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "M12 1.875A10.125 10.125 0 1 0 22.125 12 10.137 10.137 0 0 0 12 1.875m0 18A7.875 7.875 0 1 1 19.875 12 7.883 7.883 0 0 1 12 19.875M16.875 12a1.125 1.125 0 0 1-1.125 1.125h-2.625v2.625a1.125 1.125 0 1 1-2.25 0v-2.625H8.25a1.125 1.125 0 1 1 0-2.25h2.625V8.25a1.125 1.125 0 1 1 2.25 0v2.625h2.625A1.125 1.125 0 0 1 16.875 12" })
  ] });
});
c.displayName = "PlusCircle";
export {
  c as PlusCircle
};
//# sourceMappingURL=PlusCircle.js.map
