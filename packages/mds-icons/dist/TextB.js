import { jsxs as n, jsx as d } from "react/jsx-runtime";
import { forwardRef as h, useId as s } from "react";
const m = h(({
  size: e = "1em",
  title: r,
  titleId: i,
  ...t
}, a) => {
  const l = s(), o = r ? i ?? l : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: a, "aria-labelledby": o, ...t, children: [
    r ? /* @__PURE__ */ d("title", { id: o, children: r }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M17.351 10.73a4.5 4.5 0 0 0-3.476-7.355H7.5A1.125 1.125 0 0 0 6.375 4.5v14.25A1.125 1.125 0 0 0 7.5 19.875H15a4.875 4.875 0 0 0 2.351-9.144M8.625 5.626h5.25a2.25 2.25 0 0 1 0 4.5h-5.25zm6.375 12H8.625v-5.25H15a2.625 2.625 0 0 1 0 5.25" })
  ] });
});
m.displayName = "TextB";
export {
  m as TextB
};
//# sourceMappingURL=TextB.js.map
