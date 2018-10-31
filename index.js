// alert('HEy HO');
document.getElementById('date').innerHTML = Date();

const itemsData = [{
  date: '12/10/2018',
  title: 'first',
  status: 'done',
},{
  date: '12/12/2018',
  title: 'second',
  status: 'done',
},{
  date: '12/10/2018',
  title: 'third',
  status: 'done',
}]


const handleAddClick = (newItemData) => {
  const updatedData =  [
    ...itemsData,
    newItemData,
  ];

  generateItemsHTML(updatedData);
}

const renderItem = ({
  date,
  title,
  status
}) => {
  // createHTML
  element.innerHTML = (
    `<div>
    <span>${title}</span>
    <span>${dates}</span>
    <span>${status}</span>
    </div>`
  )
}

const generateItemsHTML = () => {
  let generatedHTML = '';
  
  // Assign HTML for all items to a variable
  itemsData.forEach(item => {
    generatedHTML += renderItem(item);
  })

  // Append generated HTML to List element
  element.appendChild(generatedHTML);
}