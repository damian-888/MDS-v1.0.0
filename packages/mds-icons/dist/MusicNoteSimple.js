import { jsxs as n, jsx as r } from "react/jsx-runtime";
import { forwardRef as s, useId as m } from "react";
const c = s(({
  size: i = "1em",
  title: e,
  titleId: d,
  ...l
}, t) => {
  const a = m(), o = e ? d ?? a : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: i, height: i, "aria-hidden": e ? void 0 : !0, role: e ? "img" : void 0, ref: t, "aria-labelledby": o, ...l, children: [
    e ? /* @__PURE__ */ r("title", { id: o, children: e }) : null,
    /* @__PURE__ */ r("path", { fill: "currentColor", d: "m19.823 4.923-7.5-2.25a1.125 1.125 0 0 0-1.448 1.077v9.395a4.875 4.875 0 1 0 2.25 4.105V5.262l6.052 1.815a1.125 1.125 0 1 0 .646-2.156zM8.25 19.875a2.625 2.625 0 1 1 0-5.251 2.625 2.625 0 0 1 0 5.25" })
  ] });
});
c.displayName = "MusicNoteSimple";
export {
  c as MusicNoteSimple
};
//# sourceMappingURL=MusicNoteSimple.js.map
