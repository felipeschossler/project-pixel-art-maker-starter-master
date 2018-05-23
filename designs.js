$(document).ready(function(){

    //Declaration of variables

    var colorPicker = $('#colorPicker');
    var inputHeight = $('#inputHeight');
    var inputWidht = $('#inputWidht');
    var sizePicker = $('#sizePicker');
    var pixelCanvas = $('#pixelCanvas');

    //function that reads the value of the inputs


        $(sizePicker).submit(function(){

            colorPicker = $(colorPicker).val();
            inputHeight = $(inputHeight).val();
            inputWidht = $(inputWidht).val();
            
            //loop for Height and Widht
            for(cont = 1; cont <= inputHeight; cont++){
                addTr = $(pixelCanvas).append('<tr></tr>');
                for(cont1 = 1; cont1 <= inputWidht; cont1++){
                    addTd = $('tr:last').append('<td></td>');
                    $('td').click(function() {
                        $(this).css("background-color", colorPicker);
                    });
                }
            }

            

            return false;
        });
    
});

