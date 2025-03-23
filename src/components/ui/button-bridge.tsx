
// This file helps resolve casing conflicts between button.tsx (shadcn) and Button.tsx (custom)
// It exports the shadcn Button under a different name to avoid conflicts

// Import from the exact path with the correct casing
import { Button as ShadcnButtonOriginal, buttonVariants } from "@/components/ui/button";

export const ShadcnButton = ShadcnButtonOriginal;
export { buttonVariants };
