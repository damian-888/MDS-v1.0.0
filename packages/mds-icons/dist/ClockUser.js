import { jsxs as t, jsx as a } from "react/jsx-runtime";
import { forwardRef as n, useId as m } from "react";
const c = n(({
  size: o = "1em",
  title: r,
  titleId: d,
  ...l
}, i) => {
  const s = m(), e = r ? d ?? s : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: i, "aria-labelledby": e, ...l, children: [
    r ? /* @__PURE__ */ a("title", { id: e, children: r }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "m17.003 10.755-4.5 2.25A1.125 1.125 0 0 1 10.875 12V6.75a1.125 1.125 0 1 1 2.25 0v3.43l2.872-1.436a1.124 1.124 0 1 1 1.006 2.012m4.286 11.33a1.125 1.125 0 0 1-1.376-.797c-.226-.832-1.008-1.414-1.913-1.414s-1.687.582-1.913 1.414a1.125 1.125 0 1 1-2.175-.578 4.1 4.1 0 0 1 1.413-2.157 3.375 3.375 0 1 1 5.344 0 4.1 4.1 0 0 1 1.414 2.157 1.125 1.125 0 0 1-.794 1.376M16.875 16.5a1.125 1.125 0 1 0 2.25 0 1.125 1.125 0 0 0-2.25 0m-5.861 3.314a7.875 7.875 0 1 1 8.8-8.8 1.123 1.123 0 0 0 2.01.557 1.13 1.13 0 0 0 .222-.838 10.124 10.124 0 1 0-11.31 11.314q.07.009.14.009a1.125 1.125 0 0 0 .138-2.242" })
  ] });
});
c.displayName = "ClockUser";
export {
  c as ClockUser
};
//# sourceMappingURL=ClockUser.js.map
