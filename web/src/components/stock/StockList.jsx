import './StockList.css';

import { Space, Table, Tag } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom'

const columns = [
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
            console.log(record.code)
            return (
                <Space size="middle">
                    <a href={"https://eniu.com/gu/" + record.code.replace(".", "") + "#"}>亿牛网</a>
                    <a>详细分析</a>
                    <Link to={"/deal?code="+record.code}>交易策略</Link>
                </Space>
            );
        },
    },
];


const API_URL = 'http://localhost:3001/stocks'
//const API_URL = 'http://localhost:8089/v1/stocks/group/1'
class StockList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        };
    }

    componentDidMount() {
        fetch(`${API_URL}`)
            .then(response => {
                console.log(response)
                // Check if the response was successful
                if (!response.ok) {
                    throw new Error("API request was not successful.");
                }
                return response.json()
            })
            .then(parsedResponse => {

                const stocks = parsedResponse

                // Do something with the data
                console.log(stocks);

                // Update state with data returned from API
                this.setState({ data: stocks});
            })
            .catch(error => console.error(error));
    }
    render() {
        const { data } = this.state;

        if (!data) {
            return <div>Loading data...</div>;
        }

        return (
            <div className="App">
                <h1>股票池</h1>
                <Table dataSource={data}
                       columns={columns}
                />;
            </div>
        );
    }
}

export default StockList;
