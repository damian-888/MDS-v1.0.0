import { jsxs as t, jsx as i } from "react/jsx-runtime";
import { forwardRef as n, useId as m } from "react";
const s = n(({
  size: r = "1em",
  title: o,
  titleId: l,
  ...a
}, d) => {
  const h = m(), e = o ? l ?? h : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: d, "aria-labelledby": e, ...a, children: [
    o ? /* @__PURE__ */ i("title", { id: e, children: o }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M12 6.375A1.125 1.125 0 0 1 10.875 7.5h-1.5a1.125 1.125 0 0 1 0-2.25h1.5A1.125 1.125 0 0 1 12 6.375m4.514 11.964.342 2.396A1.875 1.875 0 0 1 15 22.875H9a1.876 1.876 0 0 1-1.856-2.14l.342-2.396a9.38 9.38 0 0 1-4.861-8.214A1.125 1.125 0 0 1 3.75 9h1.125V3.75A1.875 1.875 0 0 1 6.75 1.875h10.5a1.875 1.875 0 0 1 1.875 1.875V9h1.125a1.125 1.125 0 0 1 1.125 1.125 9.38 9.38 0 0 1-4.86 8.214M7.125 9h9.75V4.125h-9.75zm7.238 10.198a9.4 9.4 0 0 1-4.726 0l-.205 1.427h5.136zm4.673-7.948H4.969a7.125 7.125 0 0 0 14.072 0z" })
  ] });
});
s.displayName = "Toilet";
export {
  s as Toilet
};
//# sourceMappingURL=Toilet.js.map
