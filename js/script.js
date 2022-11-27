const spend = document.getElementById('spend');
const optionGroup = document.querySelector('.optionGroup');
const descrip = document.getElementById('descr');
const date = document.getElementById('date');
const mount = document.getElementById('mount');
const sendBtn = document.getElementById('send');

const contentType = document.querySelector('.contentType');


optionGroup.addEventListener('change', dropDownMenu);

function dropDownMenu() {
    switch (optionGroup.value) {
        case "daily":
            console.log('Diaria')
            return 'Diaria';
        case "weekly":
            console.log('Semanal');
            return 'Semanal';
        case "monthly":
            console.log('Mensual');
            return 'Mensual';
        case "bimonthly":
            console.log('Bimestral');
            return 'Bimestral';
        case "annual":
            console.log('Anual');
            return 'Anual';
        default:
            console.log('Elección?');
    }
}


sendBtn.addEventListener('click', () => {

    const totalSpends = [];

    const generalSpends = {
        gastos: spend.value,
        elecc: dropDownMenu(),
        desc: descrip.value.toUpperCase(),
        fecha: date.value,
        monto: parseFloat(mount.value)
    }

    totalSpends.push(generalSpends);

    for (let gasto of totalSpends) {
        console.log(gasto.gastos);


        const spendTypeDiv = document.createElement('div');
        spendTypeDiv.innerText = gasto.elecc;

        const spendDescrp = document.createElement('div');
        spendDescrp.innerText = gasto.desc;

        const spendDate = document.createElement('div');
        spendDate.innerText = gasto.fecha;

        const spendMount = document.createElement('div');
        spendMount.innerText = `$ ${gasto.monto}`;

        const spendButton = document.createElement('button');
        spendButton.type = 'button';
        spendButton.classList.add('erase');
        spendButton.id = 'erase';
        spendButton.innerText = 'Borrar';  


        contentType.append(spendTypeDiv, spendDescrp, spendDate, spendMount, spendButton);
        
        
        spendButton.addEventListener('click', () => {
            contentType.remove();
        });

    }
});