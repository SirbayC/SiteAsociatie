# SiteAsociatie
- The website is accessible at the custom domain: `https://asociatiaprieteniidariei.ro/`
- The connection should be set up to be fully encrypted via TLS (both to the static page and with the API), thus accessing it should be done using HTTPS, displaying a valid certificate
- The domain name was purchased through RoTLD, and is administered through CloudFlare as the DNS
- Post editing is allowed can only be performed by authorized users (authetication is managed through JWT), using an intuitive Rich Text Editor
- The static website is deployed through GitHub Pages, and the API is managed through Oracle Cloud Infrastructure (with connection made via ssh / node-oracledb add-on)

## Technical aspects
- The website is created with React.js for the front-end and Express / Node.js (with CORS enabled) for backend
- For the REST requests themselves, axios is being used
- Yarn is used for package management as both the client and API have `package.json`, with scripts configured for Yarn (Both for development and production)
