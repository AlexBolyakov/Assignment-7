function hasUniqueChar(str) {
    
    for (i = 0; i < str.length; i++) {
        console.log("Cycle number =",i)
        
        for (j = i; j < str.length; j++) {
            console.log("j=",str[j])
            if (str[i] === str[j+1]) {
                console.log("false")
                return false
            }
        }
    } 
}

hasUniqueChar("Monday")