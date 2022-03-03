import { Col, Radio, Row, Select, Tag, Typography } from 'antd'
import Search from 'antd/lib/input/Search'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { priorityFilterchange, searchFilterchange, statusFilterchange } from '../../redux/actions'

const Filters = () => {
    const [searchText, setSearchText] = useState('')
    const [filterStatus, setFilterStatus] = useState('All')
    const [filterPriorities, setFilterPriorities] = useState([])
    const dispatch = useDispatch()

    const handleSearchTextChange = (e) => {
        const value = e.target.value
        setSearchText(value)

        dispatch(searchFilterchange(value))
    }

    const handleStatusChange = (e) => {
        const value = e.target.value
        setFilterStatus(value)

        dispatch(statusFilterchange(value))
    }

    const handlePriorityChange = (value) => {
        setFilterPriorities(value)

        dispatch(priorityFilterchange(value))
    }

    return (
        <Row justify='center'>
            <Col span={24}>
                <Typography.Paragraph
                    style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
                >
                    Search
                </Typography.Paragraph>
                <Search placeholder='input search text'
                    value={searchText} onChange={handleSearchTextChange} />
            </Col>
            <Col sm={24}>
                <Typography.Paragraph
                    style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
                >
                    Filter By Status
                </Typography.Paragraph>

                <Radio.Group value={filterStatus} onChange={handleStatusChange}>
                    <Radio value='All'>All</Radio>
                    <Radio value='Completed'>Completed</Radio>
                    <Radio value='Todo'>To do</Radio>
                </Radio.Group>
            </Col>
            <Col sm={24}>
                <Typography.Paragraph
                    style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
                >
                    Filter By Priority
                </Typography.Paragraph>
                <Select
                    value={filterPriorities}
                    onChange={handlePriorityChange}
                    mode='multiple'
                    allowClear
                    placeholder='Please select'
                    style={{ width: '100%' }}
                >
                    <Select.Option value='High' label='High'>
                        <Tag color='red'>High</Tag>
                    </Select.Option>
                    <Select.Option value='Medium' label='Medium'>
                        <Tag color='blue'>Medium</Tag>
                    </Select.Option>
                    <Select.Option value='Low' label='Low'>
                        <Tag color='gray'>Low</Tag>
                    </Select.Option>
                </Select>
            </Col>
        </Row>
    )
}

export default Filters