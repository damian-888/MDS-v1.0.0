import { jsxs as n, jsx as i } from "react/jsx-runtime";
import { forwardRef as s, useId as c } from "react";
const m = s(({
  size: r = "1em",
  title: o,
  titleId: d,
  ...l
}, a) => {
  const t = c(), e = o ? d ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: a, "aria-labelledby": e, ...l, children: [
    o ? /* @__PURE__ */ i("title", { id: e, children: o }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "m19.823 4.923-7.5-2.25a1.125 1.125 0 0 0-1.448 1.077v9.395a4.875 4.875 0 1 0 2.25 4.105V9.762l6.052 1.815a1.126 1.126 0 0 0 1.448-1.077V6a1.125 1.125 0 0 0-.802-1.077M8.25 19.875a2.625 2.625 0 1 1 0-5.251 2.625 2.625 0 0 1 0 5.25M18.375 8.988l-5.25-1.575V5.262l5.25 1.575z" })
  ] });
});
m.displayName = "MusicNote";
export {
  m as MusicNote
};
//# sourceMappingURL=MusicNote.js.map
