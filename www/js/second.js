$(function(){
    
    var link2 = crossroads.addRoute('', function() {
        query = window.location.search;
        urlParam = new URLSearchParams(query);
        var id = urlParam.get('id');

        $(ajax({
            type: "post",
            url: "https://kerbau.odaje.biz/getstaffbyid",
            data: datalist,
            cache: false,
            success: function(returnedData){
            //instructions to execute when the ajax call is succeeds
                var returnedData = JSON.parse(datareceived);
                if (returnedData > 0) {
                    htmlText = "";
                    for (i = 0; i < returnedData; i++) {
                        htmlText = htmlText + "<tr><td>" +employeeNumber+ "</td><td>" +firstName+ "</td><td>" +lastName+ "</td><td>" +officeCode+ "</td><td>" +extension+ "</td><td>" +email+ "</td><td>" +jobTitle+ "</td><td>" +reportsTo+ "</td></tr>";                               
                    }
                    $('#maintable tbody').html(htmlText);
                } 
                else {
                    htmlText = "<tr><td>No data found! </td></tr>"
                    $('#maintable tbody').html(htmlText); 
                }
            },
            error: function(){
            //instructions to execute when the ajax call is failed
                alert("Please contact admin!");
            }
        })
    
        ); 
    })

    




    function parseHash(newHash, oldHash) {
        crossroads.parse(newHash);
    }


    hasher.initialized.add(parseHash);
    hasher.changed.add(parseHash);
    hasher.init();

})