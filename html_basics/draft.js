const board = document.getElementById("board");

for(let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
        if (i % 2 > 0) {
            if (j % 2 > 0) {
                board.innerHTML += `
            <div class='c1'></div>
            `;
            }else{
                board.innerHTML += `
            <div class='c2'></div>
            `;
            }
            
        }else {
            if (j % 2 > 0) {
                board.innerHTML += `
            <div class='c2'></div>
            `;
            }else{
                board.innerHTML += `
                <div class='c1'></div>
                `;
            }   
        }
    }
}