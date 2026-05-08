import { jsxs as n, jsx as o } from "react/jsx-runtime";
import { forwardRef as s, useId as h } from "react";
const m = s(({
  size: r = "1em",
  title: e,
  titleId: i,
  ...t
}, a) => {
  const l = h(), d = e ? i ?? l : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": e ? void 0 : !0, role: e ? "img" : void 0, ref: a, "aria-labelledby": d, ...t, children: [
    e ? /* @__PURE__ */ o("title", { id: d, children: e }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M19.875 9.75a7.875 7.875 0 1 0-9 7.794v4.207a1.125 1.125 0 1 0 2.25 0v-4.207a7.886 7.886 0 0 0 6.75-7.793M12 15.377a5.625 5.625 0 1 1 5.625-5.625A5.63 5.63 0 0 1 12 15.376" })
  ] });
});
m.displayName = "GenderNeuter";
export {
  m as GenderNeuter
};
//# sourceMappingURL=GenderNeuter.js.map
