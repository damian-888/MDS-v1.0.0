import { jsxs as h, jsx as d } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const v = n(({
  size: e = "1em",
  title: r,
  titleId: i,
  ...a
}, t) => {
  const l = s(), o = r ? i ?? l : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: t, "aria-labelledby": o, ...a, children: [
    r ? /* @__PURE__ */ d("title", { id: o, children: r }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M19.875 5.25v3a1.125 1.125 0 1 1-2.25 0V6.375h-4.5v11.25H15a1.125 1.125 0 1 1 0 2.25H9a1.125 1.125 0 1 1 0-2.25h1.875V6.375h-4.5V8.25a1.125 1.125 0 0 1-2.25 0v-3A1.125 1.125 0 0 1 5.25 4.125h13.5a1.125 1.125 0 0 1 1.125 1.125" })
  ] });
});
v.displayName = "TextT";
export {
  v as TextT
};
//# sourceMappingURL=TextT.js.map
