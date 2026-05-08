import { jsxs as s, jsx as l } from "react/jsx-runtime";
import { forwardRef as t, useId as h } from "react";
const m = t(({
  size: a = "1em",
  title: i,
  titleId: e,
  ...o
}, d) => {
  const n = h(), r = i ? e ?? n : void 0;
  return /* @__PURE__ */ s("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": i ? void 0 : !0, role: i ? "img" : void 0, ref: d, "aria-labelledby": r, ...o, children: [
    i ? /* @__PURE__ */ l("title", { id: r, children: i }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "m20.296 7.455-5.25-5.25a1.12 1.12 0 0 0-.796-.33h-9A1.875 1.875 0 0 0 3.375 3.75v16.5a1.875 1.875 0 0 0 1.875 1.875h13.5a1.875 1.875 0 0 0 1.875-1.875v-12c0-.298-.118-.584-.33-.795m-3.14.045H15V5.344zM5.625 19.875V4.125h7.125v4.5a1.125 1.125 0 0 0 1.125 1.125h4.5v10.125zm9.045-4.546a3.375 3.375 0 1 0-1.594 1.594l1.125 1.125a1.126 1.126 0 1 0 1.594-1.594zm-4.17-1.454a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0" })
  ] });
});
m.displayName = "FileMagnifyingGlass";
export {
  m as FileMagnifyingGlass
};
//# sourceMappingURL=FileMagnifyingGlass.js.map
