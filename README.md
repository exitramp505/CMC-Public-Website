# Netlify Identity Fix

Upload these files to the matching paths in your repo:

app/layout.tsx
public/admin/index.html

This adds the Netlify Identity widget to the main site and the admin page.

After deploy, password reset links like:

https://cmcopenbible.netlify.app/#recovery_token=...

should open the Netlify password reset modal instead of just showing the homepage.

You can also try:

https://cmcopenbible.netlify.app/admin/#recovery_token=...

