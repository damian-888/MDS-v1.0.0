import { jsxs as t, jsx as h } from "react/jsx-runtime";
import { forwardRef as n, useId as a } from "react";
const m = n(({
  size: r = "1em",
  title: e,
  titleId: i,
  ...o
}, l) => {
  const c = a(), d = e ? i ?? c : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": e ? void 0 : !0, role: e ? "img" : void 0, ref: l, "aria-labelledby": d, ...o, children: [
    e ? /* @__PURE__ */ h("title", { id: d, children: e }) : null,
    /* @__PURE__ */ h("path", { fill: "currentColor", d: "M19.5 3.375h-15A1.875 1.875 0 0 0 2.625 5.25v5.25c0 5.09 2.468 8.177 4.538 9.87 2.222 1.819 4.447 2.438 4.54 2.466.195.052.4.052.593 0 .094-.027 2.319-.647 4.541-2.465 2.07-1.694 4.538-4.781 4.538-9.871V5.25A1.875 1.875 0 0 0 19.5 3.375m-.375 7.125q.002.189-.006.375h-5.994v-5.25h6zM4.875 5.625h6v5.25H4.881c0-.124-.006-.25-.006-.375zm.281 7.5h5.719v6.965c-.84-.41-1.63-.918-2.352-1.513-1.752-1.457-2.88-3.284-3.367-5.452m10.322 5.452a12 12 0 0 1-2.353 1.513v-6.965h5.719c-.488 2.168-1.615 3.995-3.367 5.452z" })
  ] });
});
m.displayName = "ShieldCheckered";
export {
  m as ShieldCheckered
};
//# sourceMappingURL=ShieldCheckered.js.map
