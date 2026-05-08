import { jsxs as t, jsx as o } from "react/jsx-runtime";
import { forwardRef as s, useId as c } from "react";
const m = s(({
  size: e = "1em",
  title: r,
  titleId: d,
  ...a
}, l) => {
  const n = c(), i = r ? d ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": i, ...a, children: [
    r ? /* @__PURE__ */ o("title", { id: i, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M22.003 2.748a2.984 2.984 0 0 0-4.22 0L1.456 19.085a1.125 1.125 0 0 0 .541 1.893c1.142.264 2.31.398 3.48.398 3.16 0 6.32-.976 9.291-2.894 3.03-1.955 4.796-4.19 4.87-4.284a1.125 1.125 0 0 0-.094-1.49l-1.637-1.644 4.097-4.098a2.987 2.987 0 0 0 0-4.218M13.487 16.63c-2.894 1.852-5.867 2.685-8.867 2.473l9.067-9.07 1.828 1.83 1.688 1.687a20.3 20.3 0 0 1-3.716 3.08m6.925-11.25-4.1 4.091-1.031-1.031 4.097-4.099a.731.731 0 0 1 1.03 1.031z" })
  ] });
});
m.displayName = "Knife";
export {
  m as Knife
};
//# sourceMappingURL=Knife.js.map
