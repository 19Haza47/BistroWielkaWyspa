import urllib.request
import re

url = "https://restauracja-kawiarnia-bar.pl/bistro/wroclaw/bistro-wielka-wyspa"
req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
try:
    with urllib.request.urlopen(req) as r:
        html = r.read().decode("utf-8", errors="ignore")
        matches = re.findall(r'https://[^\s"\'\\]+googleusercontent[^\s"\'\\]+', html)
        for m in set(matches):
            print("FOUND:", m)
except Exception as e:
    print("Error:", e)
