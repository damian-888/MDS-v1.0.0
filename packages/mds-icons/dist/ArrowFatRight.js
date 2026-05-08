import { jsxs as h, jsx as d } from "react/jsx-runtime";
import { forwardRef as n, useId as m } from "react";
const s = n(({
  size: o = "1em",
  title: r,
  titleId: t,
  ...a
}, e) => {
  const l = m(), i = r ? t ?? l : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: e, "aria-labelledby": i, ...a, children: [
    r ? /* @__PURE__ */ d("title", { id: i, children: r }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "m22.546 11.205-9-9a1.125 1.125 0 0 0-1.921.796v3.375H4.5A1.875 1.875 0 0 0 2.625 8.25v7.5A1.875 1.875 0 0 0 4.5 17.626h7.125V21a1.125 1.125 0 0 0 1.92.796l9-9a1.125 1.125 0 0 0 0-1.592m-8.671 7.077v-1.781a1.125 1.125 0 0 0-1.125-1.125H4.875v-6.75h7.875A1.125 1.125 0 0 0 13.875 7.5V5.72L20.156 12z" })
  ] });
});
s.displayName = "ArrowFatRight";
export {
  s as ArrowFatRight
};
//# sourceMappingURL=ArrowFatRight.js.map
