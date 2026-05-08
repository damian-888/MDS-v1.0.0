import { jsxs as t, jsx as i } from "react/jsx-runtime";
import { forwardRef as v, useId as m } from "react";
const n = v(({
  size: o = "1em",
  title: r,
  titleId: e,
  ...h
}, l) => {
  const a = m(), d = r ? e ?? a : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": d, ...h, children: [
    r ? /* @__PURE__ */ i("title", { id: d, children: r }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M18.75 3.375H5.25A1.875 1.875 0 0 0 3.375 5.25v13.5a1.875 1.875 0 0 0 1.875 1.875h13.5a1.875 1.875 0 0 0 1.875-1.875V5.25a1.875 1.875 0 0 0-1.875-1.875m-.375 7.5h-5.25v-5.25h5.25zm-7.5-5.25v5.25h-5.25v-5.25zm-5.25 7.5h5.25v5.25h-5.25zm7.5 5.25v-5.25h5.25v5.25z" })
  ] });
});
n.displayName = "GridFour";
export {
  n as GridFour
};
//# sourceMappingURL=GridFour.js.map
