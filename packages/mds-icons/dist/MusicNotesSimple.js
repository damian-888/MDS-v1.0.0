import { jsxs as s, jsx as r } from "react/jsx-runtime";
import { forwardRef as n, useId as m } from "react";
const c = n(({
  size: i = "1em",
  title: e,
  titleId: l,
  ...a
}, d) => {
  const t = m(), o = e ? l ?? t : void 0;
  return /* @__PURE__ */ s("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: i, height: i, "aria-hidden": e ? void 0 : !0, role: e ? "img" : void 0, ref: d, "aria-labelledby": o, ...a, children: [
    e ? /* @__PURE__ */ r("title", { id: o, children: e }) : null,
    /* @__PURE__ */ r("path", { fill: "currentColor", d: "M20.192 1.363a1.13 1.13 0 0 0-.965-.204l-12 3a1.125 1.125 0 0 0-.852 1.09v9.69a3.75 3.75 0 1 0 2.25 3.436V6.128l9.75-2.437v8.25a3.75 3.75 0 1 0 2.25 3.434V2.25a1.13 1.13 0 0 0-.433-.887M4.875 19.875a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m12-3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" })
  ] });
});
c.displayName = "MusicNotesSimple";
export {
  c as MusicNotesSimple
};
//# sourceMappingURL=MusicNotesSimple.js.map
