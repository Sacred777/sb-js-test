export async function loadData() {
  try {
    const response = await fetch('../../../../public/projects.json');
    return await response.json();
  } catch (error) {
    console.error('Ошибка загрузки данных:', error);
  }
}
