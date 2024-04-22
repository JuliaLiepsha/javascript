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
  function findValueByKey(companyName, company) {
  
    if (company.clients) {    
     
      for (let client of company.clients) {
        if (client.name === companyName) {
          return client;
        }  
        
        if (client.partners) {
          
          let result = findValueByKey(companyName, { clients: client.partners });
          if (result) {
            return result;
          }
        }
      }
    }  
   
    return null;
  } 
  
  const companyName = 'Клієнт 1.2.3';
  const result = findValueByKey(companyName, company);
  
  if (result) {
    
    console.log(result);
  } else {
    console.log(companyName, ' відсутня в даних');
  }