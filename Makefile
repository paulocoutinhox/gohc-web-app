# To generate, dont forget:
#     1. Change "src/static/index.html" css and js paths to start with /web-app/
#     2. Change "webpack/output.js" outputPath to "/web-app/"

generate-bindata:
	npm run build
	rm -rf bindata
	mkdir -p bindata
	mv dist web-app
	go-bindata -o bindata/bindata.go -pkg assets -ignore=.gitignore -ignore .DS_Store web-app/...
	mv web-app dist