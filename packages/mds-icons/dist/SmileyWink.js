import { jsxs as n, jsx as o } from "react/jsx-runtime";
import { forwardRef as t, useId as s } from "react";
const h = t(({
  size: r = "1em",
  title: i,
  titleId: d,
  ...l
}, a) => {
  const m = s(), e = i ? d ?? m : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": i ? void 0 : !0, role: i ? "img" : void 0, ref: a, "aria-labelledby": e, ...l, children: [
    i ? /* @__PURE__ */ o("title", { id: e, children: i }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M12 1.875A10.125 10.125 0 1 0 22.125 12 10.137 10.137 0 0 0 12 1.875m0 18A7.875 7.875 0 1 1 19.875 12 7.883 7.883 0 0 1 12 19.875m-4.875-9.75a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0m10.5 0A1.125 1.125 0 0 1 16.5 11.25h-2.25a1.125 1.125 0 1 1 0-2.25h2.25a1.125 1.125 0 0 1 1.125 1.125m-.9 4.688c-1.032 1.786-2.756 2.812-4.725 2.812S8.31 16.6 7.276 14.813a1.125 1.125 0 0 1 1.948-1.126c.365.631 1.21 1.688 2.776 1.688s2.411-1.057 2.776-1.687a1.126 1.126 0 1 1 1.948 1.124" })
  ] });
});
h.displayName = "SmileyWink";
export {
  h as SmileyWink
};
//# sourceMappingURL=SmileyWink.js.map
