import TodoListItem from "./TodoListItem";
import './TodoList.scss';

// 할일들의 배열. TodoListItem 컴포넌트들을 보여줌.
const TodoList = ({ todos, onRemove, onToggle }) => {
    console.log(todos);
    return (
        <div className="TodoList">
            {todos.map((todo) => (
                // 배열 todos의 원소 todo를 TodoListItem 컴포넌트에게 props로 전달.
                // 상위 컴포넌트 App에서 props로 전달받은 onRemove 함수를 
                // TodoListItem 컴포넌트에게 props로 전달함.
                <TodoListItem
                    key={todo.id}
                    todo={todo}
                    onRemove={onRemove}
                    onToggle={onToggle} />
            ))}
        </div>
    );
};

export default TodoList;