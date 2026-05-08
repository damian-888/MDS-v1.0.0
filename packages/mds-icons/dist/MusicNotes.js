import { jsxs as s, jsx as i } from "react/jsx-runtime";
import { forwardRef as n, useId as v } from "react";
const m = n(({
  size: r = "1em",
  title: o,
  titleId: a,
  ...d
}, l) => {
  const t = v(), e = o ? a ?? t : void 0;
  return /* @__PURE__ */ s("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: l, "aria-labelledby": e, ...d, children: [
    o ? /* @__PURE__ */ i("title", { id: e, children: o }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M20.192 1.363a1.13 1.13 0 0 0-.965-.204l-12 3a1.125 1.125 0 0 0-.852 1.09v9.69a3.75 3.75 0 1 0 2.25 3.436v-7.747l9.75-2.437v3.75a3.75 3.75 0 1 0 2.25 3.434V2.25a1.13 1.13 0 0 0-.433-.887M4.875 19.875a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m3.75-11.566v-2.18l9.75-2.438v2.18zm8.25 8.566a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" })
  ] });
});
m.displayName = "MusicNotes";
export {
  m as MusicNotes
};
//# sourceMappingURL=MusicNotes.js.map
