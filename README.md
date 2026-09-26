# Zain Steel — GitHub Pages website

This version uses the supplied ZAIN STEEL logo and includes:
- English + Arabic switch
- Responsive desktop/mobile design
- WhatsApp contact: **+963 945 161 715**
- Location: **FCW2+8P Zain Steel, Jasreen, Syria**
- WhatsApp CTA buttons and a Google Maps search button
- Products, services, quality, gallery and quote form
- **No Steel Trading service card**
- A simple GitHub-based workflow for adding gallery images

## Add / upload gallery images

GitHub Pages is static hosting, so a visitor cannot securely upload files directly into the GitHub repository from the public website without an authenticated backend.

For the current safe setup:
1. Open the repository on GitHub.
2. Open `assets/images/` (create it if needed).
3. Choose **Add file → Upload files**.
4. Upload your JPG/PNG/WebP images.
5. Update the image entries in the Gallery section of `index.html`.
6. Commit the changes. GitHub Pages publishes the update automatically.

### Recommended next step for a true upload dashboard
If you want a private **Admin → Upload Images** page where you can log in and upload photos from your phone without editing GitHub files, use an authenticated storage service (for example Cloudinary, Supabase Storage, or an app/backend). Do **not** put a GitHub Personal Access Token inside public JavaScript.

## Contact details
- WhatsApp: `https://wa.me/963945161715`
- Location search: `FCW2+8P Zain Steel, Jasreen, Syria`

## Before publishing
Replace:
- `[YOUR EMAIL]`
- any remaining `[YOUR PHONE]` / `[YOUR LOCATION]` placeholders if they appear in footer/contact text.

Connect the quote form to your preferred email/form backend; the included form currently displays a demo confirmation only.
