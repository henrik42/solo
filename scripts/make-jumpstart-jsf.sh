#!/bin/bash -ex

mkdir -p classes/
rm -rf classes/*
java -cp jumpstart/src/:classes/:lib/clojure-1.8.0.jar clojure.main -e "(compile 'solo.jumpstart.jsf)"
jar -vcf jumpstart-jsf.jar -C classes/ solo
jar -vuf jumpstart-jsf.jar -C jumpstart/resources/ META-INF
