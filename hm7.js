const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function myBlend(list){
  for (let i = list.length - 1; i > 0; i--) {
    let d = Math.floor(Math.random() * (i + 1));
    [list[i], list[d]] = [list[d], list[i]];
  }
}

myBlend(arr)
console.log(arr)



const company = {
    name: 'Велика Компанія',
    type:'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
        {
            name: 'Клієнт 1',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
                {
                    name: 'Клієнт 1.1',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                },
                {
                    name: 'Клієнт 1.2',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                    partners: [
                        {
                            name: 'Клієнт 1.2.3',
                            type: 'subSubCompany',
                            uses: 'Рішення для продажу квитків',
                            sells: 'Рішення для продажу квитків',
                        }
                    ]
                }
            ]
        },
        {
            name: 'Клієнт 2',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків'
        }
    ]
};


function findDescriptionByName(name, company) {
  if (company.name === name) {
    return company
  }
  if (company.clients) {
    for (let client of company.clients) {
      const result = findDescriptionByName(name, client)
      if (result) {
        return result
      }
    }
  }
  if (company.partners) {
    for (let partner of company.partners) {
      const result = findDescriptionByName(name, partner)
      if (result) {
        return result
      }
    }
  }
  return null
}

const test = findDescriptionByName('Клієнт 2', company)
console.log(test)