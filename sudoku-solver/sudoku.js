const $txtN_0_0 = $('#cell-0_0');

const $btnResolver = $('#btnResolver');  

$btnResolver.on('click', function(e) {
    e.preventDefault();
    const tableroSudoku = obtenerTableroSudoku();
    
    $.ajax({
        type: 'POST',
        url: 'solver.php',
        data: {'array': JSON.stringify(tableroSudoku)},
        success: function (data) {
            for (let r = 0; r < 9; r++) {
                const row = [];
                for (let c = 0; c < 9; c++) {
                    $(`#cell-${r}_${c}`).val(data[r][c]);
                }
            }

            for (let r = 0; r < data.length; r++) {
                console.log(data[r]);
            }
        },
        error: function () {
            alert("Ha ocurrido un error");
        }
    });
});


function obtenerTableroSudoku() {
    const tableroSudoku = [];
    for (let r = 0; r < 9; r++) {
        const row = [];
        for (let c = 0; c < 9; c++) {
            row.push(valorMatrix(r, c));
        }
        tableroSudoku.push(row);
    }
    return tableroSudoku;
}

function numeroONull(s) {
    const v = parseInt(s);
    return isNaN(v) ? 0 : v;
}

function valorMatrix(r, c) {
    return numeroONull($(`#cell-${r}_${c}`).val());
}