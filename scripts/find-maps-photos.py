import urllib.request
import re

url = "https://www.google.com/maps/search/Bistro+Wielka+Wyspa+Wroc%C5%82aw"
headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}
req = urllib.request.Request(url, headers=headers)
try:
    with urllib.request.urlopen(req) as response:
        content = response.read().decode('utf-8', errors='ignore')
        matches = re.findall(r'https://lh[35]\.googleusercontent\.com/p/[A-Za-z0-9_-]+', content)
        unique = list(set(matches))
        print("Found Google Maps photo URLs count:", len(unique))
        for m in unique:
            print(m)
except Exception as e:
    print("Error:", e)
