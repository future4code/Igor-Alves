function generateInformation(year: number, historyTime?: string): string {
    if( typeof year === "number" || typeof historyTime === "string") {
        if(historyTime === null) {
            const historyTime: string= "DC"
        }

        switch (historyTime) {
            case "AC":
                switch (year) {
                    case 100000:
                        return "Pré-História"
                        break;
                    case 4000:
                        return "Idade Antiga"
                        break;
                }
            break;
            case "DC":
                switch (year) {
                    case 476:
                        return "Idade Média"
                        break;
                    case 1453:
                        return "Idade Moderna"
                        break;
                    case 4000:
                        return "Idade Contemporânea"
                        break;
                }
            break;
        }  
    } else {
        console.log("Ocorreu um erro. Passe parametros compativeis")
    } 
}

console.log(generateInformation(476, "DC"))
  

