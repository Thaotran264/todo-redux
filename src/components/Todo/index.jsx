import { Row, Tag } from 'antd'
import Checkbox from 'antd/lib/checkbox/Checkbox';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { toggleTodoStatus } from '../../redux/actions'
const priorityColorMapping = {
    High: 'red',
    Medium: 'blue',
    Low: 'gray',
};

const Todo = ({ name, prioriry, completed, id }) => {
    const [checked, setChecked] = useState(completed);

    const dispatch = useDispatch()

    const toggleCheckbox = () => {
        setChecked(!checked);

        dispatch(toggleTodoStatus(id))
    };
    return (
        <Row
            justify='space-between'
            style={{ ...(checked ? { opacity: .5, textDecoration: 'line-through' } : {}), marginBottom: 3 }
            }
        >
            <Checkbox checked={checked} onChange={toggleCheckbox}>
                {name}
            </Checkbox>
            <Tag color={priorityColorMapping[prioriry]} style={{ margin: 0 }}>
                {prioriry}
            </Tag>
        </Row >
    )
}

export default Todo