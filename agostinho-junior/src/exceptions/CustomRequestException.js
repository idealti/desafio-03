class CustomRequestException extends Error {

    constructor(message) {
        super(message)
        this.name = 'CUSTOM_EXCEPTION'
        this.error = message

        // DEBUG
        if(process.env.NODE_ENV !== 'production')
            console.error(this.error)
            
        if(this.error.code == 'ERR_BAD_REQUEST'){
            
            if(this.error.response && this.error.response.data){
                const data = this.error.response.data
                var first_error = '...'
                if (typeof(data) == 'string'){
                    first_error =  data
                }
                if (typeof(data) == 'object'){
                    // {} e [] são do tipo 'object', 
                    // abaixo, em try catch é testado quem tem .length
                    if (data.length === undefined){
                        //se undefined,  então é json, caso contrario é array
                        let first_key = Object.keys(data)
                        first_error = data[first_key[0]]
                        
                    }else{
                        first_error = data[0]
                    }
                }
                alert(first_error)
            }
        }
        
        if(this.error.code == 'ERR_BAD_RESPONSE'){
            // ERROR 500 CASES
            if(this.error.response && this.error.response.status == 500){
                alert('Erro 500: '+JSON.stringify(this.error.response.data).substring(0,400))
                console.error(JSON.stringify(this.error.response.data).substring(0,600))
            }else{
                alert(this.error.response.status+ ' - ERR_BAD_RESPONSE')
            }
        }
        
        // Conexão com a internet
        if (this.error.code === "ERR_NETWORK"){
            alert("Não foi possível conectar ao servidor!")
        }
        

        console.error('custom error: ', this.error)
        return this.error
        
    }
}

export default CustomRequestException