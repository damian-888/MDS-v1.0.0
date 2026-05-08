import { jsxs as m, jsx as l } from "react/jsx-runtime";
import { forwardRef as t, useId as s } from "react";
const h = t(({
  size: e = "1em",
  title: r,
  titleId: o,
  ...d
}, a) => {
  const n = s(), i = r ? o ?? n : void 0;
  return /* @__PURE__ */ m("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: a, "aria-labelledby": i, ...d, children: [
    r ? /* @__PURE__ */ l("title", { id: i, children: r }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "M12 1.875A10.125 10.125 0 1 0 22.125 12 10.137 10.137 0 0 0 12 1.875m0 18A7.875 7.875 0 1 1 19.875 12 7.883 7.883 0 0 1 12 19.875m-1.875-9.75a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m6.75 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" })
  ] });
});
h.displayName = "SmileyBlank";
export {
  h as SmileyBlank
};
//# sourceMappingURL=SmileyBlank.js.map
