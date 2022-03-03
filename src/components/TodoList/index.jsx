import { Button, Col, Input, Row, Select, Tag } from 'antd'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { addTodo, searchFilterchange } from '../../redux/actions'
import { todoRemainingSelector } from '../../redux/selectors'
import Todo from '../Todo'
const TodoList = () => {
    const dispatch = useDispatch()
    const [todoName, setTodoName] = useState('')
    const [todoPriority, setTodoPriority] = useState('Medium')

    const todoList = useSelector(todoRemainingSelector)

    const handleAddButtonClick = () => {
        dispatch(addTodo({
            id: uuidv4(),
            name: todoName,
            priority: todoPriority,
            completed: false
        }))
        setTodoName('')
        setTodoPriority('Medium')
    }

    const handleInputChange = (e) => {
        const value = e.target.value;
        setTodoName(value)
    }
    const handlePriorityChange = (value) => {
        setTodoPriority(value)
    }
    return (
        <Row style={{ height: 'calc(100% - 40px)' }}>
            <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
                {todoList.map(todo =>
                    <Todo key={todo.id}
                        id={todo.id}
                        name={todo.name}
                        completed={todo.completed}
                        prioriry={todo.priority}
                    />)}
            </Col>
            <Col span={24}>
                <Input.Group style={{ display: 'flex' }} compact>
                    <Input value={todoName} onChange={handleInputChange} />
                    <Select defaultValue='Medium' value={todoPriority} onChange={handlePriorityChange}>
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
                    <Button type='primary'
                        onClick={handleAddButtonClick}>
                        Add
                    </Button>
                </Input.Group>
            </Col>
        </Row>
    )
}

export default TodoList