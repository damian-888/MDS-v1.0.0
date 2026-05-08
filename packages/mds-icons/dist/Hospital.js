import { jsxs as v, jsx as h } from "react/jsx-runtime";
import { forwardRef as t, useId as n } from "react";
const s = t(({
  size: o = "1em",
  title: a,
  titleId: i,
  ...d
}, e) => {
  const l = n(), r = a ? i ?? l : void 0;
  return /* @__PURE__ */ v("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: e, "aria-labelledby": r, ...d, children: [
    a ? /* @__PURE__ */ h("title", { id: r, children: a }) : null,
    /* @__PURE__ */ h("path", { fill: "currentColor", d: "M22.875 19.125H22.5V12a1.875 1.875 0 0 0-1.875-1.875h-4.5V4.5a1.875 1.875 0 0 0-1.875-1.875h-9A1.875 1.875 0 0 0 3.375 4.5v14.625H3a1.125 1.125 0 1 0 0 2.25h19.875a1.125 1.125 0 1 0 0-2.25m-2.625-6.75v6.75h-4.125v-6.75zm-14.625-7.5h8.25v14.25H12.75V15a1.125 1.125 0 0 0-1.125-1.125h-3.75A1.125 1.125 0 0 0 6.75 15v4.125H5.625zm4.875 14.25H9v-3h1.5zM6.75 9a1.125 1.125 0 0 1 1.125-1.125h.75v-.75a1.125 1.125 0 0 1 2.25 0v.75h.75a1.125 1.125 0 0 1 0 2.25h-.75v.75a1.125 1.125 0 1 1-2.25 0v-.75h-.75A1.125 1.125 0 0 1 6.75 9" })
  ] });
});
s.displayName = "Hospital";
export {
  s as Hospital
};
//# sourceMappingURL=Hospital.js.map
