import { jsxs as h, jsx as d } from "react/jsx-runtime";
import { forwardRef as l, useId as m } from "react";
const n = l(({
  size: i = "1em",
  title: r,
  titleId: a,
  ...e
}, v) => {
  const t = m(), o = r ? a ?? t : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: i, height: i, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: v, "aria-labelledby": o, ...e, children: [
    r ? /* @__PURE__ */ d("title", { id: o, children: r }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M18.75 1.875H5.25A1.875 1.875 0 0 0 3.375 3.75v16.5a1.875 1.875 0 0 0 1.875 1.875h13.5a1.875 1.875 0 0 0 1.875-1.875V3.75a1.875 1.875 0 0 0-1.875-1.875m-4.5 12h4.125v1.5h-7.5v-1.5zm1.125-2.25v-1.5h3v1.5zm3-7.5v3.75H14.25A1.125 1.125 0 0 0 13.125 9v2.625H9.75a1.125 1.125 0 0 0-1.125 1.125v2.625h-3V4.125zm-12.75 15.75v-2.25h12.75v2.25z" })
  ] });
});
n.displayName = "Stairs";
export {
  n as Stairs
};
//# sourceMappingURL=Stairs.js.map
