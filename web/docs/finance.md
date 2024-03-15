# 国内外金融数据接口分析

## Tushare, AKshare, baostock, Ashare, Pytdx对比
AKshare在实时更新，baostock好像不在更新了；但是AKshare在线文档速度很慢。克服文档问题，决定使用AKshare获取数据；Tushare据说有积分获取和收费问题，暂时不考虑使用。
| 名称  | 描述|总结|
|-------|-------------|-------------|
| Tushare| 网上最流行的免费数据源，新推出的Tushare Pro需要注册，并需要积分方可访问更多数据；支持http restful 采用post方式请求，可使用其它语言调用API获得数据； |需要注册，需要积分，已获取积分的小伙伴可以自己再试试。毕竟是运行时间较长，稳定一些，速度也不错。|
| AKshare   |  适合进阶，数据内容丰富，发布 AKTools 作为 AKShare 的 HTTP API 版本，可使用其它语言通过调用API获得数据；  |无需注册，调用方便，数据获取内容丰富，效率再高点就好了。|
| baostock | 适合入门，获取一般数据够用了； |无需注册，调用过程再简化一些就更好了，速度也不错。|
| Ashare | 极简，A股实时行情数据API，可算做自制爬虫类，效率很高； |无需注册，单文件，足够简单，调用也方便，但数据单一，速度也很快。|
| Pytdx | 一款纯Python语言开发的类似TradeX的行情数据接口的实现； |无需注册，已不再维护，但可以使用，速度也很快。|
| 其它爬虫 | 可自行编制爬虫，通过js获取东方财富网、新浪、网易等在线数据，难度较大，但效率高。有兴趣的朋友可以自行琢磨 |自行研究，各有各的特点。|

## 语言选择
### Python
Python作为金融领域明星级的分析工具，在数据获取、清洗、分析、建模上都有全套的解决方案，比如说Pandas就是专门为金融分析开发的库。
目前有不少支持Python接口的金融数据库，比如Tushare、AKshare、Baostock、wind等，都可以获得国内股票、基金、期货、利率等数据。
### Http


## 参考
[一文学懂通过Tushare、AKshare、baostock、Ashare、Pytdx获取股票行情数据（含代码）](https://blog.csdn.net/popboy29/article/details/125815775)
[金融数据api接口](https://zhuanlan.zhihu.com/p/363844620)
[tushare](https://tushare.pro/document/1?doc_id=5)
[akshare](https://github.com/akfamily/akshare)
[开源金融数据比较：Tushare、Akshare、baostock、理杏仁等](https://zhuanlan.zhihu.com/p/219633414)
[使用Python轻松获取股票&基金数据](https://zhuanlan.zhihu.com/p/530822468)
