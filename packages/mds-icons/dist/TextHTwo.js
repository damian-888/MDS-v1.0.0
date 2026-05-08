import { jsxs as h, jsx as e } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const v = n(({
  size: r = "1em",
  title: o,
  titleId: d,
  ...i
}, l) => {
  const t = s(), a = o ? d ?? t : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: l, "aria-labelledby": a, ...i, children: [
    o ? /* @__PURE__ */ e("title", { id: a, children: o }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M14.625 5.25V16.5a1.125 1.125 0 1 1-2.25 0V12h-7.5v4.5a1.125 1.125 0 0 1-2.25 0V5.25a1.125 1.125 0 0 1 2.25 0v4.5h7.5v-4.5a1.125 1.125 0 1 1 2.25 0M22.5 18.375h-2.25l2.694-3.593a3.374 3.374 0 1 0-5.877-3.157 1.125 1.125 0 1 0 2.122.75q.057-.163.162-.302a1.125 1.125 0 1 1 1.795 1.356L17.1 18.825a1.125 1.125 0 0 0 .9 1.8h4.5a1.125 1.125 0 1 0 0-2.25" })
  ] });
});
v.displayName = "TextHTwo";
export {
  v as TextHTwo
};
//# sourceMappingURL=TextHTwo.js.map
