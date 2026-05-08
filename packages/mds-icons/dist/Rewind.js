import { jsxs as t, jsx as e } from "react/jsx-runtime";
import { forwardRef as s, useId as m } from "react";
const w = s(({
  size: r = "1em",
  title: l,
  titleId: i,
  ...o
}, a) => {
  const n = m(), d = l ? i ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: a, "aria-labelledby": d, ...o, children: [
    l ? /* @__PURE__ */ e("title", { id: d, children: l }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M21.16 5.106a1.88 1.88 0 0 0-1.907.062l-6.878 4.38V6.737A1.866 1.866 0 0 0 9.503 5.17l-8.267 5.265a1.855 1.855 0 0 0 0 3.133l8.267 5.266a1.867 1.867 0 0 0 2.872-1.568v-2.812l6.878 4.38a1.867 1.867 0 0 0 2.872-1.568V6.735a1.86 1.86 0 0 0-.966-1.63M10.124 16.56 2.965 12l7.16-4.56zm9.75 0L12.715 12l7.16-4.56z" })
  ] });
});
w.displayName = "Rewind";
export {
  w as Rewind
};
//# sourceMappingURL=Rewind.js.map
