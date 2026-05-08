import { jsxs as t, jsx as d } from "react/jsx-runtime";
import { forwardRef as n, useId as m } from "react";
const h = n(({
  size: e = "1em",
  title: r,
  titleId: i,
  ...l
}, s) => {
  const a = m(), o = r ? i ?? a : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: s, "aria-labelledby": o, ...l, children: [
    r ? /* @__PURE__ */ d("title", { id: o, children: r }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M11.735 14.714a6 6 0 1 0-7.721 0 9.4 9.4 0 0 0-3.702 3 1.125 1.125 0 1 0 1.814 1.331 7.125 7.125 0 0 1 11.497 0 1.126 1.126 0 0 0 1.815-1.33 9.4 9.4 0 0 0-3.703-3m-7.61-4.588a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0m19.322 9.157a1.126 1.126 0 0 1-1.574-.241 7.15 7.15 0 0 0-5.748-2.916 1.125 1.125 0 0 1 0-2.25 3.751 3.751 0 1 0-.966-7.375 1.125 1.125 0 1 1-.578-2.174 6 6 0 0 1 5.404 10.387 9.4 9.4 0 0 1 3.702 3 1.125 1.125 0 0 1-.24 1.569" })
  ] });
});
h.displayName = "Users";
export {
  h as Users
};
//# sourceMappingURL=Users.js.map
