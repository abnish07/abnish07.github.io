
var output_value = "";   // display value
var arr = []

    // function for input value

function keyClicked(input){
    if(!flag){
        output_value = output_value + input
        document.getElementById("name").innerText = output_value
        arr.push(output_value)
    }


    // start code for when shift button is ON it print symbol only one time

    if(flag){
        switch(input){
            case 1:
                
                var sym1 = document.getElementById("s1").value
                console.log(sym1)
                output_value = output_value + sym1
                document.getElementById("name").textContent = output_value
                flag = false
                document.getElementById("shift-color").style.color = "black"
                break;

            case 2:
                var sym2 = document.getElementById("s2").value;
                console.log(sym2)
                output_value = output_value + sym2
                document.getElementById("name").textContent = output_value
                flag = false
                document.getElementById("shift-color").style.color = "black"
                break;

            case 3:
                var sym3 = document.getElementById("s3").value
                console.log(sym1)
                output_value = output_value + sym3
                document.getElementById("name").textContent = output_value
                flag = false
                document.getElementById("shift-color").style.color = "black"
                break;

            case 4:
                var sym4 = document.getElementById("s4").value
                console.log(sym4)
                output_value = output_value + sym4
                document.getElementById("name").textContent = output_value
                flag = false
                document.getElementById("shift-color").style.color = "black"
                break;

            case 5:
                var sym5 = document.getElementById("s5").value;
                console.log(sym5)
                output_value = output_value + sym5
                document.getElementById("name").textContent = output_value
                flag = false
                document.getElementById("shift-color").style.color = "black"
                break;

            case 6:
                var sym6 = document.getElementById("s6").value
                console.log(sym6)
                output_value = output_value + sym6
                document.getElementById("name").textContent = output_value
                flag = false
                document.getElementById("shift-color").style.color = "black"
                break;

            case 7:
                var sym7 = document.getElementById("s7").value;
                console.log(sym7)
                output_value = output_value + sym7
                document.getElementById("name").textContent = output_value
                flag = false
                document.getElementById("shift-color").style.color = "black"
                break;

            case 8:
                var sym8 = document.getElementById("s8").value;
                console.log(sym8)
                output_value = output_value + sym8
                document.getElementById("name").textContent = output_value
                flag = false
                document.getElementById("shift-color").style.color = "black"
                break;

            case 9:
                var sym9 = document.getElementById("s9").value
                console.log(sym9)
                output_value = output_value + sym9
                document.getElementById("name").textContent = output_value
                flag = false
                document.getElementById("shift-color").style.color = "black"
                break;

            case 0:
                var sym0 = document.getElementById("s10").value;
                console.log(sym0)
                output_value = output_value + sym0
                document.getElementById("name").textContent = output_value
                flag = false
                document.getElementById("shift-color").style.color = "black"
                break;
            default:
                console.log("No")        
        }
    }

    //    End code for shift button 


      // start Code for when caps is ON and OFF

  if(flag){

    var numberbtn = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    for(var i = 0; i<=10; i++)
    {          
        for(var j = i; j<=10; j++)
        {
            if(input == numberbtn[i])
            {
                output_value = output_value + numberbtn[i]
                document.getElementById("name").innerHTML = output_value
                break;
            }
        }
    }
        output_value = output_value + input.toUpperCase()
        document.getElementById("name").innerHTML = output_value
}

// End Code for when caps is ON and OFF
}


//  function of space bar

function spaceBar()
    {
    output_value = output_value + " "
    document.getElementById("name").textContent = output_value
    }

    //  End of Space Bar


        // function for delete element

function delElem()
    {

        var delItem = output_value  
        var delItem = delItem.substring(0, delItem.length-1)
        document.getElementById("name").textContent = delItem
        output_value = delItem

    }
        //  End of delete Button 
            

  // Start of Reverse The String

   var flag = false
function reverseStr()
    {
    
    if(!flag)
      {
        var str = output_value.split("")
        console.log(str.length)

        document.getElementById("rev-color").style.color = "green"
        var revStr = []

        for(var i = str.length; i>=0; i--)
            {
            revStr.push(str[i])
            }

        document.getElementById("name").textContent = revStr.join("")
    }
    
    if(flag)
        {
          var str = output_value
          document.getElementById("rev-color").style.color = "black"
          document.getElementById("name").textContent = output_value
        }
      flag = !flag
}

// End of Reverse String 

// strat function for password 

   var flag = false
function showPassword()
    {
        if(!flag)
        {
            var pass= output_value.split("")
            // console.log(pass)
            document.getElementById("pass-color").style.color = "green"
            var star = "*";
            var newPass= []

            for(var i =0; i< pass.length; i++)
                {
                    if(i == pass.length-1)
                    {
                        pass[i] = pass[i]
                        newPass.push(pass[i])
                    }
                    else
                    {
                        pass[i] = star
                        newPass.push(pass[i])
                    }
                }       
            console.log(newPass.join(""))
            document.getElementById("name").textContent = newPass.join("")
        }
        else
        {
            var pass = output_value
            document.getElementById("pass-color").style.color = "black"
            document.getElementById("name").textContent = pass
        }
        flag = !flag
    }

    // End code for password

// start code for clean function

  var  flag = false
function cleanPass()
    {
        if(!flag)
            {
                var cleanPass = output_value.split("")
                console.log(cleanPass)
                document.getElementById("clean-color").style.color = "green"
                var star = "*";
                var newcleanPass= []
    
                for(var i =0; i< cleanPass.length; i++)
                    {
                        if(i== 0 || i == cleanPass.length-1)
                            {
                            cleanPass[i] = cleanPass[i]
                            newcleanPass.push(cleanPass[i])
                            }
                        else
                        {
                            cleanPass[i] = star
                            newcleanPass.push(cleanPass[i])
                        }
                    }
                console.log(newcleanPass.join(""))
                document.getElementById("name").textContent = newcleanPass.join("") 
            }
        if(flag)
            {
                document.getElementById("clean-color").style.color = "black"
                var cleanPass = output_value
                document.getElementById("name").textContent = cleanPass
            }
          flag = !flag
    }

// End for clean function


//  start for caps button color ON and OFF

        var flag = false
function capsButton() 
    {
        if (!flag) 
            {
                document.getElementById('caps-color').style.color = "green" 
            }
            if(flag)
            {
                document.getElementById('caps-color').style.color = "black"               
            }
            flag = !flag
    }

// End for caps button 


        //  Toggle shift button 

        var flag = false
function shiftButton()
    {
        if(!flag)
            {
                document.getElementById("shift-color").style.color = "green"
                
            }
            else
            {
                document.getElementById("shift-color").style.color = "black"
            }
            flag = !flag
    }
    
   