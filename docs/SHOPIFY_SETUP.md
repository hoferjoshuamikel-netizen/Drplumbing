# Shopify setup and release guide

## 1. Connect GitHub to Shopify

1. In Shopify admin, open **Online Store > Themes**.
2. In **Theme library**, select **Add theme > Connect from GitHub**.
3. Authorize the Shopify GitHub app if Shopify requests access.
4. Choose `hoferjoshuamikel-netizen/Drplumbing`.
5. Connect the `staging` branch to a new unpublished theme first.
6. Preview and test the entire store before connecting or publishing `main`.

Shopify synchronizes commits on the connected branch into the theme. Theme-editor changes can also be committed back to that branch, so avoid editing the same setting in Shopify while someone is changing the same file in GitHub.

## 2. Replace the main logo

### Recommended: Shopify theme editor

This theme uses one global logo setting in the header, homepage hero, and footer.

1. Open **Online Store > Themes**.
2. On the connected preview theme, select **Customize**.
3. Open **Theme settings > Brand**.
4. Upload the approved high-resolution logo under **Logo**.
5. Upload a square favicon under **Favicon**.
6. Save and check the header, homepage hero, footer, and mobile layout.

Use a transparent PNG or WebP with clean edges. Keep comfortable transparent padding around the artwork. A wide logo generally fits the header better than a tall badge, while the hero and footer can accommodate either.

### Repository fallback

If no logo is selected in Shopify, the theme displays `assets/dr-plumbing-logo.png`. Replace that file with the approved fallback while keeping the exact filename, or update all three references in:

- `sections/header.liquid`
- `sections/hero-service.liquid`
- `sections/footer.liquid`

The current fallback is 248 × 262 pixels and should be replaced with a sharper master asset before launch.

## 3. Confirm business settings

In **Theme settings**, verify:

- Displayed phone number: `585-465-2138`
- Telephone/SMS link: `+15854652138`
- Emergency availability wording
- Service area
- Customer email
- Request-service page URL

## 4. Create pages and assign templates

Create these pages in **Online Store > Pages**, then assign the matching theme template where one exists:

| Shopify page | Suggested handle | Theme template |
| --- | --- | --- |
| About Us | `about-us` | `page.about` |
| Services | `services` | `page.services` |
| Request Service | `request-service` | `page.request-service` |
| Reviews | `reviews` | Default page |
| Contact | `contact` | Default page |

The request-service form uses Shopify's native contact form. Submit a test request and confirm delivery to the store's sender/customer email configuration.

## 5. Configure navigation and products

1. Create the main and footer menus.
2. Link Home, Services, About, Reviews, Shop, and Request Service.
3. Create merchandise collections for apparel, hats, magnets, mugs, phone cases, and future products.
4. Select the featured collection in the homepage theme editor.
5. Add shipping, refund, privacy, and terms policies.

## 6. Pre-publish checklist

- Confirm the approved logo is sharp on desktop and mobile.
- Test every call, text, form, menu, product, cart, and checkout link.
- Place a complete test order and verify taxes, shipping, notifications, and fulfillment routing.
- Check product variants, prices, inventory behavior, and return wording.
- Review the site on a phone, tablet, and desktop.
- Confirm Theme Check passes on the release commit.
- Keep the preview theme unpublished until DR Plumbing approves it.

## Official references

- [Connect a Shopify theme to GitHub](https://shopify.dev/docs/storefronts/themes/tools/github)
- [Shopify theme architecture](https://shopify.dev/docs/storefronts/themes/architecture)
- [Shopify Theme Check](https://shopify.dev/docs/storefronts/themes/tools/theme-check)
