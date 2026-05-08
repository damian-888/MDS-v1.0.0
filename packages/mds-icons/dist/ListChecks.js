import { jsxs as s, jsx as e } from "react/jsx-runtime";
import { forwardRef as h, useId as n } from "react";
const m = h(({
  size: a = "1em",
  title: l,
  titleId: i,
  ...o
}, d) => {
  const t = n(), r = l ? i ?? t : void 0;
  return /* @__PURE__ */ s("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: d, "aria-labelledby": r, ...o, children: [
    l ? /* @__PURE__ */ e("title", { id: r, children: l }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M21.375 12a1.125 1.125 0 0 1-1.125 1.125H12a1.125 1.125 0 1 1 0-2.25h8.25A1.125 1.125 0 0 1 21.375 12M12 7.125h8.25a1.125 1.125 0 0 0 0-2.25H12a1.125 1.125 0 1 0 0 2.25m8.25 9.75H12a1.125 1.125 0 1 0 0 2.25h8.25a1.125 1.125 0 0 0 0-2.25M7.454 3.704 5.25 5.906l-.704-.705a1.127 1.127 0 0 0-1.594 1.594l1.5 1.5a1.125 1.125 0 0 0 1.594 0l3-3A1.127 1.127 0 0 0 7.452 3.7zm0 6L5.25 11.906l-.704-.705a1.127 1.127 0 1 0-1.594 1.594l1.5 1.5a1.125 1.125 0 0 0 1.594 0l3-3A1.127 1.127 0 1 0 7.452 9.7zm0 6L5.25 17.906l-.704-.705a1.126 1.126 0 0 0-1.838 1.228q.086.207.244.366l1.5 1.5a1.125 1.125 0 0 0 1.594 0l3-3A1.127 1.127 0 1 0 7.452 15.7z" })
  ] });
});
m.displayName = "ListChecks";
export {
  m as ListChecks
};
//# sourceMappingURL=ListChecks.js.map
