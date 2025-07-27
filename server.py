from flask import Flask, send_from_directory
import os

app = Flask(__name__, static_folder="build", static_url_path="")

# 정적 파일 응답
@app.route("/<path:path>")
def static_proxy(path):
    file_path = os.path.join(app.static_folder, path)
    if os.path.exists(file_path):
        return send_from_directory(app.static_folder, path)
    else:
        # 파일이 없으면 index.html 반환 (SPA 대응)
        return send_from_directory(app.static_folder, "index.html")

# 루트 경로
@app.route("/")
def index():
    return send_from_directory(app.static_folder, "index.html")

# 404 오류가 발생해도 index.html 반환
@app.errorhandler(404)
def not_found(e):
    return send_from_directory(app.static_folder, "index.html")

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=False)
