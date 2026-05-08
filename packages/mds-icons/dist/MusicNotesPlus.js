import { jsxs as t, jsx as l } from "react/jsx-runtime";
import { forwardRef as m, useId as n } from "react";
const h = m(({
  size: o = "1em",
  title: a,
  titleId: e,
  ...i
}, d) => {
  const s = n(), r = a ? e ?? s : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: d, "aria-labelledby": r, ...i, children: [
    a ? /* @__PURE__ */ l("title", { id: r, children: a }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "M22.125 4.5A1.125 1.125 0 0 1 21 5.625h-1.125V6.75a1.125 1.125 0 1 1-2.25 0V5.625H16.5a1.125 1.125 0 0 1 0-2.25h1.125V2.25a1.125 1.125 0 1 1 2.25 0v1.125H21A1.125 1.125 0 0 1 22.125 4.5m-1.5 6v4.875a3.75 3.75 0 1 1-2.25-3.436V10.5a1.125 1.125 0 1 1 2.25 0m-2.25 4.875a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0m-9.75-4.747v7.747a3.75 3.75 0 1 1-2.25-3.436V5.25a1.125 1.125 0 0 1 .852-1.091l5.25-1.313a1.125 1.125 0 0 1 .546 2.183l-4.398 1.1v2.18l6.102-1.525a1.125 1.125 0 0 1 .546 2.182zm-2.25 7.747a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0" })
  ] });
});
h.displayName = "MusicNotesPlus";
export {
  h as MusicNotesPlus
};
//# sourceMappingURL=MusicNotesPlus.js.map
