$(function(){
    
    var link2 = crossroads.addRoute('', function() {
        $(ajax({
        type: "post",
        url: "https://kerbau.odaje.biz/getstaff.php",
        data: datalist,
        cache: false,
        success: function(datareceived){
         //instructions to execute when the ajax call is succeeds
            var datareceived = JSON.parse(returendData);
            if (datareceived > 0) {
                htmlText = "";
                for (i = 0; i < datareceived; i++) {
                    secondpage="<a href='secondpage.html?id="+employeeNumber+"'>"+email+"</a>"
                    htmlText = htmlText + "<tr><td>"+secondpage+"</td></tr>";                
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
            console.log("ajax error!");
            alert("Please contact admin!");
        }
    })
    
    ); 
    });

    // if(pass1 === pass2) {
    //     $.ajax({
    //         type : "post",
    //         url : "http://192.168.0.101:8080/Lab_5_CSF3503/Register",
    //         data : datalist,
    //         cache : false,
    //         success : function(mydata) {
    //             var myData = JSON.parse(mydata);
    //             if(myData.status === 1) {
    //                 alert("User already Register");
    //             }
    //             else {
    //                 alert("User Successfully Registered");
    //                 location.href = "login.html";
    //             }
    //         },
    //         error : function(){
    //             console.log("ajax error!");
    //             alert("Please contact admin!");
    //         }
    //     });
    // } else {
    //     alert("Password did not match!");
    // }

    function parseHash(newHash, oldHash) {
        crossroads.parse(newHash);
    }


    hasher.initialized.add(parseHash);
    hasher.changed.add(parseHash);
    hasher.init();

});