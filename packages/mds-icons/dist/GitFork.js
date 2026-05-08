import { jsxs as n, jsx as i } from "react/jsx-runtime";
import { forwardRef as h, useId as m } from "react";
const s = h(({
  size: o = "1em",
  title: r,
  titleId: d,
  ...e
}, t) => {
  const l = m(), a = r ? d ?? l : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: t, "aria-labelledby": a, ...e, children: [
    r ? /* @__PURE__ */ i("title", { id: a, children: r }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M21.375 6a3.376 3.376 0 1 0-4.5 3.182V10.5a.375.375 0 0 1-.375.375h-9a.375.375 0 0 1-.375-.375V9.182a3.375 3.375 0 1 0-2.25 0V10.5A2.625 2.625 0 0 0 7.5 13.125h3.375v1.693a3.375 3.375 0 1 0 2.25 0v-1.693H16.5a2.625 2.625 0 0 0 2.625-2.625V9.182A3.38 3.38 0 0 0 21.375 6M6 4.875a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25m6 14.25a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25m6-12a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25" })
  ] });
});
s.displayName = "GitFork";
export {
  s as GitFork
};
//# sourceMappingURL=GitFork.js.map
