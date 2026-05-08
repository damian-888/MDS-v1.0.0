import { jsxs as h, jsx as d } from "react/jsx-runtime";
import { forwardRef as m, useId as n } from "react";
const s = m(({
  size: r = "1em",
  title: o,
  titleId: a,
  ...i
}, l) => {
  const t = n(), e = o ? a ?? t : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: l, "aria-labelledby": e, ...i, children: [
    o ? /* @__PURE__ */ d("title", { id: e, children: o }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M7.875 10.125A1.125 1.125 0 0 1 9 9h6a1.125 1.125 0 0 1 0 2.25H9a1.125 1.125 0 0 1-1.125-1.125m3 2.625H9A1.125 1.125 0 1 0 9 15h1.875a1.125 1.125 0 1 0 0-2.25m10.5-8.25v10.19a1.86 1.86 0 0 1-.55 1.325l-4.81 4.81a1.86 1.86 0 0 1-1.325.55H4.5A1.875 1.875 0 0 1 2.625 19.5v-15A1.875 1.875 0 0 1 4.5 2.625h15A1.875 1.875 0 0 1 21.375 4.5m-16.5 14.625H13.5v-4.5a1.125 1.125 0 0 1 1.125-1.125h4.5V4.875H4.875zm13.031-3.375H15.75v2.156z" })
  ] });
});
s.displayName = "Note";
export {
  s as Note
};
//# sourceMappingURL=Note.js.map
