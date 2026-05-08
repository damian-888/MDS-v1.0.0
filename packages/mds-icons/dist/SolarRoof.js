import { jsxs as m, jsx as d } from "react/jsx-runtime";
import { forwardRef as t, useId as n } from "react";
const s = t(({
  size: o = "1em",
  title: l,
  titleId: h,
  ...a
}, e) => {
  const i = n(), r = l ? h ?? i : void 0;
  return /* @__PURE__ */ m("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: e, "aria-labelledby": r, ...a, children: [
    l ? /* @__PURE__ */ d("title", { id: r, children: l }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "m23.506 11.497-3.75-7.5a1.12 1.12 0 0 0-1.006-.622H5.25a1.13 1.13 0 0 0-1.006.622l-3.75 7.5A1.1 1.1 0 0 0 .375 12v5.25a1.875 1.875 0 0 0 1.875 1.875h19.5a1.875 1.875 0 0 0 1.875-1.875V12c0-.175-.04-.347-.12-.503M9.054 5.625l.75 1.5H7.821l-.75-1.5zm4.5 0 .75 1.5h-1.983l-.75-1.5zm-3.858 5.25-.75-1.5h1.983l.75 1.5zm4.5 0-.75-1.5h1.983l.75 1.5zm4.5 0-.75-1.5h1.983l.75 1.5zm.108-3.75h-1.983l-.75-1.5h1.983zm-16.179 5.14 2.625-5.25 2.625 5.25v4.61h-5.25zm7.5 4.61v-3.75h11.25v3.75z" })
  ] });
});
s.displayName = "SolarRoof";
export {
  s as SolarRoof
};
//# sourceMappingURL=SolarRoof.js.map
