import { jsxs as t, jsx as l } from "react/jsx-runtime";
import { forwardRef as s, useId as c } from "react";
const m = s(({
  size: e = "1em",
  title: r,
  titleId: d,
  ...o
}, n) => {
  const a = c(), i = r ? d ?? a : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: n, "aria-labelledby": i, ...o, children: [
    r ? /* @__PURE__ */ l("title", { id: i, children: r }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "M12 1.875A10.125 10.125 0 1 0 22.125 12 10.137 10.137 0 0 0 12 1.875m0 18A7.875 7.875 0 1 1 19.875 12 7.883 7.883 0 0 1 12 19.875M16.875 9v6a1.126 1.126 0 0 1-1.828.878l-3.422-2.737V15a1.126 1.126 0 0 1-1.828.878l-3.75-3a1.125 1.125 0 0 1 0-1.756l3.75-3A1.125 1.125 0 0 1 11.625 9v1.86l3.422-2.738A1.125 1.125 0 0 1 16.875 9" })
  ] });
});
m.displayName = "RewindCircle";
export {
  m as RewindCircle
};
//# sourceMappingURL=RewindCircle.js.map
