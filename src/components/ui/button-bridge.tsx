
// This file helps resolve casing conflicts between button.tsx (shadcn) and Button.tsx (custom)
// It exports the shadcn Button under a different name to avoid conflicts

import { Button as ShadcnButton, buttonVariants } from "./button";

export { ShadcnButton, buttonVariants };
