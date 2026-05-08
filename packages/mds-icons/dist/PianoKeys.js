import { jsxs as l, jsx as h } from "react/jsx-runtime";
import { forwardRef as n, useId as m } from "react";
const t = n(({
  size: r = "1em",
  title: o,
  titleId: i,
  ...d
}, v) => {
  const a = m(), e = o ? i ?? a : void 0;
  return /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: v, "aria-labelledby": e, ...d, children: [
    o ? /* @__PURE__ */ h("title", { id: e, children: o }) : null,
    /* @__PURE__ */ h("path", { fill: "currentColor", d: "M19.5 2.625h-15A1.875 1.875 0 0 0 2.625 4.5v15A1.875 1.875 0 0 0 4.5 21.375h15a1.875 1.875 0 0 0 1.875-1.875v-15A1.875 1.875 0 0 0 19.5 2.625m-10.875 9.75v-7.5h2.25v7.5zm4.875 2.25v4.5h-3v-4.5zm1.875-2.25h-2.25v-7.5h2.25zm-10.5-7.5h1.5V13.5A1.125 1.125 0 0 0 7.5 14.625h.75v4.5H4.875zm14.25 14.25H15.75v-4.5h.75a1.125 1.125 0 0 0 1.125-1.125V4.875h1.5z" })
  ] });
});
t.displayName = "PianoKeys";
export {
  t as PianoKeys
};
//# sourceMappingURL=PianoKeys.js.map
