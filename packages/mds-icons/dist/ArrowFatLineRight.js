import { jsxs as n, jsx as a } from "react/jsx-runtime";
import { forwardRef as h, useId as v } from "react";
const m = h(({
  size: i = "1em",
  title: r,
  titleId: e,
  ...d
}, t) => {
  const l = v(), o = r ? e ?? l : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: i, height: i, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: t, "aria-labelledby": o, ...d, children: [
    r ? /* @__PURE__ */ a("title", { id: o, children: r }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "m22.546 11.205-9-9a1.125 1.125 0 0 0-1.921.796v3.375H7.5A1.125 1.125 0 0 0 6.375 7.5v9A1.125 1.125 0 0 0 7.5 17.626h4.125V21a1.125 1.125 0 0 0 1.92.796l9-9a1.125 1.125 0 0 0 0-1.592m-8.671 7.077v-1.781a1.125 1.125 0 0 0-1.125-1.125H8.625v-6.75h4.125A1.125 1.125 0 0 0 13.875 7.5V5.72L20.156 12zm-9-10.781v9a1.125 1.125 0 0 1-2.25 0v-9a1.125 1.125 0 0 1 2.25 0" })
  ] });
});
m.displayName = "ArrowFatLineRight";
export {
  m as ArrowFatLineRight
};
//# sourceMappingURL=ArrowFatLineRight.js.map
