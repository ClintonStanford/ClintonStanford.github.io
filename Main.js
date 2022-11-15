let SHEET_ID = '1eeQDcLufFMOLQIpS9qOHljeNK5atvJqcJPVuVcE9wvk'
let SHEET_TITLE = 'users';
let SHEET_RANGE = 'A1:A6'



let FULL_URL = ('https://docs.google.com/spreadsheets/d/' + SHEET_ID + '/gviz/tq?sheet=' + SHEET_TITLE + '&range=' + SHEET_RANGE);

fetch(FULL_URL)
.then(res => res.text())
.then(rep => {
    let data = JSON.parse(rep.substr(47).slice(0,-2));

    let users_title = document.getElementById('users_title');
    let users_Name = document.getElementById('users_Name');
    let length = data.table.rows.length;
    console.log(length);

    /*for(let i = 1;i<length;i++){

        let NewBoxPlayer = document.createElement('option');
        NewBoxPlayer.id = ("box"+i);
        NewBoxPlayer.className = "Some_Style";
        selectOptionPlayer.append(NewBoxPlayer);
        NewBoxPlayer.innerHTML = data.table.rows[i].c[0].v;

        let NewBoxShoe = document.createElement('div');
        let space = document.createElement('hr');
        let space2 = document.createElement('hr');
        NewBoxShoe.id = ("box"+i);
        NewBoxShoe.className = "Some_Style";
        player_Shoe.append(NewBoxShoe);
        player_Shoe.append(space);
        player_Shoe.append(space2);
        NewBoxShoe.innerHTML = data.table.rows[i].c[1].v;

    }*/

})
