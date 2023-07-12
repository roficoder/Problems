
const array = [
    {name: 'Heap Out of Memory', description: 'Used to increase memory of node when it throws an error of heap out of memory', link: 'https://gist.github.com/roficoder/44a62115e9fd9714266dad6bc9ed66c5'},
    {name:'Efaad Loader', description:'Loader of Efaad Application which is shown when http request is made', link:'https://gist.github.com/roficoder/167b7b98ad04492d7824ef9ce4873faf'},
    {name:'Patching Form Value', description:'After fetching data from the api if we want to popup in profile page this can be used', link:'https://gist.github.com/roficoder/fb35c79adb02b13c77c7ba20a92f2906'}
  ];


  // Sort the array in alphabetical order based on the "name" field
const sortedArray = array.sort((a, b) => a.name.localeCompare(b.name));

  function createTable(data) {
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');
    const headerRow = document.createElement('tr');

    // Create table headers
    for (let key in data[0]) {
      const th = document.createElement('th');
      th.textContent = key;
      headerRow.appendChild(th);
    }
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Create table rows
    data.forEach(item => {
      const row = document.createElement('tr');
      for (let key in item) {
        const cell = document.createElement('td');
        if (key === 'link') {
          const linkCell = document.createElement('td');
          linkCell.classList.add('link-cell');
          const link = document.createElement('a');
          link.href = item[key];
          link.textContent = 'Link';
          link.target = '_blank'; // Open link in a new page
          linkCell.appendChild(link);
          row.appendChild(linkCell);
        } else {
          cell.textContent = item[key];
          row.appendChild(cell);
        }
      }
      tbody.appendChild(row);
    });

    table.appendChild(tbody);
    return table;
  }

  const tableContainer = document.getElementById('tableContainer');
  const searchInput = document.getElementById('searchInput');

  function filterData(searchTerm) {
    const filteredArray = array.filter(item => {
      const lowerCaseTerm = searchTerm.toLowerCase();
      const lowerCaseName = item.name.toLowerCase();
      const lowerCaseDescription = item.description.toLowerCase();
      return lowerCaseName.includes(lowerCaseTerm) || lowerCaseDescription.includes(lowerCaseTerm);
    });

    tableContainer.innerHTML = '';
    tableContainer.appendChild(createTable(filteredArray));
  }

  searchInput.addEventListener('input', event => {
    const searchTerm = event.target.value;
    filterData(searchTerm);
  });

  // Initial display of the table with all data
  tableContainer.appendChild(createTable(array));