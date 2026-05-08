import { jsxs as t, jsx as a } from "react/jsx-runtime";
import { forwardRef as n, useId as m } from "react";
const c = n(({
  size: o = "1em",
  title: i,
  titleId: e,
  ...d
}, l) => {
  const s = m(), r = i ? e ?? s : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": i ? void 0 : !0, role: i ? "img" : void 0, ref: l, "aria-labelledby": r, ...d, children: [
    i ? /* @__PURE__ */ a("title", { id: r, children: i }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "M22.125 4.5A1.125 1.125 0 0 1 21 5.623h-4.5a1.125 1.125 0 1 1 0-2.25H21A1.125 1.125 0 0 1 22.125 4.5m-1.5 3.75v7.124a3.75 3.75 0 1 1-2.25-3.436V8.25a1.125 1.125 0 1 1 2.25 0m-2.25 7.124a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0m-9.75-4.746v7.746a3.75 3.75 0 1 1-2.25-3.436V5.25a1.125 1.125 0 0 1 .852-1.091l5.25-1.313a1.125 1.125 0 0 1 .546 2.183l-4.398 1.1v2.18l6.102-1.525a1.125 1.125 0 0 1 .546 2.182zm-2.25 7.746a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0" })
  ] });
});
c.displayName = "MusicNotesMinus";
export {
  c as MusicNotesMinus
};
//# sourceMappingURL=MusicNotesMinus.js.map
