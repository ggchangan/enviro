REV=$(shell git log --max-count=1 --pretty="format:%h")
GO_VER=$(shell go version|grep "go version"|cut -d' ' -f3|sed "s/[\s\t]*//"|sed "s/^go//")
VER='-X main.Revision=$(REV) -X main.GoVersion=$(GO_VER)'
VERSION ?= master
BUILD_NUMBER ?= $(REV)
UNAME:=$(shell uname -s)
PROJECT="datafeed"
UT_MODULE=`find ./ -type f -name "*_test.go" | grep -v mock | grep -v /vendor/ | grep -v /test | grep -v /tool  | xargs -I {} dirname {} | sort -u`
#UT_MODULE=`find ./ -type f -name "*_test.go" | grep -v mock | grep -v /vendor/ | grep -v /looker/sdk | grep -v /test  | xargs -I {} dirname {} | sort -u`
#UT_MODULE=""

main:
	GO111MODULE=on CGO_ENABLED=0 go build -o apiserver cmd/apiserver/main.go