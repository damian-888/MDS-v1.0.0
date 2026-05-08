import { jsxs as h, jsx as o } from "react/jsx-runtime";
import { forwardRef as n, useId as v } from "react";
const m = n(({
  size: a = "1em",
  title: r,
  titleId: e,
  ...d
}, t) => {
  const l = v(), i = r ? e ?? l : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: t, "aria-labelledby": i, ...d, children: [
    r ? /* @__PURE__ */ o("title", { id: i, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "m22.546 11.205-9-9a1.125 1.125 0 0 0-1.921.796v3.375h-.375A1.125 1.125 0 0 0 10.125 7.5v9a1.125 1.125 0 0 0 1.125 1.125h.375V21a1.125 1.125 0 0 0 1.92.796l9-9a1.125 1.125 0 0 0 0-1.592m-8.671 7.077v-1.781a1.125 1.125 0 0 0-1.125-1.125h-.375v-6.75h.375A1.125 1.125 0 0 0 13.875 7.5V5.72L20.156 12zm-9-10.781v9a1.125 1.125 0 0 1-2.25 0v-9a1.125 1.125 0 0 1 2.25 0m3.75 0v9a1.125 1.125 0 0 1-2.25 0v-9a1.125 1.125 0 0 1 2.25 0" })
  ] });
});
m.displayName = "ArrowFatLinesRight";
export {
  m as ArrowFatLinesRight
};
//# sourceMappingURL=ArrowFatLinesRight.js.map
