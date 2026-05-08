import { jsxs as n, jsx as d } from "react/jsx-runtime";
import { forwardRef as h, useId as s } from "react";
const m = h(({
  size: r = "1em",
  title: o,
  titleId: l,
  ...i
}, a) => {
  const t = s(), e = o ? l ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: a, "aria-labelledby": e, ...i, children: [
    o ? /* @__PURE__ */ d("title", { id: e, children: o }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M19.5 2.625h-15A1.875 1.875 0 0 0 2.625 4.5v15A1.875 1.875 0 0 0 4.5 21.375h10.19a1.86 1.86 0 0 0 1.325-.55l4.81-4.81a1.86 1.86 0 0 0 .55-1.325V4.5A1.875 1.875 0 0 0 19.5 2.625M4.875 4.875h14.25V13.5h-4.5a1.125 1.125 0 0 0-1.125 1.125v4.5H4.875zM15.75 17.906V15.75h2.156z" })
  ] });
});
m.displayName = "NoteBlank";
export {
  m as NoteBlank
};
//# sourceMappingURL=NoteBlank.js.map
