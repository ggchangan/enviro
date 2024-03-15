# aktools
## 使用经验
1. 不推荐直接在主机上安装，因为环境可能有差异；推荐使用docker的方式安装和访问aktools
2. 接口列表，当前并没有看到aktools提供的所有的接口列表，直接从源码中获取
## 基于docker方式启动
```
docker pull registry.cn-shanghai.aliyuncs.com/akfamily/aktools:1.8.95
docker run -p 8080:8080 registry.cn-shanghai.aliyuncs.com/akfamily/aktools:1.8.95
```
## 访问
```
http://127.0.0.1:8080/api/public/stock_zh_a_hist
```
```
http://127.0.0.1:8080/api/public/stock_info_a_code_name
```

## 应用
[aktools github](https://github.com/akfamily/aktools)
[akshare doc](https://akshare.xyz/tutorial.html)