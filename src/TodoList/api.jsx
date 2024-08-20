// 데이터 조회하기
export const getTodoList = async () => {
  try {
    const response = await fetch('/todos');
    if (!response.ok) {
      throw new Error('데이터를 불러오는데 실패했습니다.');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

// 데이터 생성하기
export const postTodoList = async title => {
  try {
    const response = await fetch('/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title }),
    });

    if (!response.ok) {
      throw new Error('데이터를 생성하는데 실패했습니다.');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const patchTodoList = async (id, title) => {
  try {
    const response = await fetch(`/todos/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title }),
    });

    if (!response.ok) {
      throw new Error('데이터를 수정하는데 실패했습니다.');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
