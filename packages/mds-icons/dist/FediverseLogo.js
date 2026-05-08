import { jsxs as t, jsx as o } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const v = n(({
  size: a = "1em",
  title: l,
  titleId: r,
  ...d
}, i) => {
  const m = s(), e = l ? r ?? m : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: i, "aria-labelledby": e, ...d, children: [
    l ? /* @__PURE__ */ o("title", { id: e, children: l }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M19.875 8.624c-.29 0-.58.042-.859.126l-2.531-3.158a3 3 0 1 0-5.61-1.468v.031L7.008 5.767a3 3 0 1 0-3.146 4.931l.152 3.819a3 3 0 1 0 3.609 4.565l4.02 1.125a3.001 3.001 0 0 0 5.182 1.718 3 3 0 0 0 .237-3.792l2.265-3.562q.27.05.544.05a3 3 0 1 0 0-6zM6.716 10.241l3.275 1.895-3.241 2.52a3 3 0 0 0-.491-.23l-.152-3.819q.326-.147.61-.366m7.609-3.15a3 3 0 0 0 .409-.094l2.53 3.157a3 3 0 0 0-.216.476l-3.602.172zM8.137 16.43l3.3-2.566 1.244 3.73q-.236.202-.427.447l-4.021-1.125a3 3 0 0 0-.097-.486zm6.675.45-1.276-3.828 3.62-.171q.118.256.281.484l-2.265 3.563a3 3 0 0 0-.36-.047m-.937-13.506a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5m-2.133 2.858q.183.184.395.335l-.882 3.702-3.41-1.975q.03-.21.03-.42v-.03zm-6.867.892a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5M5.25 18a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5m9.375 2.625a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5m5.25-8.25a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5" })
  ] });
});
v.displayName = "FediverseLogo";
export {
  v as FediverseLogo
};
//# sourceMappingURL=FediverseLogo.js.map
