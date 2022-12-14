# code splitting
- Code splitting allows you to split your code into various bundles 
    which can then be loaded on demand or in parallel. 
- It can be used to achieve smaller bundles

3 approaches
- Entry Points: Manually split code using entry configuration.
- Prevent Duplication: Use Entry dependencies or SplitChunksPlugin to dedupe and split chunks.
- Dynamic Imports: Split code via inline function calls within modules.
----------------------------------------------------------------------------
`entry points`
- If there are any duplicated modules between entry chunks 
    they will be included in both bundles.
- It isn't as flexible 
- It can't be used to dynamically split code with the core application logic.

`prevent duplication`
- dependOn option ====> allows to share the modules between the chunks:


----------------------------------------------------------------------------