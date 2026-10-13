<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Application architecture
- Keep all coffee products and independently priced variants in a shared typed catalog so every commerce surface uses the same source.
- Share cart and frontend order-preview state through a root provider with session-only browser storage, because this phase intentionally has no backend or real ordering.
- Use separate TanStack leaf routes for each shareable content or commerce page, with page-specific metadata, to preserve native navigation and SEO.
- Preserve original M3E theme variables and derive semantic brand roles from them so branding can evolve without altering the supplied theme.
