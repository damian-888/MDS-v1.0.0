import { jsxs as n, jsx as d } from "react/jsx-runtime";
import { forwardRef as m, useId as s } from "react";
const v = m(({
  size: a = "1em",
  title: r,
  titleId: i,
  ...e
}, l) => {
  const t = s(), o = r ? i ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": o, ...e, children: [
    r ? /* @__PURE__ */ d("title", { id: o, children: r }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "m18.502 4.84 1.044-1.043a1.125 1.125 0 0 0-.797-1.924 1.13 1.13 0 0 0-.797.33l-1.139 1.144a8.61 8.61 0 0 0-9.626 0L6.046 2.205a1.127 1.127 0 1 0-1.594 1.594L5.498 4.84a8.6 8.6 0 0 0-2.123 5.66v3.75a8.625 8.625 0 0 0 17.25 0V10.5a8.6 8.6 0 0 0-2.123-5.66m-.127 5.66v.376H5.625V10.5a6.375 6.375 0 0 1 12.75 0M12 20.627a6.38 6.38 0 0 1-6.375-6.375v-1.125h12.75v1.125A6.38 6.38 0 0 1 12 20.626M13.125 8.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0m-5.25 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0" })
  ] });
});
v.displayName = "BugDroid";
export {
  v as BugDroid
};
//# sourceMappingURL=BugDroid.js.map
