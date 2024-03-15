import { Space, Table, Tag } from 'antd';
import React from 'react';

const stockColumns = [
    {
        title: '日期',
        dataIndex: 'date',
        key: 'date',
    },
    {
        title: '代码',
        dataIndex: 'code',
        key: 'code',
        render: (text) => <a>{text}</a>,
    },
    {
        title: '名称',
        dataIndex: 'codeName',
        key: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: '行业',
        dataIndex: 'industry',
        key: 'industry',
        sorter: (a, b) => a.industry.length - b.industry.length,
    },
    {
        title: '估值类型',
        dataIndex: 'kind',
        key: 'kind',
    },
    {
        title: '低估值',
        dataIndex: 'underestimate',
        key: 'underestimate',
    },
    {
        title: '当前值',
        dataIndex: 'current',
        key: 'current',
    },
    {
        title: '百分比',
        dataIndex: 'percentage',
        key: 'percentage',
        render: (_, record) => {return (record.percentage + "%")},
        defaultSortOrder: 'ascend',
        sorter: (a, b) => a.percentage - b.percentage,
    },
    {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: (_, { tags }) => (
            <>
                {tags.map((tag) => {
                    let color = 'green';
                    if (tag === '低估') {
                        color = 'green';
                    }
                    if (tag === '正常') {
                        color = 'geekblue';
                    }
                    if (tag === '高估') {
                        color = 'volcano';
                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </>
        ),
    },
    {
        title: '详细',
        key: 'link',
        render: (_, record) => {
            return (
                <Space size="middle">
                    <a href={"https://eniu.com/gu/" + record.code.replace(".", "") + "#"}>亿牛网</a>
                    <a>详细分析</a>
                </Space>
            );
        },
    },
];

const dealColumns = [
  {
    title: '批次',
    dataIndex: 'batch',
    render: (text) => <a>{text}</a>,
  },
  {
    title: '买入比例',
    className: 'column-money',
    dataIndex: 'buyPercentage',
  },
  {
    title: '买入股数',
    dataIndex: 'buyNumber',
  },
  {
    title: '买入价格',
    dataIndex: 'buyPrice',
  },
  {
    title: '买入总额',
    dataIndex: 'buyTotal',
  },
  {
    title: '累计股数',
    dataIndex: 'accumulativeNumber',
  },
  {
    title: '累计总额',
    dataIndex: 'accumulativeTotal',
  },
  {
    title: '当前总额',
    dataIndex: 'currentTotal',
  },
  {
    title: '累计下跌比例',
    dataIndex: 'accumulativeDropPercentage',
  },
  {
    title: '亏损比例',
    dataIndex: 'lossPercentage',
  },
  {
    title: '亏损总额',
    dataIndex: 'lossTotal',
  },
];

const BUY_URL = 'http://localhost:3001/buys'
class Deal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            stock: null,
            methods:[],
        }
    }
    componentDidMount() {
        fetch(`${BUY_URL}`)
            .then(response => {
                console.log(response)
                // Check if the response was successful
                if (!response.ok) {
                    throw new Error("API request was not successful.");
                }
                return response.json()
            })
            .then(parsedResponse => {

                const buys = parsedResponse

                // Do something with the data
                console.log(buys);

                // Update state with data returned from API
                this.setState({ stock: buys.stock, methods: buys.methods});
            })
            .catch(error => console.error(error));
    }
    render() {
        if (!this.state.stock) {
            return <div>Loading data...</div>;
        }
        return (
            <div>
                <div className="App">
                    <h1>买入策略</h1>
                </div>
                <div>
                    <Table
                        columns={stockColumns}
                        dataSource={[this.state.stock]}
                        bordered
                        pagination={{position: ['none', 'none'],}}
                    />
                </div>
                <div>
                    <h2>
                    分批加仓法
                    </h2>
                    <p>分批加仓法是指当股票进入低估区域开始建仓，规划好买入份额和价格，采用分批买入的方法，一批批买入，达到最终买入底部的目的。
                        采用分批建仓法，要对所买入公司的基本面有充分了解，理解估值逻辑,股价进入低估区域时开始建仓；
                        一只个股或者板块出在熊市中，不可能刚到低估区域就马上掉头向上，往往会惯性下跌一段时间，有时候可能会下跌地段时间</p>
                </div>
                <div>
                    {
                        this.state.methods.map(e => {
                            return (
                                <div>
                                    <h3>
                                        {e.name}
                                    </h3>
                                    <Table
                                        columns={dealColumns}
                                        dataSource={e.deals}
                                        bordered
                                        pagination={{position: ['none', 'none'],}}
                                    />
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Deal;