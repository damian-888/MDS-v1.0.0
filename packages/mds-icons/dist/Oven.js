import { jsxs as n, jsx as d } from "react/jsx-runtime";
import { forwardRef as t, useId as m } from "react";
const v = t(({
  size: e = "1em",
  title: r,
  titleId: i,
  ...a
}, h) => {
  const l = m(), o = r ? i ?? l : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: h, "aria-labelledby": o, ...a, children: [
    r ? /* @__PURE__ */ d("title", { id: o, children: r }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M19.5 2.625h-15A1.875 1.875 0 0 0 2.625 4.5v15A1.875 1.875 0 0 0 4.5 21.375h15a1.875 1.875 0 0 0 1.875-1.875v-15A1.875 1.875 0 0 0 19.5 2.625m-.375 16.5H4.875V4.875h14.25zM6.375 7.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0m4.125 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0m4.125 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0M7.125 18h9.75A1.125 1.125 0 0 0 18 16.875V11.25a1.125 1.125 0 0 0-1.125-1.125h-9.75A1.125 1.125 0 0 0 6 11.25v5.625A1.125 1.125 0 0 0 7.125 18m1.125-5.625h7.5v3.375h-7.5z" })
  ] });
});
v.displayName = "Oven";
export {
  v as Oven
};
//# sourceMappingURL=Oven.js.map
