import { jsxs as v, jsx as i } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const h = n(({
  size: d = "1em",
  title: r,
  titleId: o,
  ...a
}, l) => {
  const t = s(), e = r ? o ?? t : void 0;
  return /* @__PURE__ */ v("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: d, height: d, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": e, ...a, children: [
    r ? /* @__PURE__ */ i("title", { id: e, children: r }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M19.5 3.375h-15A1.875 1.875 0 0 0 2.625 5.25v13.5A1.875 1.875 0 0 0 4.5 20.625h15a1.875 1.875 0 0 0 1.875-1.875V5.25A1.875 1.875 0 0 0 19.5 3.375m-.375 2.25v5.25H4.875v-5.25zm-14.25 12.75v-5.25h14.25v5.25zM15 8.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0m3 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" })
  ] });
});
h.displayName = "HardDrives";
export {
  h as HardDrives
};
//# sourceMappingURL=HardDrives.js.map
