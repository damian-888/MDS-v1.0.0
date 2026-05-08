import { jsxs as t, jsx as i } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const m = n(({
  size: r = "1em",
  title: o,
  titleId: l,
  ...d
}, e) => {
  const h = s(), a = o ? l ?? h : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: e, "aria-labelledby": a, ...d, children: [
    o ? /* @__PURE__ */ i("title", { id: a, children: o }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M19.5 2.625H7.81a1.86 1.86 0 0 0-1.325.55l-3.31 3.31a1.86 1.86 0 0 0-.55 1.325V19.5A1.875 1.875 0 0 0 4.5 21.375h15a1.875 1.875 0 0 0 1.875-1.875v-15A1.875 1.875 0 0 0 19.5 2.625M8.625 4.875h6.75V6.75h-6.75zm10.5 14.25H4.875V7.969l1.5-1.5v.656A1.875 1.875 0 0 0 8.25 9h7.5a1.875 1.875 0 0 0 1.875-1.875v-2.25h1.5zm-7.125-9a3.937 3.937 0 1 0 0 7.874 3.937 3.937 0 0 0 0-7.874m0 5.625a1.688 1.688 0 1 1 0-3.375 1.688 1.688 0 0 1 0 3.375" })
  ] });
});
m.displayName = "FloppyDiskBack";
export {
  m as FloppyDiskBack
};
//# sourceMappingURL=FloppyDiskBack.js.map
