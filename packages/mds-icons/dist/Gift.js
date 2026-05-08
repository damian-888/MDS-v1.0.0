import { jsxs as v, jsx as i } from "react/jsx-runtime";
import { forwardRef as l, useId as m } from "react";
const n = l(({
  size: r = "1em",
  title: a,
  titleId: o,
  ...d
}, e) => {
  const t = m(), h = a ? o ?? t : void 0;
  return /* @__PURE__ */ v("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: e, "aria-labelledby": h, ...d, children: [
    a ? /* @__PURE__ */ i("title", { id: h, children: a }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M20.25 6.377h-2.432a3.17 3.17 0 0 0 .557-1.717 3.43 3.43 0 0 0-3.533-3.533 3.14 3.14 0 0 0-2.28 1.054c-.21.241-.4.502-.562.778a5 5 0 0 0-.562-.778 3.14 3.14 0 0 0-2.28-1.054A3.433 3.433 0 0 0 5.625 4.66a3.17 3.17 0 0 0 .557 1.717H3.75a1.875 1.875 0 0 0-1.875 1.875v3a1.875 1.875 0 0 0 1.5 1.837v5.663a1.875 1.875 0 0 0 1.875 1.875h13.5a1.875 1.875 0 0 0 1.875-1.875v-5.663a1.875 1.875 0 0 0 1.5-1.838v-3a1.875 1.875 0 0 0-1.875-1.874m-.375 4.5h-6.75v-2.25h6.75zM14.25 3.673a.9.9 0 0 1 .656-.297h.033a1.184 1.184 0 0 1 1.186 1.218.9.9 0 0 1-.297.657c-.647.573-1.711.868-2.59 1.008.14-.875.434-1.94 1.012-2.586m-6.028.05a1.2 1.2 0 0 1 .835-.347h.037a.9.9 0 0 1 .656.297c.574.647.868 1.71 1.008 2.588-.872-.141-1.945-.436-2.586-1.01a.9.9 0 0 1-.297-.657 1.2 1.2 0 0 1 .347-.872M4.125 8.626h6.75v2.25h-6.75zm1.5 4.5h5.25v5.25h-5.25zm7.5 5.25v-5.25h5.25v5.25z" })
  ] });
});
n.displayName = "Gift";
export {
  n as Gift
};
//# sourceMappingURL=Gift.js.map
