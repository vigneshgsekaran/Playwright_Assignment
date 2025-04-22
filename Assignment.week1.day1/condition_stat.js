let lanuchbrowser = "firefox"
if(lanuchbrowser == "msedge")
    {
        console.log("Edge browser is lanuched")
    } 
    else if (lanuchbrowser == "firefox"){
        console.log("Firefox browser is lanuched")
    }
    else{
        console.log("default browser chrome is lanuched")
    }


    let testcase = "sanity"
    switch(testcase){
        case "regression":
        console.log("regression case has been run")
        break;

        case "sanity":
        console.log("sanity case has been run")
        break;

        default:
        console.log("smoke case has been run")
        break;    


    }
    