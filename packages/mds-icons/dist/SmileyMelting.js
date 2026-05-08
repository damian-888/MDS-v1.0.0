import { jsxs as n, jsx as l } from "react/jsx-runtime";
import { forwardRef as h, useId as m } from "react";
const s = h(({
  size: i = "1em",
  title: e,
  titleId: o,
  ...a
}, d) => {
  const t = m(), r = e ? o ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: i, height: i, "aria-hidden": e ? void 0 : !0, role: e ? "img" : void 0, ref: d, "aria-labelledby": r, ...a, children: [
    e ? /* @__PURE__ */ l("title", { id: r, children: e }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "M16.875 12.75a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M12.75 8.625a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0m6.36-3.834A10.125 10.125 0 0 0 4.452 18.75a1.125 1.125 0 1 0 1.678-1.5 7.875 7.875 0 1 1 11.739 0 1.125 1.125 0 0 0 1.677 1.5 10.125 10.125 0 0 0-.438-13.96m-5.985 10.584h-.375c-1.857 0-4.125-1.557-4.125-3.375q0-.283.047-.562a1.125 1.125 0 1 0-2.219-.375 5.7 5.7 0 0 0-.078.937c0 1.51.75 2.95 2.109 4.055 1.227.998 2.782 1.57 4.266 1.57h.375a.75.75 0 1 1 0 1.5h-3.75a3 3 0 0 0-3 3 1.125 1.125 0 0 0 2.25 0 .75.75 0 0 1 .75-.75h3.75a3 3 0 0 0 0-6" })
  ] });
});
s.displayName = "SmileyMelting";
export {
  s as SmileyMelting
};
//# sourceMappingURL=SmileyMelting.js.map
