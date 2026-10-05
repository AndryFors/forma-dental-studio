from urllib.request import Request, urlopen
from pathlib import Path

PHOTOS = {
    'clinic': 'photo-1629909613654-28e377c37b09',
    'consultation': 'photo-1777331903190-341a3dd0441b',
    'smile': 'photo-1704579924216-31ef96f7e008',
    'interior': 'photo-1756889661455-38e4afd84815',
}

out = Path(__file__).resolve().parents[1] / 'public' / 'images'
out.mkdir(parents=True, exist_ok=True)
for name, photo_id in PHOTOS.items():
    url = f'https://images.unsplash.com/{photo_id}?w=1800&q=82&fit=crop&fm=webp'
    data = urlopen(Request(url, headers={'User-Agent': 'Mozilla/5.0'}), timeout=60).read()
    (out / f'{name}.webp').write_bytes(data)
    print(name, len(data), url.split('?')[0])
