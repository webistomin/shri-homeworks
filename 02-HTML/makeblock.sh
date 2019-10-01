#!/bin/bash
touch src/sass/blocks/$1.sass
touch src/views/blocks/$1.pug

echo -e "@import 'blocks/$1'" >> src/sass/main.sass
echo -e ".$1" >> src/sass/blocks/$1.sass

echo "Блок $1 создан"
