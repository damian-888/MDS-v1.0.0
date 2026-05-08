import { jsxs as s, jsx as i } from "react/jsx-runtime";
import { forwardRef as t, useId as c } from "react";
const h = t(({
  size: r = "1em",
  title: a,
  titleId: o,
  ...d
}, e) => {
  const n = c(), l = a ? o ?? n : void 0;
  return /* @__PURE__ */ s("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: e, "aria-labelledby": l, ...d, children: [
    a ? /* @__PURE__ */ i("title", { id: l, children: a }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M5.333 2.993a1.125 1.125 0 1 0-1.665 1.513l.41.451A1.125 1.125 0 0 0 3.374 6v7.5a8.625 8.625 0 0 0 14.344 6.46l.953 1.046a1.125 1.125 0 0 0 1.665-1.513zm.31 10.984a6.39 6.39 0 0 1 5.215 5.796 6.39 6.39 0 0 1-5.215-5.796M12 15.995a8.65 8.65 0 0 0-6.375-4.297V7.223q.33.06.65.153l6.641 7.303q-.519.616-.916 1.316m1.143 3.777a6.4 6.4 0 0 1 1.305-3.407l1.753 1.928a6.35 6.35 0 0 1-3.058 1.479M20.625 6v7.5a9 9 0 0 1-.093 1.25 1.124 1.124 0 1 1-2.227-.323q.032-.224.049-.45l-.215.042a1.124 1.124 0 1 1-.476-2.198c.233-.05.468-.094.709-.123V7.225a6.38 6.38 0 0 0-3.637 2.036 1.126 1.126 0 0 1-1.68-1.5 8.6 8.6 0 0 1 1.628-1.414c-.768-1.4-1.997-2.344-2.684-2.79a9 9 0 0 0-1.458 1.181 1.125 1.125 0 1 1-1.594-1.59 10.9 10.9 0 0 1 2.549-1.904 1.13 1.13 0 0 1 1.007 0c.124.062 2.752 1.406 4.194 4.1.902-.31 1.85-.469 2.803-.47A1.125 1.125 0 0 1 20.625 6" })
  ] });
});
h.displayName = "GrainsSlash";
export {
  h as GrainsSlash
};
//# sourceMappingURL=GrainsSlash.js.map
