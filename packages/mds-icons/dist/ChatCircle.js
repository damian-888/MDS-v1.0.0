import { jsxs as n, jsx as i } from "react/jsx-runtime";
import { forwardRef as h, useId as s } from "react";
const c = h(({
  size: l = "1em",
  title: r,
  titleId: o,
  ...d
}, a) => {
  const t = s(), e = r ? o ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: a, "aria-labelledby": e, ...d, children: [
    r ? /* @__PURE__ */ i("title", { id: e, children: r }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M12 1.875a10.125 10.125 0 0 0-9.014 14.74l-1.018 3.04a1.875 1.875 0 0 0 2.376 2.376l3.04-1.013A10.125 10.125 0 1 0 12 1.875m0 18a7.9 7.9 0 0 1-3.944-1.057 1.13 1.13 0 0 0-.918-.093l-2.793.93.93-2.792a1.13 1.13 0 0 0-.093-.92A7.875 7.875 0 1 1 12 19.875" })
  ] });
});
c.displayName = "ChatCircle";
export {
  c as ChatCircle
};
//# sourceMappingURL=ChatCircle.js.map
