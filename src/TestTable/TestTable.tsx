import { Table } from 'antd';
import type { TableColumnsType, TableProps } from 'antd';

interface DataType {
  key: React.Key;
  string1: string;
  date1: Date;
  number1: number;
  flag1: boolean;
  string2: string;
  date2: Date;
  number2: number;
  flag2: boolean;
}

const data: DataType[] = [
  {
    key: '1',
    string1: 'String 1.1',
    date1: new Date('2024-01-30T13:31:03.974Z'),
    number1: 1,
    flag1: true,
    string2: 'String 1.2',
    date2: new Date('2024-01-30T13:31:03.974Z'),
    number2: 10,
    flag2: false,
  },
  {
    key: '2',
    string1: 'String 2.1',
    date1: new Date('2024-01-31T13:31:03.974Z'),
    number1: 2,
    flag1: false,
    string2: 'String 2.2',
    date2: new Date('2024-01-31T13:31:03.974Z'),
    number2: 20,
    flag2: true,
  },
];

// const getDefaultSorter = 

const columns: TableColumnsType<DataType> = [
  {
    title: 'string1',
    dataIndex: 'string1',
    filters: [
      ...data.map(item => ({
        text: item.string1,
        value: item.string1,
      }))
    ],
    filterSearch: true,
    onFilter: (value: any, record: DataType) => record.string1.includes(value),
    sorter: (a, b) => a.string1.localeCompare(b.string1),
    width: '30%',
  },
  {
    title: 'date1',
    dataIndex: 'date1',
    filters: [
      ...data.map(item => ({
        text: item.date1.toDateString(),
        value: item.date1.toDateString(),
      }))
    ],
    onFilter: (value: any, record: DataType) => record.date1 === new Date(value),
    render: ((date: Date) => date.toDateString()),
    sorter: (a, b) => ((a.date1 as any) - (b.date1 as any)),
  },
  {
    title: 'number1',
    dataIndex: 'number1',
    sorter: (a, b) => ((a.number1 as any) - (b.number1 as any)),
  },
  {
    title: 'flag1',
    dataIndex: 'flag1',
    filters: [
      ...data.map(item => ({
        text: `${item.flag1}`,
        value: item.flag1,
      }))
    ],
    filterSearch: true,
    onFilter: (value: any, record: DataType) => record.flag1 === value,
    render: (text, record) => (`${record.flag1}`),
    sorter: (a, b) => ((a.flag1 as any) - (b.flag1 as any)),
  },
  {
    title: 'string2',
    dataIndex: 'string2',
    filters: [
      ...data.map(item => ({
        text: item.string2,
        value: item.string2,
      }))
    ],
    filterSearch: true,
    onFilter: (value: any, record: DataType) => record.string2.includes(value),
    sorter: (a, b) => a.string2.localeCompare(b.string2),
    width: '30%',
  },
  {
    title: 'date2',
    dataIndex: 'date2',
    filters: [
      ...data.map(item => ({
        text: item.date2.toDateString(),
        value: item.date2.toDateString(),
      }))
    ],
    onFilter: (value: any, record: DataType) => record.date2 === new Date(value),
    render: ((date: Date) => date.toDateString()),
    sorter: (a, b) => ((a.date2 as any) - (b.date2 as any)),
  },
  {
    title: 'number2',
    dataIndex: 'number2',
    sorter: (a, b) => ((a.number2 as any) - (b.number2 as any)),
  },
  {
    title: 'flag2',
    dataIndex: 'flag2',
    filters: [
      ...data.map(item => ({
        text: `${item.flag2}`,
        value: item.flag2,
      }))
    ],
    filterSearch: true,
    onFilter: (value: any, record: DataType) => record.flag2 === value,
    render: (text, record) => (`${record.flag2}`),
    sorter: (a, b) => ((a.flag2 as any) - (b.flag2 as any)),
  },
];

function TestTable() {
  return (
    <div>
      <Table columns={columns} dataSource={data} />
    </div>
  );
}

export default TestTable;
