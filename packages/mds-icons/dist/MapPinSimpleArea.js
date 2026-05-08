import { jsxs as t, jsx as a } from "react/jsx-runtime";
import { forwardRef as c, useId as m } from "react";
const s = c(({
  size: e = "1em",
  title: r,
  titleId: o,
  ...d
}, l) => {
  const n = m(), i = r ? o ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": i, ...d, children: [
    r ? /* @__PURE__ */ a("title", { id: i, children: r }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "M10.875 9.969V16.5a1.125 1.125 0 1 0 2.25 0V9.97a4.125 4.125 0 1 0-2.25 0M12 4.126a1.875 1.875 0 1 1 0 3.75 1.875 1.875 0 0 1 0-3.75m10.875 12.375c0 2.024-2.24 3.188-3.577 3.701-1.967.758-4.559 1.174-7.298 1.174-5.404 0-10.875-1.674-10.875-4.875 0-2.084 2.449-3.769 6.551-4.506a1.125 1.125 0 1 1 .398 2.215c-3.206.576-4.699 1.708-4.699 2.291 0 .375.668 1.038 2.135 1.601 1.715.657 4.02 1.024 6.49 1.024s4.775-.364 6.49-1.024c1.467-.563 2.135-1.226 2.135-1.6 0-.584-1.493-1.716-4.699-2.292a1.126 1.126 0 1 1 .398-2.215c4.102.737 6.551 2.422 6.551 4.506" })
  ] });
});
s.displayName = "MapPinSimpleArea";
export {
  s as MapPinSimpleArea
};
//# sourceMappingURL=MapPinSimpleArea.js.map
