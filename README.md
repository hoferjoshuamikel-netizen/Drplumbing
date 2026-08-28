# DR Plumbing Shopify Theme

Custom Online Store 2.0 theme for the DR Plumbing service website and merchandise store.

The theme combines two customer paths:

- Request plumbing service by phone, text, or form.
- Purchase DR Plumbing apparel and merchandise through Shopify checkout.

## Repository workflow

- `main` is the production-ready branch.
- `staging` is the recommended branch for an unpublished Shopify preview theme.
- Make substantial changes on a short-lived feature branch, open a pull request into `staging`, and promote tested changes to `main`.
- Shopify Theme Check runs automatically on pull requests and pushes to `main` or `staging`.

## Theme structure

| Path | Purpose |
| --- | --- |
| `assets/` | CSS, JavaScript, and the fallback DR Plumbing logo |
| `config/` | Theme editor settings and saved defaults |
| `layout/` | Global HTML shell |
| `locales/` | Storefront translations |
| `sections/` | Editable storefront sections |
| `snippets/` | Reusable Liquid components |
| `templates/` | Online Store 2.0 JSON page templates |
| `docs/` | Store connection, setup, and logo instructions |

## Local development

Install the current Shopify CLI, authenticate to the development store, and run:

```bash
shopify theme dev
```

Validate changes before committing:

```bash
shopify theme check
```

## Shopify connection

Follow [docs/SHOPIFY_SETUP.md](docs/SHOPIFY_SETUP.md) to connect this repository to Shopify, create the required pages, assign templates, and replace the main logo.

## Important business settings

In **Online Store > Themes > Customize > Theme settings**, confirm:

- Logo and favicon
- Displayed phone number and telephone link
- Availability message
- Request-service page URL
- Service area and customer email

Do not publish until the phone, service area, products, policies, navigation, and test checkout have been verified.

## Official references

- [Shopify GitHub integration for themes](https://shopify.dev/docs/storefronts/themes/tools/github)
- [Shopify CLI for themes](https://shopify.dev/docs/storefronts/themes/tools/cli)
- [Shopify Theme Check](https://shopify.dev/docs/storefronts/themes/tools/theme-check)

## License

This repository is public for deployment and collaboration, but it is not an open-source theme. See [LICENSE.md](LICENSE.md).
