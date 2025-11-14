# Apartment Rental Website

A beautiful, modern single-page website for showcasing your 2-bedroom apartment in Allendale, Dublin 15.

## 📸 Adding Your Images

Place your apartment photos in the `/images` folder with the following names:

- **image1.jpg** - Exterior view or building photo
- **image2.jpg** - Living room with fireplace
- **image3.jpg** - Kitchen/dining area
- **image4.jpg** - Primary bedroom
- **image5.jpg** - Bathroom

### Image Requirements:

- **Format:** JPG, PNG, or WebP
- **Recommended size:** 1200px width minimum for best quality
- **Aspect ratio:** 16:9 or 3:2 works best
- **File size:** Compress images to under 500KB each for faster loading

### Adding More Images:

If you want more than 5 images:

1. Add images to the `/images` folder (e.g., `image6.jpg`, `image7.jpg`)
2. Edit `script.js` and add new entries to the `images` array
3. Edit `index.html` and add new thumbnail `<img>` tags in the gallery section

## 🎨 Customizing Content

### Update Property Details:

Edit `index.html` to change:

- Monthly rent amount (currently €2100)
- Availability date
- Contact information (phone & email)
- Property description
- Features and amenities

### Change Colors:

Edit the CSS variables in `styles.css` (lines 7-19):

```css
:root {
  --primary-color: #2c3e50;
  --secondary-color: #e74c3c;
  --accent-color: #3498db;
  ...;
}
```

## 🚀 Viewing the Website

Simply open `index.html` in any web browser, or:

```bash
# Using Python
python3 -m http.server 8000

# Using Node.js
npx http-server

# Then visit: http://localhost:8000
```

## 📱 Features

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Interactive photo gallery with navigation
- ✅ Smooth animations and transitions
- ✅ Keyboard navigation (arrow keys)
- ✅ Modern, professional UI
- ✅ Fast loading and optimized

## 📞 Contact Information

Remember to update your contact details in:

- `index.html` - Contact section (phone number and email)
- `script.js` - Alert message when "Schedule a Viewing" is clicked

## 🌐 Publishing Online

To make your website live:

1. **Free Options:**

   - [GitHub Pages](https://pages.github.com/)
   - [Netlify](https://www.netlify.com/)
   - [Vercel](https://vercel.com/)

2. **With Custom Domain:**
   - Upload to your web hosting via FTP
   - Configure your domain DNS settings

All files are static HTML/CSS/JS, so they'll work on any web host!

## 📝 License

Free to use for your rental property listing.
