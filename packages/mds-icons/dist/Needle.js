import { jsxs as n, jsx as l } from "react/jsx-runtime";
import { forwardRef as s, useId as c } from "react";
const m = s(({
  size: r = "1em",
  title: e,
  titleId: o,
  ...i
}, a) => {
  const t = c(), d = e ? o ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": e ? void 0 : !0, role: e ? "img" : void 0, ref: a, "aria-labelledby": d, ...i, children: [
    e ? /* @__PURE__ */ l("title", { id: d, children: e }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "M20.167 3.833a4.125 4.125 0 0 0-5.833 0l-2.25 2.25a1.1 1.1 0 0 0-.313.605C11.1 10.593 5.186 17.22 2.957 19.45a1.127 1.127 0 0 0 1.594 1.593c2.226-2.224 8.858-8.145 12.767-8.812.229-.04.44-.149.604-.313l2.25-2.25a4.125 4.125 0 0 0 0-5.833zm-1.594 4.242-2.008 2.01c-1.392.31-3.038 1.069-4.92 2.266 1.198-1.882 1.957-3.527 2.268-4.919l2.009-2.008a1.874 1.874 0 1 1 2.651 2.651" })
  ] });
});
m.displayName = "Needle";
export {
  m as Needle
};
//# sourceMappingURL=Needle.js.map
