import { jsxs as h, jsx as d } from "react/jsx-runtime";
import { forwardRef as t, useId as s } from "react";
const m = t(({
  size: e = "1em",
  title: r,
  titleId: l,
  ...a
}, i) => {
  const n = s(), o = r ? l ?? n : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: i, "aria-labelledby": o, ...a, children: [
    r ? /* @__PURE__ */ d("title", { id: o, children: r }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M23.272 10.53a1.88 1.88 0 0 0-1.522-.78h-1.125v-1.5a1.875 1.875 0 0 0-1.875-1.875h-6.375L9.875 4.5a1.9 1.9 0 0 0-1.124-.375H3.75A1.875 1.875 0 0 0 1.875 6v13.5A1.125 1.125 0 0 0 3 20.625h16.79a1.125 1.125 0 0 0 1.063-.75l2.67-7.638.006-.016a1.88 1.88 0 0 0-.257-1.692M8.625 6.374l2.7 2.025c.195.146.432.225.675.225h6.375V9.75H6.541a1.875 1.875 0 0 0-1.776 1.273l-.64 1.835V6.375zm10.368 12H4.583L6.807 12h14.415z" })
  ] });
});
m.displayName = "FolderOpen";
export {
  m as FolderOpen
};
//# sourceMappingURL=FolderOpen.js.map
