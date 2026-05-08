import { jsxs as t, jsx as d } from "react/jsx-runtime";
import { forwardRef as m, useId as n } from "react";
const s = m(({
  size: o = "1em",
  title: a,
  titleId: e,
  ...i
}, l) => {
  const h = n(), r = a ? e ?? h : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: l, "aria-labelledby": r, ...i, children: [
    a ? /* @__PURE__ */ d("title", { id: r, children: a }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M11.25 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m3-1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m8.951 1.187a1.88 1.88 0 0 1-1.45.688h-2.626v3.286a3.563 3.563 0 0 1-2.062 6.464H6.938a3.562 3.562 0 0 1-2.063-6.464v-3.286H2.25a1.875 1.875 0 0 1-1.838-2.234 5.64 5.64 0 0 1 4.875-4.478A5.6 5.6 0 0 1 4.125 2.25a1.125 1.125 0 0 1 2.25 0A3.375 3.375 0 0 0 9.75 5.625h4.5a3.375 3.375 0 0 0 3.375-3.375 1.125 1.125 0 1 1 2.25 0 5.6 5.6 0 0 1-1.158 3.413 5.64 5.64 0 0 1 4.875 4.478 1.86 1.86 0 0 1-.39 1.546M7.125 15h9.75V9.75A1.875 1.875 0 0 0 15 7.875H9A1.875 1.875 0 0 0 7.125 9.75zM5.297 7.935a3.39 3.39 0 0 0-2.554 2.19h2.132V9.75c0-.63.144-1.25.422-1.815m13.078 10.628a1.313 1.313 0 0 0-1.312-1.313H6.938a1.313 1.313 0 0 0 0 2.625h10.125a1.313 1.313 0 0 0 1.312-1.312m2.882-8.438a3.39 3.39 0 0 0-2.554-2.19c.278.565.423 1.186.422 1.815v.375z" })
  ] });
});
s.displayName = "Cow";
export {
  s as Cow
};
//# sourceMappingURL=Cow.js.map
