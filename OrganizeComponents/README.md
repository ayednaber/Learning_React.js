# Organizing Components

After we have learned about Custom components in the previous section, we can now separate these components into different files.

The important thing that we need to note to do this, is that if we take a function to a separate js file, we need to:
1. `import React from "react"` again.
2. `export default function <Component Name>` when defining it.