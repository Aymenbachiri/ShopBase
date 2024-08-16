import CustomerSupportIcon from "@/lib/svg/CustomerSupportIcon";
import ProductIcon from "@/lib/svg/ProductIcon";
import SecurePaymentIcon from "@/lib/svg/SecurePaymentIcon";
import type { Feature } from "@/lib/types/types";

export const FeaturesList: Feature[] = [
  {
    label: "ProductLabel",
    description: "ProductDescription",
    icon: <ProductIcon />,
  },
  {
    label: "PaymentLabel",
    description: "PaymentDescription",
    icon: <SecurePaymentIcon />,
  },
  {
    label: "CostumerSupportLabel",
    description: "CostumerSupportDescription",
    icon: <CustomerSupportIcon />,
  },
];
