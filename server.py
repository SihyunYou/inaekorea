from flask import Flask, send_from_directory, render_template
import os

app = Flask(__name__, static_folder="build", static_url_path="")

# index.html 응답
@app.route("/")
def serve():
    return send_from_directory(app.static_folder, "index.html")

# 정적 파일 응답 (JS, CSS 등)
def static_proxy(path):
    file_path = os.path.join(app.static_folder, path)
    if os.path.exists(file_path):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, path + "/index.html") \
            if os.path.exists(os.path.join(app.static_folder, path, "index.html")) \
            else send_from_directory(app.static_folder, "index.html")

if __name__ == "__main__":
    app.run(debug=False)
