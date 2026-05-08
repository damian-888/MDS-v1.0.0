import { jsxs as h, jsx as l } from "react/jsx-runtime";
import { forwardRef as t, useId as n } from "react";
const m = t(({
  size: a = "1em",
  title: r,
  titleId: o,
  ...d
}, i) => {
  const c = n(), e = r ? o ?? c : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: i, "aria-labelledby": e, ...d, children: [
    r ? /* @__PURE__ */ l("title", { id: e, children: r }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "M8.703 4.688A5.605 5.605 0 0 1 14.25 0a1.125 1.125 0 1 1 0 2.25 3.36 3.36 0 0 0-3.328 2.813 1.125 1.125 0 0 1-2.22-.375m5.172-.938a1.125 1.125 0 1 0 0 2.25h.375a4.88 4.88 0 0 0 4.875-4.875 1.125 1.125 0 1 0-2.25 0A2.625 2.625 0 0 1 14.25 3.75zm9.75 16.5a1.125 1.125 0 0 1-1.125 1.125h-21a1.125 1.125 0 1 1 0-2.25h1.514c1.17-2.487 2.456-6.038 2.599-9.826A1.865 1.865 0 0 1 7.486 7.5h8.282a1.875 1.875 0 0 1 1.875 1.789c.187 4.136 2.105 8.107 3.054 9.836H22.5a1.125 1.125 0 0 1 1.125 1.125m-8.212-10.5h-1.5c.22 3.618 1.452 6.987 2.575 9.375h1.667c-1.1-2.201-2.499-5.657-2.743-9.375m-9.93 9.375h8.53c-1.092-2.52-2.166-5.826-2.36-9.375H7.843c-.195 3.549-1.268 6.855-2.362 9.375" })
  ] });
});
m.displayName = "NuclearPlant";
export {
  m as NuclearPlant
};
//# sourceMappingURL=NuclearPlant.js.map
