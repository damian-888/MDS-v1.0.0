import { jsxs as m, jsx as i } from "react/jsx-runtime";
import { forwardRef as t, useId as n } from "react";
const v = t(({
  size: a = "1em",
  title: r,
  titleId: o,
  ...e
}, h) => {
  const l = n(), d = r ? o ?? l : void 0;
  return /* @__PURE__ */ m("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: h, "aria-labelledby": d, ...e, children: [
    r ? /* @__PURE__ */ i("title", { id: d, children: r }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "m20.296 7.454-5.25-5.25a1.12 1.12 0 0 0-.796-.329h-9A1.875 1.875 0 0 0 3.375 3.75v16.5a1.875 1.875 0 0 0 1.875 1.875h13.5a1.875 1.875 0 0 0 1.875-1.875v-12a1.13 1.13 0 0 0-.33-.796m-1.921 12.421H5.625V4.125h8.156l4.594 4.594zM8.25 10.5a1.125 1.125 0 0 0-1.125 1.125v5.625a1.125 1.125 0 0 0 1.125 1.125h7.5a1.125 1.125 0 0 0 1.125-1.125v-5.625A1.125 1.125 0 0 0 15.75 10.5zm1.125 2.25h1.5v3.375h-1.5zm5.25 3.375h-1.5V12.75h1.5z" })
  ] });
});
v.displayName = "SimCard";
export {
  v as SimCard
};
//# sourceMappingURL=SimCard.js.map
