import { jsxs as t, jsx as o } from "react/jsx-runtime";
import { forwardRef as h, useId as n } from "react";
const s = h(({
  size: r = "1em",
  title: e,
  titleId: d,
  ...l
}, a) => {
  const m = n(), i = e ? d ?? m : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": e ? void 0 : !0, role: e ? "img" : void 0, ref: a, "aria-labelledby": i, ...l, children: [
    e ? /* @__PURE__ */ o("title", { id: i, children: e }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M12 1.875A10.125 10.125 0 1 0 22.125 12 10.137 10.137 0 0 0 12 1.875m0 18A7.875 7.875 0 1 1 19.875 12 7.883 7.883 0 0 1 12 19.875M16.875 15a1.125 1.125 0 0 1-1.125 1.125h-7.5a1.125 1.125 0 1 1 0-2.25h7.5A1.125 1.125 0 0 1 16.875 15m-9.75-4.875a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0m9.75 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" })
  ] });
});
s.displayName = "SmileyMeh";
export {
  s as SmileyMeh
};
//# sourceMappingURL=SmileyMeh.js.map
