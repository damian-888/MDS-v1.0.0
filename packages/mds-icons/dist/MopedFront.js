import { jsxs as n, jsx as d } from "react/jsx-runtime";
import { forwardRef as h, useId as m } from "react";
const v = h(({
  size: o = "1em",
  title: a,
  titleId: e,
  ...i
}, t) => {
  const l = m(), r = a ? e ?? l : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: t, "aria-labelledby": r, ...i, children: [
    a ? /* @__PURE__ */ d("title", { id: r, children: a }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M19.5 3.375h-3.533a4.125 4.125 0 0 0-7.934 0H4.5a1.125 1.125 0 1 0 0 2.25h3.533c.163.578.45 1.113.843 1.568a6.38 6.38 0 0 0-3.251 5.557v6A1.875 1.875 0 0 0 7.5 20.625H9a3 3 0 1 0 6 0h1.5a1.875 1.875 0 0 0 1.875-1.875v-6a6.38 6.38 0 0 0-3.255-5.557c.392-.455.68-.99.844-1.568H19.5a1.125 1.125 0 1 0 0-2.25m-6.75 17.25a.75.75 0 1 1-1.5 0v-5.25a.75.75 0 0 1 1.5 0zm3.375-2.25H15v-3a3 3 0 0 0-6 0v3H7.875V12.75a4.125 4.125 0 0 1 8.25 0zm-6-13.875a1.875 1.875 0 1 1 3.75 0 1.875 1.875 0 0 1-3.75 0" })
  ] });
});
v.displayName = "MopedFront";
export {
  v as MopedFront
};
//# sourceMappingURL=MopedFront.js.map
