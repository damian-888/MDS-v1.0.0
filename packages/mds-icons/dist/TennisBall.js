import { jsxs as t, jsx as l } from "react/jsx-runtime";
import { forwardRef as s, useId as m } from "react";
const h = s(({
  size: e = "1em",
  title: r,
  titleId: o,
  ...d
}, a) => {
  const n = m(), i = r ? o ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: a, "aria-labelledby": i, ...d, children: [
    r ? /* @__PURE__ */ l("title", { id: i, children: r }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "M19.162 4.838a10.125 10.125 0 1 0 0 14.325 10.14 10.14 0 0 0 0-14.325M6.43 6.43a7.83 7.83 0 0 1 4.331-2.205 7.88 7.88 0 0 1-6.536 6.536A7.83 7.83 0 0 1 6.43 6.43zm-2.235 6.607a10.06 10.06 0 0 0 5.949-2.895 10.06 10.06 0 0 0 2.895-5.949 7.86 7.86 0 0 1 6.767 6.768 10.135 10.135 0 0 0-8.843 8.843 7.86 7.86 0 0 1-6.768-6.767M17.57 17.57a7.83 7.83 0 0 1-4.33 2.205 7.88 7.88 0 0 1 6.535-6.537 7.83 7.83 0 0 1-2.205 4.332" })
  ] });
});
h.displayName = "TennisBall";
export {
  h as TennisBall
};
//# sourceMappingURL=TennisBall.js.map
