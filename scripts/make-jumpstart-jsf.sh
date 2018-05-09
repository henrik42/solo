#!/bin/bash -ex

mkdir -p classes/
rm -rf classes/*
java -cp jumpstart/src/:classes/:lib/clojure-1.8.0.jar:lib/servlet-api.jar clojure.main \
-e "(compile 'solo.jumpstart.jsf)" -e "(compile 'solo.jumpstart.servlet_container_initializer)"
jar -vcf jumpstart-jsf.jar -C classes/ solo
jar -vuf jumpstart-jsf.jar -C jumpstart/resources/ META-INF
