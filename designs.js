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
        

        $(pixelCanvas).add('tr').add('td');
        
        return false;
    });
    
    function makeGrid() {
    }




});

