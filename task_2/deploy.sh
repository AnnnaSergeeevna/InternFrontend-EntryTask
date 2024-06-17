set -e

pnpm run build

cd dist

git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:<AnnnaSergeeevna>/<Tests17may2024>.git master:gh-pages

cd -