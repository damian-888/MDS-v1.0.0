import { jsxs as m, jsx as i } from "react/jsx-runtime";
import { forwardRef as t, useId as n } from "react";
const s = t(({
  size: a = "1em",
  title: r,
  titleId: o,
  ...d
}, l) => {
  const e = n(), h = r ? o ?? e : void 0;
  return /* @__PURE__ */ m("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": h, ...d, children: [
    r ? /* @__PURE__ */ i("title", { id: h, children: r }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M22.875 5.625a3 3 0 0 0-3-3H12a.375.375 0 0 1-.375-.375 1.125 1.125 0 1 0-2.25 0A2.625 2.625 0 0 0 12 4.875h7.875a.75.75 0 0 1 0 1.5H9.085c-4.357 0-7.928 3.506-7.96 7.816A7.875 7.875 0 0 0 9 22.125h5.25a1.125 1.125 0 1 0 0-2.25h-2.625v-1.5h4.125a1.125 1.125 0 1 0 0-2.25H10.5a.75.75 0 1 1 0-1.5h3.75a7.134 7.134 0 0 0 7.086-6.382 3 3 0 0 0 1.54-2.618m-13.79 3h.29v3.97c-.46.187-.868.485-1.186.868l-4.125-1.875a5.74 5.74 0 0 1 5.02-2.963m-5.71 5.582q.002-.227.024-.45l4.112 1.87q.017.204.062.402L4.811 18a5.58 5.58 0 0 1-1.436-3.793M9 19.875a5.6 5.6 0 0 1-2.271-.477l2.124-1.517q.248.162.522.275v1.719zm5.25-7.5h-2.625v-3.75h7.369a4.88 4.88 0 0 1-4.744 3.75" })
  ] });
});
s.displayName = "Shrimp";
export {
  s as Shrimp
};
//# sourceMappingURL=Shrimp.js.map
