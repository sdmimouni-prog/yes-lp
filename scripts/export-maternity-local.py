from pathlib import Path
import base64
root=Path(__file__).resolve().parent.parent
html=(root/'src/maternity/page.html').read_text()
(root/'maternite.html').write_text(html)
css=(root/'src/maternity/style.css').read_text()
js=(root/'src/maternity/main.js').read_text()
assets=[*(root/'public/assets/fonts').glob('tajawal-*.ttf'),root/'public/assets/campaign/maternity.png',root/'public/assets/images/footer-logo.webp',root/'public/assets/images/footer-heart.webp']
for asset in assets:
    mime='font/ttf' if asset.suffix=='.ttf' else ('image/png' if asset.suffix=='.png' else 'image/webp')
    uri='data:'+mime+';base64,'+base64.b64encode(asset.read_bytes()).decode()
    url='/'+str(asset.relative_to(root/'public'))
    html=html.replace(url,uri)
    css=css.replace(url,uri)
html=html.replace('<link rel="stylesheet" href="/src/maternity/style.css">','<style>'+css+'</style>').replace('<script type="module" src="/src/maternity/main.js"></script>','<script>'+js+'</script>').replace('href="/"','href="#headline"')
(root/'yes-maternite-local.html').write_text(html)
