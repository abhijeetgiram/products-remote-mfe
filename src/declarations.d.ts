declare module "products_shell_mfe/ThemeContext" {
  import * as React from "react";

  type Theme = "light" | "dark";

  interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
  }

  export const ThemeProvider: React.FC<{ children: React.ReactNode }>;
  export const useTheme: () => ThemeContextType;
}
