import { jsxs as t, jsx as a } from "react/jsx-runtime";
import { forwardRef as h, useId as m } from "react";
const s = h(({
  size: l = "1em",
  title: r,
  titleId: e,
  ...d
}, i) => {
  const n = m(), o = r ? e ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: i, "aria-labelledby": o, ...d, children: [
    r ? /* @__PURE__ */ a("title", { id: o, children: r }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "M3.943 10.307a4.5 4.5 0 1 1 6.364-6.363A1.125 1.125 0 0 1 8.72 5.532a2.254 2.254 0 0 0-3.187 3.187 1.127 1.127 0 0 1-1.594 1.594zm11.339-4.775a2.254 2.254 0 0 1 3.187 3.187 1.127 1.127 0 0 0 1.594 1.594 4.5 4.5 0 1 0-6.364-6.364 1.127 1.127 0 0 0 1.594 1.594zm3.181 8.156a1.124 1.124 0 0 0 0 1.594 2.252 2.252 0 1 1-3.182 3.187 1.127 1.127 0 1 0-1.593 1.594 4.5 4.5 0 1 0 6.364-6.364 1.124 1.124 0 0 0-1.583-.005zM8.72 18.469a2.254 2.254 0 0 1-3.187-3.187 1.127 1.127 0 0 0-1.594-1.594 4.5 4.5 0 1 0 6.364 6.364 1.126 1.126 0 1 0-1.594-1.594zm6.656-8.25v3.563l2.296 2.295a1.127 1.127 0 1 1-1.593 1.593l-2.296-2.295h-3.563l-2.298 2.297a1.127 1.127 0 0 1-1.594-1.594l2.298-2.296v-3.563L6.33 7.921a1.127 1.127 0 0 1 1.594-1.593l2.296 2.298h3.563l2.294-2.296a1.127 1.127 0 0 1 1.594 1.593zm-4.5 2.907h2.25v-2.25h-2.25z" })
  ] });
});
s.displayName = "Drone";
export {
  s as Drone
};
//# sourceMappingURL=Drone.js.map
