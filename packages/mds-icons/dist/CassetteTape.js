import { jsxs as h, jsx as o } from "react/jsx-runtime";
import { forwardRef as s, useId as n } from "react";
const m = s(({
  size: e = "1em",
  title: a,
  titleId: d,
  ...t
}, i) => {
  const l = n(), r = a ? d ?? l : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: i, "aria-labelledby": r, ...t, children: [
    a ? /* @__PURE__ */ o("title", { id: r, children: a }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M21 4.125H3A1.875 1.875 0 0 0 1.125 6v12A1.875 1.875 0 0 0 3 19.875h18A1.875 1.875 0 0 0 22.875 18V6A1.875 1.875 0 0 0 21 4.125m-.375 13.5h-3.469l-1.181-1.575a.75.75 0 0 0-.6-.3h-6.75a.75.75 0 0 0-.6.3l-1.181 1.575H3.375V6.375h17.25zM7.688 14.25h8.625a3.187 3.187 0 1 0 0-6.375H7.688a3.187 3.187 0 1 0 0 6.375m0-4.125a.938.938 0 1 1 0 1.875.938.938 0 0 1 0-1.875m9.562.938a.937.937 0 1 1-1.875 0 .937.937 0 0 1 1.875 0M13.266 12h-2.532a3.2 3.2 0 0 0 0-1.875h2.532a3.2 3.2 0 0 0 0 1.875" })
  ] });
});
m.displayName = "CassetteTape";
export {
  m as CassetteTape
};
//# sourceMappingURL=CassetteTape.js.map
