document.querySelector("#calcular").addEventListener
    ('click',(event)=>{
        event.preventDefault();
        let vb = document.querySelector("#valor_base").value;
        let vt = document.querySelector("#transporte").value;
        let va = document.querySelector("#alimentação").value;
       
        let v1 = Number(vb) + Number(vt) + Number(va);

        document.querySelector("#receita_total").value = v1;

        let vd = document.querySelector("#desconto_automóvel").value;
        let vf = document.querySelector("#faltas").value;

        let v2 = Number(vd) + Number(vf);

        document.querySelector("#desconto_total").value = v2;

        let v3 = Number(v1) - Number(v2);

        document.querySelector("#total_al").value = v3;


    });

    document.querySelector("#resetar").addEventListener
    ('click',(event)=>{

        document.querySelector("#valor_base").value ="";
        document.querySelector("#transporte").value ="";
        document.querySelector("#alimentação").value ="";
        document.querySelector("#receita_total").value ="";
        document.querySelector("#desconto_automóvel").value ="";
        document.querySelector("#faltas").value ="";
        document.querySelector("#desconto_total").value ="";
        document.querySelector("##total_al").value ="";
    });

