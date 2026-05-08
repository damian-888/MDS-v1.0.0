import { jsxs as n, jsx as a } from "react/jsx-runtime";
import { forwardRef as s, useId as h } from "react";
const m = s(({
  size: l = "1em",
  title: r,
  titleId: d,
  ...e
}, i) => {
  const t = h(), o = r ? d ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: i, "aria-labelledby": o, ...e, children: [
    r ? /* @__PURE__ */ a("title", { id: o, children: r }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "m23.077 12.486-9.312-9.312a1.86 1.86 0 0 0-1.325-.549H3.75A1.125 1.125 0 0 0 2.625 3.75v8.69a1.86 1.86 0 0 0 .55 1.325l9.31 9.312a1.875 1.875 0 0 0 2.652 0l7.94-7.94a1.875 1.875 0 0 0 0-2.651M13.81 21.22l-8.936-8.939V4.875h7.406l8.937 8.936zM9.75 8.25a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" })
  ] });
});
m.displayName = "Tag";
export {
  m as Tag
};
//# sourceMappingURL=Tag.js.map
