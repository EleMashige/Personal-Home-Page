var fruits;


fruits = ['Rock climbing', 'Surfing', 'Going for drives', 'Visit the townshps',];


document.getElementById('button').addEventListener('click', (event) => {
  let element_list = document.getElementById('list');
  if (!!fruits.length) {
    let new_li = document.createElement('li');
    new_li.innerText = fruits.shift();

    element_list.appendChild(new_li);
  }
  });