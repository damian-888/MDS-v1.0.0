import { jsxs as t, jsx as i } from "react/jsx-runtime";
import { forwardRef as m, useId as h } from "react";
const p = m(({
  size: r = "1em",
  title: o,
  titleId: e,
  ...a
}, l) => {
  const n = h(), d = o ? e ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: l, "aria-labelledby": d, ...a, children: [
    o ? /* @__PURE__ */ i("title", { id: d, children: o }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M20.25 3.375H3.75A1.875 1.875 0 0 0 1.875 5.25v13.5a1.875 1.875 0 0 0 1.875 1.875h16.5a1.875 1.875 0 0 0 1.875-1.875V5.25a1.875 1.875 0 0 0-1.875-1.875m-.375 15H4.125V5.625h15.75zm-14.25-9.75a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0m4.5 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0" })
  ] });
});
p.displayName = "AppWindow";
export {
  p as AppWindow
};
//# sourceMappingURL=AppWindow.js.map
