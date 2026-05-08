import { jsxs as t, jsx as e } from "react/jsx-runtime";
import { forwardRef as s, useId as h } from "react";
const c = s(({
  size: r = "1em",
  title: a,
  titleId: o,
  ...d
}, i) => {
  const n = h(), l = a ? o ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: i, "aria-labelledby": l, ...d, children: [
    a ? /* @__PURE__ */ e("title", { id: l, children: a }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M12.375 6.749A1.125 1.125 0 0 1 13.5 5.624h4.031l-1.077-1.08a1.126 1.126 0 0 1 .797-1.923c.299 0 .585.119.797.33l3 3a1.125 1.125 0 0 1 0 1.594l-3 3a1.127 1.127 0 1 1-1.594-1.594l1.077-1.077H13.5a1.125 1.125 0 0 1-1.125-1.125m8.985 10.46a5.65 5.65 0 0 1-5.61 4.915C8.1 22.124 1.875 15.9 1.875 8.249a5.65 5.65 0 0 1 4.914-5.61 1.875 1.875 0 0 1 1.949 1.11l1.979 4.418.006.017a1.87 1.87 0 0 1-.234 1.873l-1.787 2.13c.662 1.203 1.922 2.452 3.14 3.113l2.091-1.781q.051-.043.105-.08a1.87 1.87 0 0 1 1.781-.162l.017.007 4.414 1.977a1.875 1.875 0 0 1 1.11 1.949m-2.28-.005-3.937-1.764-2.101 1.788a1 1 0 0 1-.105.08 1.88 1.88 0 0 1-1.847.132c-1.827-.881-3.646-2.689-4.53-4.5a1.88 1.88 0 0 1 .12-1.841q.037-.057.081-.108L8.56 8.858 6.795 4.921a3.4 3.4 0 0 0-2.67 3.328A11.64 11.64 0 0 0 15.75 19.874a3.4 3.4 0 0 0 3.33-2.67" })
  ] });
});
c.displayName = "PhoneTransfer";
export {
  c as PhoneTransfer
};
//# sourceMappingURL=PhoneTransfer.js.map
