    const ageString = prompt('Введіть ваш вік:'); 
    const age = parseInt(ageString);
    if ((age < 1) || (!age))
    alert (`Введіть правильні дані`);
    else if ((4 < age && age < 21) || (age % 10 >= 5 || age % 10 === 0))
        alert(`Вам ${age} років`);
        else if ((1 < age && age < 5) || (age % 10 <= 4 && age % 10 >= 2))
                                alert(`Вам ${age} роки`);
                                else 
        alert(`Вам ${age} рік`);