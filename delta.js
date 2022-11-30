

        function calculara(){
            var txta = window.document.querySelector(`input#txta`)
            var txtb = window.document.querySelector(`input#txtb`)
            var txtc = window.document.querySelector(`input#txtc`)
            var res = window.document.querySelector(`div.res`)
            var a = Number(txta.value)
            var b = Number(txtb.value)
            var c = Number(txtc.value)
            var delta = b ** 2 - 4 * a * c
            var raiz = (Math.sqrt(delta))
            var x1 = (- b + raiz)/ (2 * a)
            var x2 = (- b - raiz)/ (2 * a)
            var x1 = parseFloat(x1.toFixed(3))
            var x2 = parseFloat(x2.toFixed(3))
           
            if(txta.value.length == 0 || txtb.value.length == 0 ||txtc.value.length == 0){
                window.alert('Por favor digite números para a, b e c.')
            }else{

   
            res.innerHTML = `<p> O valor de <strong>a</strong> é <strong>${a}</strong>, 
            o valor de <strong>b</strong> é <strong>${b}</strong> e o valor de <strong>c</strong> é <strong>${c}<strong>.</p>`

            res.innerHTML += `<p> O valor de <strong>Delta</strong> é <strong>${delta}</strong>.`
            if(delta < 0){
                res.innerHTML += `Equação inexistente, pois a <strong>Delta</strong> é negativa.`
            }
            else{
                res.innerHTML += `A raiz de <strong>Delta</strong> é: <strong>${raiz}</strong>` 
            }
            if(delta > 0){
            res.innerHTML += `<p>O valor de <strong>X1</strong> é: <strong>${x1}</strong> e o 
            valor de <strong>X2</strong> é: <strong>${x2}</strong>.</p>`
            }
            else{
                res.innerHTML += `<p>Não existe raizes reais para essa equação.</p>`
            }
            res.innerHTML += `<input type="button" value="Clique aqui para ver o passo a passo" onclick="passoapasso()" class="botao2">
            <div class="eq"></div>`
            }}
            
        function passoapasso(){
            var txta = window.document.querySelector(`input#txta`)
            var txtb = window.document.querySelector(`input#txtb`)
            var txtc = window.document.querySelector(`input#txtc`)
            var a = Number(txta.value)
            var b = Number(txtb.value)
            var c = Number(txtc.value)
            var delta = b ** 2 - 4 * a * c
            var raiz = (Math.sqrt(delta))
            var x1 = (- b + raiz)/ (2 * a)
            var x2 = (- b - raiz)/ (2 * a)
            var x1 = parseFloat(x1.toFixed(3))
            var x2 = parseFloat(x2.toFixed(3))
            var eq = window.document.querySelector(`div.eq`)
            var aparecer = window.document.querySelector(`div.aparecer`)
            var eq1 = a * (x1 * x1) + (b * x1) + c
            var eq2 = a * (x2 * x2) + (b * x2) + c
            var eq1 = parseFloat(eq1.toFixed(1))
            var eq2 = parseFloat(eq2.toFixed(1))
            
           

            eq.innerHTML = `<p>Os valores digitados para <strong>a</strong>, <strong>b</strong> e <strong>c</strong>, 
            correspondentes, são: <strong>${a}</strong>, <strong>${b}</strong> e <strong>${c}</strong>.</p> 
            <h2> Cálculo da Delta &#916 </h2>`
            
            eq.innerHTML += `</h2> <p> &#916 = b² -4 * a *c </p><p> &#916 = (${b} * ${b}) - 4 * ${a} * ${c}</p> 
            <p> <strong>&#916 = ${delta}</strong></p>`

            if(delta > 0 && eq1 == 0.0 && eq2 == 0.0){
                eq.innerHTML += `<h2> Aplicando a fórmula de Bhaskara</h2> <p> x = (- b +- √&#916) / 2 * a</p> 
                <p><strong>Substituindo temos:
                &#8594</strong>  x = (- ${b} +- √${delta}) / 2 * ${a}</p> 
                <p>x1 = (- ${b} + √${delta}) / 2 * ${a}</p> 
                <p> x1 = (- ${b} + ${raiz}) / 2 * ${a} </P>
                <p> <strong>x1 = ${x1}</strong></p>
                <p> x2 = (- ${b} - √${delta}) / 2 * ${a}</p> 
                <p> x2 = (- ${b} - ${raiz}) / 2 * ${a} </p> 
                <p> <strong>x2 = ${x2}</strong></p> 
                <h2> Validação da equação &#8594 ax² + bx + c = 0</h2> 
                <p> <strong>Equação 1 &#8594 </strong> a * (x1²) + (b * x1) + c = 0 </p>
                <p><strong>Substituindo temos: &#8594 </strong> ${a} * (${x1} * ${x1}) + (${b} * ${x1}) + ${c} = 0 </p> 
                <p> <strong> Equação 1 = ${eq1} </strong> </>
                <p> Equação 2 <strong> &#8594 </strong> a * (x2²) + (b * x2) + c = 0 </p>
                <p><strong>Substituindo temos: &#8594 </strong> ${a} * (${x2} * ${x2}) + (${b} * ${x2}) + ${c} = 0 </p> 
                <p> <strong> Equação 2 = ${eq2} </strong>`}
            else{
                eq.innerHTML += `Não exite raízes reais para essa equação, pois a &#916 é menor ou igual à 0.`
                }        
        }
        