from flask import Flask, send_from_directory
import os

app = Flask(__name__, static_folder="build", static_url_path="")

@app.route("/")
def index():
    return send_from_directory(app.static_folder, "index.html")

@app.errorhandler(404)
def not_found(e):
    return send_from_directory(app.static_folder, "index.html")

pages = [
    {'loc': '/', 'lastmod': '2025-08-08'},
    {'loc': '/enaekorea', 'lastmod': '2025-08-08'},
]

@app.route('/sitemap.xml', methods=['GET'])
def sitemap():
    sitemap_xml = render_template_string(
        """<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        {% for page in pages %}
          <url>
            <loc>{{ request.url_root[:-1] }}{{ page.loc }}</loc>
            <lastmod>{{ page.lastmod }}</lastmod>
            <changefreq>weekly</changefreq>
            <priority>0.8</priority>
          </url>
        {% endfor %}
        </urlset>
        """,
        pages=pages
    )
    return Response(sitemap_xml, mimetype='application/xml')

@app.route('/robots.txt', methods=['GET'])
def robots_txt():
    robots_text = f"""User-agent: *
Disallow: /admin/
Disallow: /private/
Sitemap: {request.url_root}sitemap.xml
"""
    return Response(robots_text, mimetype='text/plain')

@app.route("/logo.png")
def serve_logo():
    return send_from_directory("./public", "favicon.png")

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=False)
