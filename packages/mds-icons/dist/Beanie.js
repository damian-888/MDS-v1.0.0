import { jsxs as l, jsx as i } from "react/jsx-runtime";
import { forwardRef as n, useId as m } from "react";
const t = n(({
  size: r = "1em",
  title: e,
  titleId: o,
  ...d
}, h) => {
  const v = m(), a = e ? o ?? v : void 0;
  return /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": e ? void 0 : !0, role: e ? "img" : void 0, ref: h, "aria-labelledby": a, ...d, children: [
    e ? /* @__PURE__ */ i("title", { id: a, children: e }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M21.375 15v-1.5a9.39 9.39 0 0 0-6.611-8.959 3 3 0 1 0-5.531 0 9.39 9.39 0 0 0-6.608 8.96V15a1.88 1.88 0 0 0-.75 1.5v3a1.875 1.875 0 0 0 1.875 1.874h16.5a1.875 1.875 0 0 0 1.875-1.875v-3a1.88 1.88 0 0 0-.75-1.5M11.25 3.375a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0m.75 3a7.13 7.13 0 0 1 7.125 7.125v1.125H4.875V13.5A7.133 7.133 0 0 1 12 6.375m-1.125 10.5v2.25h-3v-2.25zm2.25 0h3v2.25h-3zm-9 0h1.5v2.25h-1.5zm15.75 2.25h-1.5v-2.25h1.5z" })
  ] });
});
t.displayName = "Beanie";
export {
  t as Beanie
};
//# sourceMappingURL=Beanie.js.map
