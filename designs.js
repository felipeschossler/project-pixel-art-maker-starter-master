$(document).ready(function () {

    //declaration of variables that will use in grid
    var colorPicker = $('#colorPicker');
    var inputHeight = $('#inputHeight');
    var inputWidht = $('#inputWidht');
    
    //function of submit that reads the value of the inputs
    $('#sizePicker').submit(function () {
        
        event.preventDefault(); //prevent the page to execute the default action, that in this case is to reload
        inputHeight = $('#inputHeight').val();
        inputWidht = $('#inputWidht').val();

        $('#pixelCanvas').empty(); //remove all children from `pixelCanvas` before the loop for re-submit
        let cont, cont1; //declaring the variables used on the `for` command

        //loop for Height and Widht
        for (cont = 1; cont <= inputHeight; cont++) {
            addTr = $('#pixelCanvas').append('<tr></tr>');
            for (cont1 = 1; cont1 <= inputWidht; cont1++) {
                addTd = $('tr:last').append('<td></td>');
            }
        }

    });

    //function of click that read the input of the color and change background-color in 'td'
    $('#colorPicker').click(function (){
        
        $('td').click(function () {
            $(this).css('background-color', $('#colorPicker').val());
        });

    });
    
});