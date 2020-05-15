echo "\n----------------- Go Tests -----------------\n"

cd ./go/image/process

go test -bench=. -benchtime=100x

echo "\n----------------- Js Tests -----------------\n"

cd ../../../js

npm run bench
