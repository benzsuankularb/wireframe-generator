import { dealVoucherComponents } from "./deal-voucher";
import { membershipComponents } from "./member";
import { sessionComponents } from "./session";

export const pageSpecificComponents = {
  ...dealVoucherComponents,
  ...sessionComponents,
  ...membershipComponents,
};
